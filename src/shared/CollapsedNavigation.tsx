import React, { useState } from 'react';
import styled from 'styled-components';
import Hamburger from 'hamburger-react';

import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';

import { NavLink } from './Navigation';

const Toggle = styled(Paper)`
  width: 60px;
  height: 60px;
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 2;
  margin-bottom: 1rem;
  margin-right: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #fdfde8;

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

const Menu = styled(List)`
  height: 100vh;
  width: 100vw;
  background-color: #fdfde8;
`;

const MenuItem = styled(ListItem).attrs({
  button: undefined,
})`
  height: 25%;
  margin: 0;
`;

const MenuLink = styled(NavLink)`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 0;
  justify-content: center;
  align-items: center;
`;

const CollapsedNavigation: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (): void => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <Toggle elevation={2}>
        <Hamburger
          color="#f95738"
          toggled={isDrawerOpen}
          toggle={toggleDrawer}
        />
      </Toggle>
      <Drawer anchor={'top'} open={isDrawerOpen}>
        <Menu>
          <MenuItem>
            <MenuLink to="/">
              <Typography variant={'h2'} component="span">
                Home
              </Typography>
            </MenuLink>
          </MenuItem>
          <Divider component={'li'} />
          <MenuItem>
            <MenuLink to="/portfolio">
              <Typography variant={'h2'} component="span">
                Portfolio
              </Typography>
            </MenuLink>
          </MenuItem>
          <Divider component={'li'} />
          <MenuItem>
            <MenuLink to="/about">
              <Typography variant={'h2'} component="span">
                About
              </Typography>
            </MenuLink>
          </MenuItem>
          <Divider component={'li'} />

          <MenuItem>
            <MenuLink to="/contact">
              <Typography variant={'h2'} component="span">
                Contact
              </Typography>
            </MenuLink>
          </MenuItem>

          <Toggle elevation={2}>
            <Hamburger
              color="#f95738"
              toggled={isDrawerOpen}
              toggle={toggleDrawer}
            />
          </Toggle>
        </Menu>
      </Drawer>
    </>
  );
};

export default CollapsedNavigation;
