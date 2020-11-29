import React from 'react';
import styled from 'styled-components';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

// Material-ui
import { Box, Container, Grid, Paper, Typography } from '@material-ui/core';

const Brand = styled(Typography).attrs({
  component: 'span',
})`
  color: ${(props): string => props.theme.mintCream};
`;

export const AnchoredLink = styled(AnchorLink)`
  text-decoration: none;
`;

const NavbarLink = styled(AnchoredLink)`
  margin: ${(props): string => `0 ${props.theme.spacing(4)}`};
`;

const LinkTypography = styled(Typography).attrs(() => ({
  component: 'span',
}))`
  color: ${(props): string => props.theme.mintCream};
`;

const Navbar = styled(Paper)`
  background-color: ${(props): string => props.theme.metallicSeaweed};
  border-radius: 0;
  @media screen and (max-width: 1279px) {
    display: none;
  }
  @media screen and (min-width: 1280px) {
    position: sticky;
    top: 0;
    z-index: 1020;
  }
`;

const NavbarContainer = styled(Container)`
  padding: ${(props): string => props.theme.spacing(4)};
`;

const Navigation: React.FC = () => (
  <Navbar elevation={2}>
    <NavbarContainer maxWidth={'lg'}>
      <Grid
        component={'nav'}
        container
        alignItems={'center'}
        justify="space-between"
      >
        <Grid item>
          <AnchoredLink to="/#header" stripHash>
            <Brand variant={'h2'}>BRIAN MONACCIO</Brand>
          </AnchoredLink>
        </Grid>
        <Grid item>
          <>
            <NavbarLink to="/#about" stripHash>
              <LinkTypography variant={'h5'}>About</LinkTypography>
            </NavbarLink>
            <NavbarLink to="/portfolio" stripHash>
              <LinkTypography variant={'h5'}>Portfolio</LinkTypography>
            </NavbarLink>
            <NavbarLink to="#contact">
              <LinkTypography variant={'h5'}>Contact</LinkTypography>
            </NavbarLink>
          </>
        </Grid>
      </Grid>
    </NavbarContainer>
  </Navbar>
);

export default Navigation;
