import React from 'react';
import styled from 'styled-components';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

// Material-ui
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const Brand = styled(Typography).attrs({
  component: 'span',
})`
  margin: 0 ${(props): string => props.theme.spacing(4)};
  color: ${(props): string => props.theme.azure};
`;

export const AnchoredLink = styled(AnchorLink)`
  text-decoration: none;
`;

const NavbarLink = styled(AnchoredLink)`
  margin: ${(props): string => props.theme.spacing(4)};
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

const Navigation: React.FC = () => (
  <Navbar elevation={2}>
    <Container maxWidth={'lg'}>
      <Grid component={'nav'} container alignItems={'center'}>
        <NavbarLink to="/#header">
          <Brand variant={'h2'}>BRIAN MONACCIO</Brand>
        </NavbarLink>
        <NavbarLink to="/#about">
          <Typography variant={'h5'} component="span">
            About
          </Typography>
        </NavbarLink>
        <NavbarLink to="/#portfolio">
          <Typography variant={'h5'} component="span">
            Portfolio
          </Typography>
        </NavbarLink>
        <NavbarLink to="/#contact">
          <Typography variant={'h5'} component="span">
            Contact
          </Typography>
        </NavbarLink>
      </Grid>
    </Container>
  </Navbar>
);

export default Navigation;
