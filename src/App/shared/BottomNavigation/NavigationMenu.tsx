import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

import { AnchoredLink } from '../Navigation';
import { MenuCloseButton } from '../CloseButton';

const MenuItem = styled(ListItem).attrs({
  button: undefined,
})`
  height: calc((100vh - 4px - (3rem + 4vh)) / 4);
  margin: 0;
`;

const Menu = styled(List)`
  width: 100vw;
  padding: 0;
  background-color: ${(props): string => props.theme.bgLightened};
`;

const MenuLink = styled(AnchoredLink)`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 0;
  justify-content: center;
  align-items: center;
`;

const MenuLinkText = styled(Typography).attrs({
  variant: 'h3',
  component: 'span',
})`
  color: ${(props): string => props.theme.textEmphasis};
`;

interface NavigationDrawerProps {
  toggle: () => void;
}

const NavigationMenu: React.FC<NavigationDrawerProps> = ({ toggle }) => {
  return (
    <Menu>
      <MenuItem onClick={toggle}>
        <MenuLink to="/#header">
          <MenuLinkText>Home</MenuLinkText>
        </MenuLink>
      </MenuItem>
      <Divider component={'li'} />
      <MenuItem onClick={toggle}>
        <MenuLink to="/#about">
          <MenuLinkText>About</MenuLinkText>
        </MenuLink>
      </MenuItem>
      <Divider component={'li'} />
      <MenuItem onClick={toggle}>
        <MenuLink to="/portfolio">
          <MenuLinkText>Portfolio</MenuLinkText>
        </MenuLink>
      </MenuItem>
      <Divider component={'li'} />
      <MenuItem onClick={toggle}>
        <MenuLink to="#contact">
          <MenuLinkText>Contact</MenuLinkText>
        </MenuLink>
      </MenuItem>
      <Divider />
      <MenuCloseButton onClick={toggle} />
    </Menu>
  );
};

NavigationMenu.propTypes = {
  toggle: PropTypes.func.isRequired,
};

export default NavigationMenu;
