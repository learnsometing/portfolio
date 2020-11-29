import React, { useState } from 'react';
import styled from 'styled-components';
import { MdFilterList } from '@react-icons/all-files/md/MdFilterList';
import PropTypes from 'prop-types';

// Material-UI
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Typography from '@material-ui/core/Typography';

import DrawerBase from '../shared/BottomNavigation/DrawerBase';
import FiltersForm from './FiltersForm';
import { TagMap } from '../../helpers/getTagCounts';

interface Props {
  allProjectTags: string[][];
  tagCounts: TagMap;
}

const FilterIcon = styled(MdFilterList)`
  height: ${(props): string => props.theme.bottomNavigationIconSize};
  width: ${(props): string => props.theme.bottomNavigationIconSize};
  color: ${(props): string => props.theme.mintCream};
`;

const FilterLabel = styled(Typography).attrs(() => ({ component: 'span' }))`
  color: ${(props) => props.theme.mintCream};
`;

const FilterAction: React.FC<Props> = ({ allProjectTags, tagCounts }) => {
  const [isFiltersDrawerOpen, setIsFiltersDrawerOpen] = useState(false);
  const openFiltersDrawer = (): void => {
    setIsFiltersDrawerOpen(true);
  };
  const closeFiltersDrawer = (): void => {
    setIsFiltersDrawerOpen(false);
  };
  const filtersForm = (
    <FiltersForm
      allProjectTags={allProjectTags}
      tagCounts={tagCounts}
      closeFiltersDrawer={closeFiltersDrawer}
    />
  );

  return (
    <>
      <BottomNavigationAction
        label={<FilterLabel variant={'h5'}>Filter</FilterLabel>}
        showLabel
        icon={<FilterIcon />}
        onClick={openFiltersDrawer}
      />
      <DrawerBase isOpen={isFiltersDrawerOpen}>{filtersForm}</DrawerBase>
    </>
  );
};

FilterAction.propTypes = {
  allProjectTags: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
  ).isRequired,
  tagCounts: PropTypes.objectOf(PropTypes.number.isRequired).isRequired,
};

FilterAction.defaultProps = {
  allProjectTags: [],
};

export default FilterAction;
