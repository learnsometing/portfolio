import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import DrawerBase from './DrawerBase';
import FiltersForm from './FiltersForm';

import CloseButton from '../CloseButton';

const Header = styled(Grid)`
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  padding: 0.5rem 1.5rem;
  position: sticky;
  top: 0;
  background-color: #fdfde8;
  z-index: 1;
`;

const FilterDrawerHeading = styled(Typography).attrs({
  variant: 'h2',
})``;

interface FiltersDrawerProps {
  isOpen: boolean;
  filters: string[][];
  closeFiltersDrawer: () => void;
}

const FiltersDrawer: React.FC<FiltersDrawerProps> = ({
  isOpen,
  closeFiltersDrawer,
  filters,
}) => {
  return (
    <DrawerBase isOpen={isOpen}>
      <Header container justify={'space-between'} alignItems={'center'}>
        <FilterDrawerHeading>Filters</FilterDrawerHeading>
        <CloseButton
          aria-label="Close Filter Drawer"
          onClick={closeFiltersDrawer}
        />
      </Header>
      <FiltersForm filters={filters} onSubmitCallback={closeFiltersDrawer} />
    </DrawerBase>
  );
};

FiltersDrawer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeFiltersDrawer: PropTypes.func.isRequired,
  filters: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
  ).isRequired,
};

export default FiltersDrawer;
