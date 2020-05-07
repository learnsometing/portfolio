import React, { useState } from 'react';
import styled from 'styled-components';
import Hamburger from 'hamburger-react';

import Paper from '@material-ui/core/Paper';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Typography from '@material-ui/core/Typography';

import NavigationDrawer from './NavigationDrawer';

const Navbar = styled(Paper).attrs({
  elevation: 2,
  square: true,
})`
  position: fixed;
  bottom: 0;
  height: 80px;
  width: 100%;
  z-index: 2;
  background-color: #fdfde8;
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

const ActionLabel = styled(Typography).attrs({
  variant: 'h6',
  component: 'span',
})`
  color: #f95738;
`;

const BottomNavigationBar: React.FC = () => {
  const [value, setValue] = useState(0);
  const [isNavDrawerOpen, setIsNavDrawerOpen] = useState(false);

  const toggleDrawer = (): void => {
    setIsNavDrawerOpen(!isNavDrawerOpen);
  };

  return (
    <>
      <BottomNavigation
        component={Navbar}
        value={value}
        onChange={(event, newValue): void => setValue(newValue)}
        showLabels
      >
        <BottomNavigationAction
          label={<ActionLabel>Menu</ActionLabel>}
          icon={
            <Hamburger
              color="#f95738"
              toggled={isNavDrawerOpen}
              toggle={toggleDrawer}
            />
          }
        />
      </BottomNavigation>
      <NavigationDrawer isOpen={isNavDrawerOpen} />
    </>
  );
};

export default BottomNavigationBar;
