import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

// Material-ui
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const Brand = styled(Typography).attrs({
  component: 'span',
})`
  margin: 0 1rem;
  color: ${(props): string => props.theme.azure};
`;

export const StyledGatsbyLink = styled(Link)`
  font-family: mr-eaves-xl-modern;
  font-weight: bold;
  text-decoration: none;
`;

export const AnchoredNavLink = styled(AnchorLink)`
  margin: auto 0;
  padding: 0.5rem 0.5rem;
  text-decoration: none;
`;

const Navbar = styled(Paper)`
  background-color: ${(props): string => props.theme.bg};
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

const Nav = styled(Grid).attrs(() => ({
  component: 'nav',
}))``;

const Navigation: React.FC = () => (
  <Navbar elevation={2}>
    <Container maxWidth={'lg'}>
      <Nav container>
        <AnchoredNavLink to="/#header">
          <Brand variant={'h2'}>BRIAN MONACCIO</Brand>
        </AnchoredNavLink>
        <AnchoredNavLink to="/#about">
          <Typography variant={'h5'} component="span">
            About
          </Typography>
        </AnchoredNavLink>
        <AnchoredNavLink to="/#portfolio">
          <Typography variant={'h5'} component="span">
            Portfolio
          </Typography>
        </AnchoredNavLink>
        <AnchoredNavLink to="/#contact">
          <Typography variant={'h5'} component="span">
            Contact
          </Typography>
        </AnchoredNavLink>
      </Nav>
    </Container>
  </Navbar>
);

export default Navigation;
