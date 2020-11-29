import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Material-UI
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import { MdClose } from '@react-icons/all-files/md/MdClose';

// Redux
import { connect } from 'react-redux';
import { RootState } from '../../state/createStore';
import { getAppliedFilters } from '../../state/portfolio/selectors';
import { removeFilter, clearFilters } from '../../state/portfolio/actions';

const FiltersWrapper = styled.div`
  border-top: 1px solid ${(props): string => props.theme.textDarkened};
  border-bottom: 1px solid ${(props): string => props.theme.textDarkened};
`;

const Filters = styled.div`
  padding: calc(${(props): string => props.theme.spacing(4)} - 1px) 0;
`;

const ClearButton = styled(Button)`
  margin-top: ${(props): string => props.theme.spacing(4)};
`;

interface Props {
  appliedFilters: string[];
  removeFilter: (filter: string) => void;
  clearFilters: () => void;
}

const AppliedFilters: React.FC<Props> = ({
  appliedFilters,
  removeFilter,
  clearFilters,
}) => (
  <FiltersWrapper>
    {appliedFilters && appliedFilters.length ? (
      <Filters>
        <Grid container spacing={3}>
          {appliedFilters.map((filter) => (
            <Grid key={`${filter}-selected`} item>
              <Button
                type="button"
                variant={'contained'}
                color={'primary'}
                endIcon={<MdClose />}
                onClick={(): void => removeFilter(filter)}
              >
                {filter}
              </Button>
            </Grid>
          ))}
        </Grid>
        <ClearButton
          type="button"
          variant={'text'}
          color={'primary'}
          fullWidth
          onClick={(): void => clearFilters()}
        >
          Clear filters
        </ClearButton>
      </Filters>
    ) : null}
  </FiltersWrapper>
);

AppliedFilters.propTypes = {
  appliedFilters: PropTypes.array.isRequired,
  removeFilter: PropTypes.func.isRequired,
  clearFilters: PropTypes.func.isRequired,
};

export default connect(
  (state: RootState) => ({
    appliedFilters: getAppliedFilters(state),
  }),
  { removeFilter, clearFilters }
)(AppliedFilters);
