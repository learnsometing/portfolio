import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  Form,
  Field,
  useFormikContext,
  Formik,
  FormikValues,
  FormikErrors,
  FormikTouched,
} from 'formik';

// Material-UI
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { CheckboxWithLabel } from 'formik-material-ui';

// Logic Helpers
import getTagCounts, { TagMap } from '../../helpers/getTagCounts';
import getFilteredTags from '../../helpers/getFilteredTags';

// Custom Components
import LabelText from './Label';
import { CloseButton } from '../shared/CloseButton';

// Redux
import { connect } from 'react-redux';
import { applyFilters, clearFilters } from '../../state/portfolio/actions';
import { getAppliedFilters } from '../../state/portfolio/selectors';
import { RootState } from '../../state/createStore';

const Buttons = styled(Grid)`
  max-width: 100%;
  padding: ${(props): string => props.theme.spacing(3)} 0;
  position: sticky;
  bottom: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.12);
  background-color: ${(props): string => props.theme.bgLightened};
`;

const StyledFormGroup = styled(FormGroup)`
  min-height: 100vh;
`;

const Header = styled(Grid)`
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  padding: ${(props): string =>
    `${props.theme.spacing(2)} ${props.theme.spacing(4)}`};
  position: sticky;
  top: 0;
  background-color: ${(props): string => props.theme.bgLightened};
  z-index: 1;
`;

const FieldSet = styled.fieldset`
  margin: ${(props): string => props.theme.spacing(4)} 0;
  label {
    margin: ${(props): string =>
      `${props.theme.spacing(2)} ${props.theme.spacing(4)}`};
  }
`;

interface FiltersFormProps {
  allProjectTags: string[][];
  tagCounts: TagMap;
  clearFilters: () => void;
}

interface ConnectedFiltersFormProps extends FiltersFormProps {
  appliedFilters: string[];
  applyFilters: (filters: string[]) => void;
  closeFiltersDrawer: () => void;
}

interface CheckedFilters {
  checkedFilters: string[];
}

const FiltersForm: React.FC<FiltersFormProps> = ({
  allProjectTags,
  tagCounts,
  clearFilters,
}) => {
  const {
    values,
    touched,
    errors,
  }: {
    values: FormikValues;
    touched: FormikTouched<CheckedFilters>;
    errors: FormikErrors<CheckedFilters>;
  } = useFormikContext();
  const [currentTags, setCurrentTags] = useState(tagCounts);
  const [resultCount, setResultCount] = useState(allProjectTags.length);

  useEffect(() => {
    if (values.checkedFilters && values.checkedFilters.length) {
      const filteredTags = getFilteredTags(
        values.checkedFilters,
        allProjectTags
      );
      const filteredTagCounts = getTagCounts(filteredTags);
      setCurrentTags(filteredTagCounts);
      const newResultCount = allProjectTags.filter((tags) =>
        values.checkedFilters.every((val: string) => tags.includes(val))
      ).length;
      setResultCount(newResultCount);
    } else {
      // defaults
      setCurrentTags(tagCounts);
      setResultCount(allProjectTags.length);
    }
  }, [values.checkedFilters]);

  return (
    <Form>
      <StyledFormGroup>
        <FormControl component={FieldSet}>
          {Object.entries(currentTags).map(([filter, count]) => (
            <Field
              key={filter}
              component={CheckboxWithLabel}
              type={'checkbox'}
              name="checkedFilters"
              Label={{ label: <LabelText filter={filter} count={count} /> }}
              value={filter}
              color={'primary'}
            />
          ))}
        </FormControl>
      </StyledFormGroup>

      <Buttons container direction={'row'} spacing={1} justify={'center'}>
        {touched.checkedFilters && errors.checkedFilters ? (
          <Grid container item xs={12} sm={12} justify={'center'}>
            <FormHelperText error>{errors.checkedFilters}</FormHelperText>
          </Grid>
        ) : null}
        <Grid item>
          <Button
            type="reset"
            variant={'contained'}
            color={'primary'}
            onClick={(): void => clearFilters()}
          >
            Clear filters
          </Button>
        </Grid>
        <Grid item>
          <Button type="submit" variant={'contained'} color={'primary'}>
            Show {resultCount} {resultCount > 1 ? 'Results' : 'Result'}
          </Button>
        </Grid>
      </Buttons>
    </Form>
  );
};

FiltersForm.propTypes = {
  allProjectTags: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
  ).isRequired,
  tagCounts: PropTypes.objectOf(PropTypes.number.isRequired).isRequired,
  clearFilters: PropTypes.func.isRequired,
};

const validate = (values: FormikValues): FormikErrors<FormikValues> => {
  const errors: FormikErrors<FormikValues> = {};

  if (!values.checkedFilters.length) {
    errors.checkedFilters = 'At least one filter must be selected.';
  }

  return errors;
};

const ConnectedFiltersForm: React.FC<ConnectedFiltersFormProps> = ({
  allProjectTags,
  tagCounts,
  closeFiltersDrawer,
  appliedFilters,
  applyFilters,
  clearFilters,
}) => (
  <>
    <Header container justify={'space-between'} alignItems={'center'}>
      <Typography variant={'h2'}>Filters</Typography>
      <CloseButton
        aria-label="Close Filter Drawer"
        onClick={closeFiltersDrawer}
      />
    </Header>
    <Formik
      enableReinitialize={true}
      initialValues={{
        checkedFilters: appliedFilters,
      }}
      validate={validate}
      onSubmit={(values, actions): void => {
        applyFilters(values.checkedFilters);
        actions.setSubmitting(false);
        closeFiltersDrawer();
      }}
    >
      <FiltersForm
        allProjectTags={allProjectTags}
        tagCounts={tagCounts}
        clearFilters={clearFilters}
      />
    </Formik>
  </>
);

ConnectedFiltersForm.propTypes = {
  allProjectTags: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
  ).isRequired,
  tagCounts: PropTypes.objectOf(PropTypes.number.isRequired).isRequired,
  appliedFilters: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  applyFilters: PropTypes.func.isRequired,
  clearFilters: PropTypes.func.isRequired,
  closeFiltersDrawer: PropTypes.func.isRequired,
};

export default connect(
  (state: RootState) => ({ appliedFilters: getAppliedFilters(state) }),
  { applyFilters, clearFilters }
)(ConnectedFiltersForm);
