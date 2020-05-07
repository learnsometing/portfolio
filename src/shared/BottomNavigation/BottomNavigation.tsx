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
  height: ${({ isFiltrationDisabled }): string =>
    isFiltrationDisabled ? '80px' : '80px'};
  width: ${({ isFiltrationDisabled }): string =>
    isFiltrationDisabled ? '80px' : '100%'};
  border-radius: ${({ isFiltrationDisabled }): string | undefined =>
    isFiltrationDisabled ? '50%' : '0'};
  margin: ${({ isFiltrationDisabled }): string | undefined =>
    isFiltrationDisabled ? '1rem' : '0'};
  z-index: 2;
  background-color: #fdfde8;
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

export const ActionLabel = styled(Typography).attrs({
  variant: 'h6',
  component: 'span',
})`
  color: #f95738;
`;

interface Props {
  filters?: string[];
}

const iconStyles = { size: '32px', color: '#f95738' };

const BottomNavigationBar: React.FC<Props> = ({ filters }) => {
  const [value, setValue] = useState(0);
  const [isNavDrawerOpen, setIsNavDrawerOpen] = useState(false);
  const [isFiltersDrawerOpen, setIsFiltersDrawerOpen] = useState(false);
  console.log(`bottom: ${filters}`);

  const toggleNavDrawer = (): void => {
    setIsNavDrawerOpen(!isNavDrawerOpen);
  };

  const toggleFiltersDrawer = (): void => {
    setIsFiltersDrawerOpen(!isFiltersDrawerOpen);
  };

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

  return (
    <>
      <BottomNavigation
        component={Navbar}
        value={value}
        showLabels
        onChange={(event, newValue): void => setValue(newValue)}
        isFiltrationDisabled={filters && filters.length ? false : true}
      >
        {filters && filters.length ? (
          <>
            <BottomNavigationAction
              label={<ActionLabel>Filter</ActionLabel>}
              showLabel
              icon={filterIcon}
              onClick={toggleFiltersDrawer}
            />
            <FiltersDrawer
              isOpen={isFiltersDrawerOpen}
              toggle={toggleFiltersDrawer}
              filters={filters}
            />
          </>
        ) : null}
        <BottomNavigationAction
          label={<ActionLabel>Menu</ActionLabel>}
          showLabel
          icon={menuIcon}
          onClick={toggleNavDrawer}
        />
      </BottomNavigation>
      <NavigationDrawer isOpen={isNavDrawerOpen} toggle={toggleNavDrawer} />
    </>
  );
};

BottomNavigationBar.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.string.isRequired),
};

BottomNavigationBar.defaultProps = {
  filters: [],
};

export default BottomNavigationBar;
