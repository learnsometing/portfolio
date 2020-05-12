import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import AppliedFilters from './AppliedFilters';
import LabelText from './Label';

import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import getTagCounts from './helpers/getTagCounts';
import getFilteredTags from './helpers/getFilteredTags';

const Sidebar = styled(Grid).attrs({
  component: 'aside',
})`
  @media only screen and (max-width: 1279px) {
    display: none;
  }
  position: relative;
  top: 0;
  padding: 1rem;
`;

const StyledFormGroup = styled(FormGroup)`
  max-height: 100%;
  overflow-y: auto;
`;

const StyledFieldset = styled.fieldset`
  margin-left: 1rem;
`;

interface Props {
  addFilter: (filter: string) => void;
  allProjectTags: string[][];
  appliedFilters: string[];
  projectCount: number;
  removeFilter: (filter: string) => void;
}

const FiltersSidebar: React.FC<Props> = ({
  addFilter,
  allProjectTags,
  appliedFilters,
  projectCount,
  removeFilter,
}) => {
  const ogTagCounts = getTagCounts(allProjectTags);
  const [currentTags, setCurrentTags] = useState(ogTagCounts);

  const handleChange = (event: React.FormEvent<HTMLSelectElement>): void => {
    if (event.target && event.currentTarget.value) {
      if (appliedFilters.includes(event.currentTarget.value)) {
        removeFilter(event.currentTarget.value);
      } else {
        addFilter(event.currentTarget.value);
      }
    }
  };

  useEffect(() => {
    if (appliedFilters && appliedFilters.length) {
      const filteredTags = getFilteredTags(appliedFilters, allProjectTags);
      const filteredTagCounts = getTagCounts(filteredTags);
      setCurrentTags(filteredTagCounts);
    } else {
      setCurrentTags(ogTagCounts);
    }
  }, [appliedFilters]);

  return (
    <Sidebar justify={'flex-start'} item lg={3}>
      <Typography variant={'h2'} align={'center'}>
        Filter
      </Typography>
      <AppliedFilters
        appliedFilters={appliedFilters}
        projectCount={projectCount}
        removeFilter={removeFilter}
      />
      <StyledFormGroup>
        <FormControl component={StyledFieldset}>
          <>
            {Object.entries(currentTags).map(([filter, count]) => (
              <FormControlLabel
                key={filter}
                onChange={handleChange}
                control={
                  <Checkbox
                    value={filter}
                    checked={appliedFilters.includes(filter)}
                    name={filter}
                    color={'primary'}
                  />
                }
                name="appliedFilters"
                label={<LabelText filter={filter} count={count} />}
                value={filter}
              />
            ))}
          </>
        </FormControl>
      </StyledFormGroup>
    </Sidebar>
  );
};

FiltersSidebar.propTypes = {
  addFilter: PropTypes.func.isRequired,
  allProjectTags: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
  ).isRequired,
  appliedFilters: PropTypes.array.isRequired,
  projectCount: PropTypes.number.isRequired,
  removeFilter: PropTypes.func.isRequired,
};

export default FiltersSidebar;
