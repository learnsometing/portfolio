import React from 'react';
import styled from 'styled-components';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

// Material-ui
import { Box, Container, Grid, Paper, Typography } from '@material-ui/core';

const Brand = styled(Typography).attrs({
  component: 'span',
})`
  color: ${(props): string => props.theme.azure};
`;

export const AnchoredLink = styled(AnchorLink)`
  text-decoration: none;
`;

const NavbarLink = styled(AnchoredLink)`
  margin: ${(props): string => `0 ${props.theme.spacing(4)}`};
`;

const Navbar = styled(Paper)`
  background-color: ${(props): string => props.theme.bgLightened};
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
          <AnchoredLink to="/#header">
            <Brand variant={'h2'}>BRIAN MONACCIO</Brand>
          </AnchoredLink>
        </Grid>
        <Grid item>
          <Box>
            <NavbarLink to="/#about">
              <Typography variant={'h5'} component="span">
                About
              </Typography>
            </NavbarLink>
            <NavbarLink to="/portfolio">
              <Typography variant={'h5'} component="span">
                Portfolio
              </Typography>
            </NavbarLink>
            <NavbarLink to="#contact">
              <Typography variant={'h5'} component="span">
                Contact
              </Typography>
            </NavbarLink>
          </Box>
        </Grid>
      </Grid>
    </NavbarContainer>
  </Navbar>
);

export default Navigation;
