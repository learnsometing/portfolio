import React, { useState } from 'react';
import styled from 'styled-components';
import { MdFilterList } from 'react-icons/md';
import PropTypes from 'prop-types';

// Material-UI
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Typography from '@material-ui/core/Typography';

import FiltersDrawer from './FiltersDrawer';

interface Props {
  allProjectTags: string[][];
}

const FilterIcon = styled(MdFilterList)`
  height: ${(props): string => props.theme.bottomNavigationIconSize};
  width: ${(props): string => props.theme.bottomNavigationIconSize};
  color: ${(props): string => props.theme.textEmphasis};
`;

const FilterAction: React.FC<Props> = ({ allProjectTags }) => {
  const [isFiltersDrawerOpen, setIsFiltersDrawerOpen] = useState(false);
  const openFiltersDrawer = (): void => {
    setIsFiltersDrawerOpen(true);
  };
  const closeFiltersDrawer = (): void => {
    setIsFiltersDrawerOpen(false);
  };

  return (
    <>
      <BottomNavigationAction
        label={
          <Typography variant={'h5'} component={'span'}>
            Filter
          </Typography>
        }
        showLabel
        icon={<FilterIcon />}
        onClick={openFiltersDrawer}
      />
      <FiltersDrawer
        isOpen={isFiltersDrawerOpen}
        closeFiltersDrawer={closeFiltersDrawer}
        allProjectTags={allProjectTags}
      />
    </>
  );
};

FilterAction.propTypes = {
  allProjectTags: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
  ).isRequired,
};

FilterAction.defaultProps = {
  allProjectTags: [],
};

export default FilterAction;
