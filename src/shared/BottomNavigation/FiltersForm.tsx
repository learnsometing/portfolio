import React, { ReactElement, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Formik, Form, Field, FormikProps } from 'formik';

import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Divider from '@material-ui/core/Divider';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Grid from '@material-ui/core/Grid';

const FormLabel = styled(FormControlLabel)`
  margin-right: auto;
  margin-left: 1rem;
`;

const Buttons = styled(Grid)`
  max-width: 100%;
  padding: 1rem 0;
`;

const StyledForm = styled(Form)`
  margin-bottom: 0;
  background-color: #fdfde8;
  overflow-y: auto;
`;

interface FiltersFormValues {
  appliedFilters: string[];
}

interface Errors {
  appliedFilters: string;
}

const validate = (values: FiltersFormValues): Errors => {
  const errors = {
    appliedFilters: '',
  };
  console.log(values.appliedFilters);
  if (!values.appliedFilters.length) {
    errors.appliedFilters = 'At least one filter must be selected.';
  }

  return errors;
};

interface FilterFieldProps {
  filter: string;
}

const FilterField: React.FC<FilterFieldProps> = ({ filter }) => (
  <FormLabel
    htmlFor="appliedFilters"
    label={filter}
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
};

interface FiltersFormProps {
  filters: string[];
}

const FiltersForm: React.FC<FiltersFormProps> = ({ filters }) => {
  return (
    <Formik
      enableReinitialize={true}
      initialValues={{
        appliedFilters: [],
      }}
      validate={validate}
      onSubmit={(values: FiltersFormValues): void =>
        alert(JSON.stringify(values, null, 2))
      }
    >
      {(props: FormikProps<any>): ReactElement => (
        <StyledForm>
          <FormGroup>
            {filters.map((filter) => (
              <FilterField key={filter} filter={filter} />
            ))}
            <Divider />
            {props.touched.appliedFilters && props.errors.appliedFilters ? (
              <FormHelperText error>
                {props.errors.appliedFilters}
              </FormHelperText>
            ) : null}
          </FormGroup>

          <Buttons container direction={'row'} spacing={1} justify={'center'}>
            <Grid item>
              <Button
                type="reset"
                variant={'contained'}
                color={'primary'}
                size={'small'}
              >
                Clear Filters
              </Button>
            </Grid>
            <Grid item>
              <Button
                type="submit"
                variant={'contained'}
                color={'primary'}
                size={'small'}
              >
                Apply Filters
              </Button>
            </Grid>
          </Buttons>
        </StyledForm>
      )}
    </Formik>
  );
};

FiltersForm.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FiltersForm;
