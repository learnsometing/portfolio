import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import Hamburger from 'hamburger-react';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { NavLink } from '../Navigation';

const MenuDrawer = styled(Drawer)`
  height: calc(100vh - 80px);
`;

const Menu = styled(List)`
  height: calc(100vh - 80px);
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

interface NavigationDrawerProps {
  isOpen: boolean;
}

const NavigationDrawer: React.FC<NavigationDrawerProps> = ({ isOpen }) => {
  return (
    <MenuDrawer
      anchor={'top'}
      open={isOpen}
      ModalProps={{ hideBackdrop: true, disableBackdropClick: true }}
      elevation={2}
    >
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
      </Menu>
    </MenuDrawer>
  );
};

NavigationDrawer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default NavigationDrawer;
