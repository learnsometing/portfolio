import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const Brand = styled(Typography).attrs({
  component: 'span',
})`
  margin: 0 1rem;
  color: #0d3b66;
`;

export const StyledGatsbyLink = styled(Link)`
  font-family: mr-eaves-xl-modern;
  font-weight: bold;
  text-decoration: none;
`;

export const NavLink = styled(StyledGatsbyLink)`
  margin: auto 0;
  padding: 0.5rem 0.5rem;
  color: #f95738;

  &:hover {
    color: #1b065e;
  }

  &:active {
    color: #1b065e;
  }
`;

const Navbar = styled(Paper)`
  background-color: #fdfde8;
  border-radius: 0;
  @media screen and (max-width: 767px) {
    display: none;
  }
  @media screen and (min-width: 768px) {
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
        {/* Brand */}
        <NavLink to="/">
          <Brand variant={'h2'}>BRIAN MONACCIO</Brand>
        </NavLink>
        {/* Links */}
        <NavLink to="/">
          <Typography variant={'h5'} component="span">
            Home
          </Typography>
        </NavLink>
        <NavLink to="/portfolio">
          <Typography variant={'h5'} component="span">
            Portfolio
          </Typography>
        </NavLink>
        <NavLink to="/about">
          <Typography variant={'h5'} component="span">
            About
          </Typography>
        </NavLink>
        <NavLink to="/contact">
          <Typography variant={'h5'} component="span">
            Contact
          </Typography>
        </NavLink>
      </Nav>
    </Container>
  </Navbar>
);

export default Navigation;
