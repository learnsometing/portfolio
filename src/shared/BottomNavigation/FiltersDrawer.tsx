import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import DrawerBase from './DrawerBase';
import FiltersForm from './FiltersForm';

const FilterDrawerHeader = styled(Typography).attrs({
  variant: 'h2',
})`
  padding: 1rem;
  background-color: #fdfde8;
`;

interface FiltersDrawerProps {
  isOpen: boolean;
  toggle: () => void;
  filters: string[];
}

const FiltersDrawer: React.FC<FiltersDrawerProps> = ({
  isOpen,
  toggle,
  filters,
}) => {
  return (
    <DrawerBase isOpen={isOpen} toggle={toggle}>
      <FilterDrawerHeader>Filters</FilterDrawerHeader>
      <Divider />
      <FiltersForm filters={filters} />
    </DrawerBase>
  );
};

FiltersDrawer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  filters: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default FiltersDrawer;
