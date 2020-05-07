import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { MdClose } from 'react-icons/md';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import { NavLink } from '../Navigation';

const MenuDrawer = styled(Drawer)`
  height: 100vh;
`;

const Menu = styled(List)`
  height: 100vh;
  width: 100vw;
  background-color: #fdfde8;
`;

const MenuItem = styled(ListItem).attrs({
  button: undefined,
})`
  height: 20%;
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

const Close = styled(MenuItem)`
  display: flex;
  justify-content: flex-end;
  padding-right: 2rem;
  cursor: pointer;
`;

interface NavigationDrawerProps {
  isOpen: boolean;
  toggle: () => void;
}

const closeIcon = (
  <IconContext.Provider value={{ size: '3rem', color: '#f95738' }}>
    <MdClose />
  </IconContext.Provider>
);

const NavigationDrawer: React.FC<NavigationDrawerProps> = ({
  isOpen,
  toggle,
}) => {
  return (
    <MenuDrawer anchor={'top'} open={isOpen} elevation={2}>
      <Menu>
        <MenuItem>
          <MenuLink to="/">
            <Typography variant={'h3'} component="span">
              Home
            </Typography>
          </MenuLink>
        </MenuItem>
        <Divider component={'li'} />
        <MenuItem>
          <MenuLink to="/portfolio">
            <Typography variant={'h3'} component="span">
              Portfolio
            </Typography>
          </MenuLink>
        </MenuItem>
        <Divider component={'li'} />
        <MenuItem>
          <MenuLink to="/about">
            <Typography variant={'h3'} component="span">
              About
            </Typography>
          </MenuLink>
        </MenuItem>
        <Divider component={'li'} />
        <MenuItem>
          <MenuLink to="/contact">
            <Typography variant={'h3'} component="span">
              Contact
            </Typography>
          </MenuLink>
        </MenuItem>
        <Divider component={'li'} />
        <Close onClick={toggle}>{closeIcon}</Close>
      </Menu>
    </MenuDrawer>
  );
};

NavigationDrawer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default NavigationDrawer;
