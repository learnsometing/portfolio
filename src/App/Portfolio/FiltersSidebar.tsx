import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import AppliedFilters from './AppliedFilters';
import LabelText from './Label';

// Material-UI
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

// Interfaces
import { TagMap } from '../../helpers/getTagCounts';

// Hooks
import useTagCounts from './useTagCounts';

// Redux
import { connect } from 'react-redux';
import { RootState } from '../../state/createStore';
import { getAppliedFilters } from '../../state/portfolio/selectors';
import { addFilter, removeFilter } from '../../state/portfolio/actions';

// Hooks
import useScrollAnimation from '../shared/useScrollAnimation';

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
  transform: translateY(100px);
  opacity: 0;
`;

const SidebarContentWrapper = styled.div`
  margin: 0 ${(props): string => props.theme.spacing(3)};
`;

const StyledFormGroup = styled(FormGroup)`
  max-height: 100%;
  overflow-y: auto;
  padding: ${(props): string => props.theme.spacing(4)} 0;
  padding-left: ${(props): string => props.theme.spacing(3)};
  transform: translateY(100px);
  opacity: 0;
`;

interface Props {
  allProjectTags: string[][];
  tagCounts: TagMap;
  appliedFilters: string[];
  addFilter: (filter: string) => void;
  removeFilter: (filter: string) => void;
}

const FiltersSidebar: React.FC<Props> = ({
  addFilter,
  allProjectTags,
  tagCounts,
  appliedFilters,
  removeFilter,
}) => {
  const handleChange = (event: any): void => {
    if (event.target && event.currentTarget.value) {
      if (appliedFilters.includes(event.currentTarget.value)) {
        removeFilter(event.currentTarget.value);
      } else {
        addFilter(event.currentTarget.value);
      }
    }
  };

  const currentTagCounts = useTagCounts(
    tagCounts,
    allProjectTags,
    appliedFilters
  );

  return (
    <Sidebar item lg={3}>
      <SidebarContentWrapper>
        <SidebarHeading
          variant={'h2'}
          align={'center'}
          ref={useScrollAnimation(0)}
        >
          Filter
        </SidebarHeading>
        <AppliedFilters />
        <StyledFormGroup ref={useScrollAnimation(0)}>
          <FormControl component={'fieldset'}>
            {Object.entries(currentTagCounts).map(([filter, count]) => (
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
  tagCounts: PropTypes.objectOf(PropTypes.number.isRequired).isRequired,
  appliedFilters: PropTypes.array.isRequired,
  removeFilter: PropTypes.func.isRequired,
};

export default connect(
  (state: RootState) => ({
    appliedFilters: getAppliedFilters(state),
  }),
  { addFilter, removeFilter }
)(FiltersSidebar);
