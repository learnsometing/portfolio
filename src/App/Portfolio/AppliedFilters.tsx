import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Material-UI
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { MdClose } from 'react-icons/md';

const Filters = styled(Grid)`
  border-bottom: 1px solid #74746a;
  padding-bottom: 0.35em;
  margin-bottom: 0.35em;
`;

interface Props {
  projectCount: number;
  appliedFilters: string[];
  removeFilter: (filter: string) => void;
}

const AppliedFilters: React.FC<Props> = ({
  projectCount,
  appliedFilters,
  removeFilter,
}) => (
  <>
    <Typography variant={'h4'} component={'h2'} gutterBottom>
      {projectCount
        ? `${projectCount} 
                  ${projectCount > 1 ? 'projects' : 'project'}
                `
        : null}
    </Typography>
    {appliedFilters && appliedFilters.length ? (
      <Filters container spacing={2}>
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
      </Filters>
    ) : null}
  </>
);

AppliedFilters.propTypes = {
  projectCount: PropTypes.number.isRequired,
  appliedFilters: PropTypes.array.isRequired,
  removeFilter: PropTypes.func.isRequired,
};

export default AppliedFilters;
