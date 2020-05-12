import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { MdFilterList, MdMenu } from 'react-icons/md';
import Paper from '@material-ui/core/Paper';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Typography from '@material-ui/core/Typography';

import NavigationDrawer from './NavigationDrawer';
import FiltersDrawer from './FiltersDrawer';

interface NavbarProps {
  isFiltrationDisabled: boolean;
}

const Navbar = styled(Paper).attrs({
  elevation: 2,
  square: true,
})<NavbarProps>`
  position: fixed;
  bottom: 0;
  right: 0;
  height: 80px;
  width: 100%;
  z-index: 2;
  background-color: #fdfde8;
  @media only screen and (min-width: 1280px) {
    display: none;
  }
`;

const CondensedNavbar = styled(Navbar).attrs({
  elevation: 2,
  square: true,
})<NavbarProps>`
  width: 80px;
  border-radius: 50%;
  margin: 1rem;
`;

export const ActionLabel = styled(Typography).attrs({
  variant: 'h6',
  component: 'span',
})`
  color: #f95738;
`;

interface Props {
  allProjectTags?: string[][];
}

const iconStyles = { size: '32px', color: '#f95738' };

const filterIcon = (
  <IconContext.Provider value={iconStyles}>
    <MdFilterList />
  </IconContext.Provider>
);

const menuIcon = (
  <IconContext.Provider value={iconStyles}>
    <MdMenu />
  </IconContext.Provider>
);

const BottomNavigationBar: React.FC<Props> = ({ allProjectTags }) => {
  const [isNavDrawerOpen, setIsNavDrawerOpen] = useState(false);
  const [isFiltersDrawerOpen, setIsFiltersDrawerOpen] = useState(false);

  const toggleNavDrawer = (): void => {
    setIsNavDrawerOpen(!isNavDrawerOpen);
  };

  const openFiltersDrawer = (): void => {
    setIsFiltersDrawerOpen(true);
  };

  const closeFiltersDrawer = (): void => {
    setIsFiltersDrawerOpen(false);
  };

  return allProjectTags && allProjectTags.length ? (
    <BottomNavigation component={Navbar} showLabels>
      <BottomNavigationAction
        label={<ActionLabel>Filter</ActionLabel>}
        showLabel
        icon={filterIcon}
        onClick={openFiltersDrawer}
      />
      <FiltersDrawer
        isOpen={isFiltersDrawerOpen}
        closeFiltersDrawer={closeFiltersDrawer}
        allProjectTags={allProjectTags}
      />
      <BottomNavigationAction
        label={<ActionLabel>Menu</ActionLabel>}
        showLabel
        icon={menuIcon}
        onClick={toggleNavDrawer}
      />
      <NavigationDrawer isOpen={isNavDrawerOpen} toggle={toggleNavDrawer} />
    </BottomNavigation>
  ) : (
    <BottomNavigation component={CondensedNavbar} showLabels>
      <BottomNavigationAction
        label={<ActionLabel>Menu</ActionLabel>}
        showLabel
        icon={menuIcon}
        onClick={toggleNavDrawer}
      />
      <NavigationDrawer isOpen={isNavDrawerOpen} toggle={toggleNavDrawer} />
    </BottomNavigation>
  );
};

BottomNavigationBar.propTypes = {
  allProjectTags: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
  ),
};

BottomNavigationBar.defaultProps = {
  allProjectTags: [],
};

export default BottomNavigationBar;
