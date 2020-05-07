import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import DrawerBase from './DrawerBase';

const FilterDrawerHeader = styled(Typography).attrs({
  variant: 'h2',
})`
  padding: 1rem;
  background-color: #fdfde8;
`;

interface FiltersDrawerProps {
  isOpen: boolean;
  toggle: () => void;
}

const FiltersDrawer: React.FC<FiltersDrawerProps> = ({ isOpen, toggle }) => {
  return (
    <DrawerBase isOpen={isOpen} toggle={toggle}>
      <FilterDrawerHeader>Filters</FilterDrawerHeader>
      <Divider />
    </DrawerBase>
  );
};

FiltersDrawer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default FiltersDrawer;
