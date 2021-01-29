import React, { useState } from 'react';

// Custom Components
import DrawerBase from '../DrawerBase';
import { MenuCloseButton } from '../shared/CloseButton';
import SocialIconList from './SocialIconList';

// Hooks
import { useMediaQuery } from 'react-responsive';

// Icons
import { MdMenu } from '@react-icons/all-files/md/MdMenu';

// Material UI
import {
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  Typography,
} from '@material-ui/core';

// Styled Components
import styled from 'styled-components';

import { Link } from 'gatsby';

const MenuIcon = styled(MdMenu)`
  height: ${(props): string => props.theme.bottomNavigationIconSize};
  width: ${(props): string => props.theme.bottomNavigationIconSize};
  color: ${(props): string => props.theme.mintCream};
`;

const MenuItem = styled(ListItem).attrs({
  button: undefined,
})`
  height: calc(
    (
        100vh - ${(props) => (props.shouldShowSocialLinks ? '6px' : '5px')} -
          (3rem + 4vh)
      ) / ${(props) => (props.shouldShowSocialLinks ? 5 : 4)}
  );
  margin: 0;
`;

const MenuLink = styled(Link)`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 0;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`;

const MenuLinkText = styled(Typography).attrs({
  variant: 'h3',
  component: 'span',
})`
  color: ${(props): string => props.theme.mintCream};
`;

const Menu = styled(List)`
  height: 100vh;
  padding: 0;
  background-color: ${(props): string => props.theme.metallicSeaweed};
`;

const NavigationMenu: React.FC = () => {
  const shouldShowSocialLinks = useMediaQuery({ query: '(max-width: 633px)' });
  const [isNavDrawerOpen, setIsNavDrawerOpen] = useState(false);

  const toggleNavDrawer = (): void => {
    setIsNavDrawerOpen(!isNavDrawerOpen);
  };

  return (
    <>
      <IconButton onClick={toggleNavDrawer}>
        <MenuIcon />
      </IconButton>
      <DrawerBase isOpen={isNavDrawerOpen}>
        <Menu>
          {shouldShowSocialLinks ? (
            <>
              <MenuItem shouldShowSocialLinks={shouldShowSocialLinks}>
                <Box display="flex" justifyContent="center" width="100%">
                  <SocialIconList onClick={toggleNavDrawer} />
                </Box>
              </MenuItem>
              <Divider component={'li'} />
            </>
          ) : null}
          <MenuItem
            onClick={toggleNavDrawer}
            shouldShowSocialLinks={shouldShowSocialLinks}
          >
            <MenuLink to="/#header">
              <MenuLinkText>Home</MenuLinkText>
            </MenuLink>
          </MenuItem>
          <Divider component={'li'} />
          <MenuItem
            onClick={toggleNavDrawer}
            shouldShowSocialLinks={shouldShowSocialLinks}
          >
            <MenuLink to="/#about">
              <MenuLinkText>About</MenuLinkText>
            </MenuLink>
          </MenuItem>
          <Divider component={'li'} />
          <MenuItem
            onClick={toggleNavDrawer}
            shouldShowSocialLinks={shouldShowSocialLinks}
          >
            <MenuLink to="/portfolio">
              <MenuLinkText>Portfolio</MenuLinkText>
            </MenuLink>
          </MenuItem>
          <Divider component={'li'} />
          <MenuItem
            onClick={toggleNavDrawer}
            shouldShowSocialLinks={shouldShowSocialLinks}
          >
            <MenuLink to="#contact">
              <MenuLinkText>Contact</MenuLinkText>
            </MenuLink>
          </MenuItem>
          <Divider />
          <MenuCloseButton onClick={toggleNavDrawer} />
        </Menu>
      </DrawerBase>
    </>
  );
};

export default NavigationMenu;
