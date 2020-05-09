import React, { ReactElement, useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Formik, Form, Field, FormikProps, useFormikContext } from 'formik';

import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import getTagCounts from '../../helpers/getTagCounts';

import { connect } from 'react-redux';
import { applyFilters, clearFilters } from '../../state/actions';
import { getAppliedFilters } from '../../state/selectors';

const FormLabel = styled(FormControlLabel)`
  margin-right: auto;
  margin-left: 1rem;
`;

const Buttons = styled(Grid)`
  max-width: 100%;
  padding: 0.5rem 0;
  position: sticky;
  bottom: 0;
  background-color: #fdfde8;
  border-top: 1px solid rgba(0, 0, 0, 0.12);
`;

const StyledFormGroup = styled(FormGroup)`
  min-height: 100vh;
`;

const LabelTypography = styled(Typography)`
  display: inline-block;
  margin-right: 0.25rem;
`;

const Count = styled(LabelTypography)`
  color: #74746a;
`;

interface FiltersFormValues {
  appliedFilters: string[];
}

interface Errors {
  appliedFilters?: string;
}

const validate = (values: FiltersFormValues): {} | Errors => {
  const errors: Errors = {};

  if (!values.appliedFilters.length) {
    errors.appliedFilters = 'At least one filter must be selected.';
  }

  return errors;
};

interface FilterFieldProps {
  filter: string;
  count: number;
}

const FilterField: React.FC<FilterFieldProps> = ({ filter, count }) => (
  <FormLabel
    htmlFor="appliedFilters"
    label={
      <Grid container alignItems={'center'}>
        <LabelTypography variant={'h6'}>{filter}</LabelTypography>
        <Count variant={'body2'}>{` (${count})`}</Count>
      </Grid>
    }
    labelPlacement={'end'}
    control={
      <Field
        as={Checkbox}
        type={'checkbox'}
        name="appliedFilters"
        value={filter}
      />
    }
  />
);

FilterField.propTypes = {
  filter: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};

interface Values {
  values: FiltersFormValues;
}

interface FieldsProps {
  filters: string[][];
}

const Fields = ({ filters }: FieldsProps): ReactElement => {
  function filterTagsByAppliedFilters(appliedFilters: string[]): string[][] {
    return filters.filter((filtersArray) =>
      appliedFilters.every((val) => filtersArray.includes(val))
    );
  }

  function createFilterFields(filters: string[][]): ReactElement[] {
    const filterCounts: Map<string, number> = getTagCounts(filters);
    const filterFields: ReactElement[] | null = [];
    filterCounts.forEach((count, filter) =>
      filterFields.push(
        <FilterField key={filter} filter={filter} count={count} />
      )
    );
    return filterFields;
  }

  const { values }: Values = useFormikContext();
  const [filterFields, setFilterFields] = useState(createFilterFields(filters));

  useEffect(() => {
    if (values.appliedFilters && values.appliedFilters.length) {
      const { appliedFilters } = values;
      const filtered = filterTagsByAppliedFilters(appliedFilters);
      setFilterFields(createFilterFields(filtered));
    } else {
      setFilterFields(createFilterFields(filters));
    }
  }, [values.appliedFilters]);

  return <>{filterFields}</>;
};

Fields.propTypes = {
  filters: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
  ).isRequired,
};

interface FiltersFormProps {
  filters: string[][];
  applyFilters: (appliedFilters: string[]) => void;
  clearFilters: () => void;
  appliedFilters: string[];
  onSubmitCallback: () => void;
}

const FiltersForm: React.FC<FiltersFormProps> = ({
  filters,
  applyFilters,
  clearFilters,
  appliedFilters,
  onSubmitCallback,
}) => {
  return (
    <Formik
      enableReinitialize={true}
      initialValues={{
        appliedFilters: appliedFilters,
      }}
      validate={validate}
      onSubmit={(values, actions): void => {
        applyFilters(values.appliedFilters);
        actions.setSubmitting(false);
        onSubmitCallback();
      }}
    >
      {(props: FormikProps<any>): ReactElement => (
        <Form>
          <StyledFormGroup>
            <Fields filters={filters} />
          </StyledFormGroup>

          <Buttons container direction={'row'} spacing={1} justify={'center'}>
            {props.touched.appliedFilters && props.errors.appliedFilters ? (
              <Grid container item xs={12} sm={12} justify={'center'}>
                <FormHelperText error>
                  {props.errors.appliedFilters}
                </FormHelperText>
              </Grid>
            ) : null}
            <Grid item>
              <Button
                type="reset"
                variant={'contained'}
                color={'primary'}
                size={'small'}
                onClick={(): void => clearFilters()}
              >
                Clear
              </Button>
            </Grid>
            <Grid item>
              <Button
                type="submit"
                variant={'contained'}
                color={'primary'}
                size={'small'}
              >
                Apply
              </Button>
            </Grid>
          </Buttons>
        </Form>
      )}
    </Formik>
  );
};

FiltersForm.propTypes = {
  filters: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
  ).isRequired,
  onSubmitCallback: PropTypes.func.isRequired,
};

export default connect(
  (state) => ({ appliedFilters: getAppliedFilters(state) }),
  { applyFilters, clearFilters }
)(FiltersForm);
