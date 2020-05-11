import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

import DrawerBase from './DrawerBase';
import { NavLink } from '../Navigation';
import CloseButton from '../CloseButton';

const MenuItem = styled(ListItem).attrs({
  button: undefined,
})`
  height: calc((100vh - 4px - (3rem + 4vh)) / 4);
  margin: 0;
`;

const Menu = styled(List)`
  width: 100vw;
  padding: 0;
  background-color: #fdfde8;
`;

const MenuLink = styled(NavLink)`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 0;
  justify-content: center;
  align-items: center;
`;

const Close = styled.div`
  padding-top: 2vh;
  padding-bottom: 2vh;
  margin: 0;
  display: flex;
  justify-content: center;
  background-color: #fdfde8;
  cursor: pointer;
`;

interface NavigationDrawerProps {
  isOpen: boolean;
  toggle: () => void;
}

const NavigationDrawer: React.FC<NavigationDrawerProps> = ({
  isOpen,
  toggle,
}) => {
  return (
    <DrawerBase isOpen={isOpen}>
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
        <Divider />
        <Close>
          <CloseButton onClick={toggle} />
        </Close>
      </Menu>
    </DrawerBase>
  );
};

NavigationDrawer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default NavigationDrawer;