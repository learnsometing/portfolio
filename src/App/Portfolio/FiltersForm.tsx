import React from 'react';
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

// Custom Components
import LabelText from './Label';
import { CloseButton } from '../shared/CloseButton';

// Interfaces
import { TagMap } from '../../helpers/getTagCounts';

// Hooks
import useTagCounts from './useTagCounts';
import useResultCount from './useResultCount';

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
  right: 0;
  left: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.12);
  background-color: ${(props): string => props.theme.metallicSeaweed};
`;

const StyledFormGroup = styled(FormGroup)`
  min-height: 100vh;
  padding-top: 65px;
`;

const Header = styled(Grid)`
  position: relative;
  display: flex;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  padding: ${(props): string =>
    `${props.theme.spacing(2)} ${props.theme.spacing(4)}`};
  position: fixed;
  top: 0;
  background-color: ${(props): string => props.theme.metallicSeaweed};
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

  const currentTagCounts = useTagCounts(
    tagCounts,
    allProjectTags,
    values.checkedFilters
  );

  const resultCount = useResultCount(allProjectTags, values.checkedFilters);

  return (
    <Form>
      <StyledFormGroup>
        <FormControl component={FieldSet}>
          {Object.entries(currentTagCounts).map(([filter, count]) => (
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

      <Buttons
        container
        direction={'row'}
        spacing={1}
        justify={'center'}
        alignItems={'center'}
      >
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
            onClick={clearFilters}
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

const FiltersFormHeaders = styled(Typography)`
  color: ${(props) => props.theme.mintCream};
`;

const ConnectedFiltersForm: React.FC<ConnectedFiltersFormProps> = ({
  allProjectTags,
  tagCounts,
  appliedFilters,
  closeFiltersDrawer,
  applyFilters,
  clearFilters,
}) => (
  <>
    <Header container justify={'space-between'} alignItems={'center'}>
      <FiltersFormHeaders variant={'h2'}>Filters</FiltersFormHeaders>
      <CloseButton
        aria-label="Close Filter Drawer"
        onClick={closeFiltersDrawer}
      />
    </Header>
    <Formik
      initialValues={{
        checkedFilters: appliedFilters,
      }}
      enableReinitialize={true}
      validateOnChange={false}
      validateOnBlur={false}
      onSubmit={(values, actions): void => {
        if (values.checkedFilters && values.checkedFilters.length) {
          applyFilters(values.checkedFilters);
        }
        closeFiltersDrawer();
        actions.setSubmitting(false);
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
