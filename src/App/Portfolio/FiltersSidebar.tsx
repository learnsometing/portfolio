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
  padding: ${(props): string => props.theme.spacing(2)};
`;

const SidebarHeading = styled(Typography)`
  padding: ${(props): string => props.theme.spacing(1)} 0;
  margin-bottom: ${(props): string => props.theme.spacing(2)};
`;

const SidebarContentWrapper = styled.div`
  margin: 0 ${(props): string => props.theme.spacing(3)};
`;

const StyledFormGroup = styled(FormGroup)`
  max-height: 100%;
  overflow-y: auto;
  padding: ${(props): string => props.theme.spacing(4)} 0;
  padding-left: ${(props): string => props.theme.spacing(3)};
`;

interface Props {
  allProjectTags: string[][];
  appliedFilters: string[];
  addFilter: (filter: string) => void;
  removeFilter: (filter: string) => void;
  clearFilters: () => void;
}

const FiltersSidebar: React.FC<Props> = ({
  addFilter,
  allProjectTags,
  appliedFilters,
  removeFilter,
  clearFilters,
}) => {
  const ogTagCounts = getTagCounts(allProjectTags);
  const [currentTags, setCurrentTags] = useState(ogTagCounts);

  const handleChange = (event: any): void => {
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
      <SidebarContentWrapper>
        <SidebarHeading variant={'h2'} align={'center'}>
          Filter
        </SidebarHeading>
        <AppliedFilters
          appliedFilters={appliedFilters}
          removeFilter={removeFilter}
          clearFilters={clearFilters}
        />
        <StyledFormGroup>
          <FormControl component={'fieldset'}>
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
          </FormControl>
        </StyledFormGroup>
      </SidebarContentWrapper>
    </Sidebar>
  );
};

FiltersSidebar.propTypes = {
  addFilter: PropTypes.func.isRequired,
  allProjectTags: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
  ).isRequired,
  appliedFilters: PropTypes.array.isRequired,
  removeFilter: PropTypes.func.isRequired,
  clearFilters: PropTypes.func.isRequired,
};

export default FiltersSidebar;
