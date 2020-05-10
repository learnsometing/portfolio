import React, { ReactElement } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Formik, Form, FormikProps, FormikValues, FormikErrors } from 'formik';

// Material-UI
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import Grid from '@material-ui/core/Grid';

import Fields from './Fields';
import { connect } from 'react-redux';
import { applyFilters, clearFilters } from '../../state/actions';
import { getAppliedFilters } from '../../state/selectors';

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

const FieldSet = styled.fieldset`
  margin: 0.5rem 0;
  label {
    margin: 0.5rem 1rem;
  }
`;

const validate = (values: FormikValues): FormikErrors<FormikValues> => {
  const errors: FormikErrors<FormikValues> = {};

  if (!values.appliedFilters.length) {
    errors.appliedFilters = 'At least one filter must be selected.';
  }

  return errors;
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
            <FormControl component={FieldSet}>
              <Fields filters={filters} />
            </FormControl>
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
                onClick={(): void => clearFilters()}
              >
                Clear
              </Button>
            </Grid>
            <Grid item>
              <Button type="submit" variant={'contained'} color={'primary'}>
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
