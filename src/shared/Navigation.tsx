import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Grid from '@material-ui/core/Grid';
import FluidTypography from './FluidTypography';

const Brand = styled(FluidTypography).attrs(() => ({
  minFontSize: '32px',
  maxFontSize: '36px',
  minViewportWidth: '768px',
  maxViewportWidth: '1350px',
}))`
  padding: 0.5rem 0;
  margin: 0 1rem;
  color: #0d3b66;
`;

export const NavLink = styled(Link)`
  margin: auto 0;
  padding: 0.5rem 0.5rem;
  color: #f95738;
  font-family: mr-eaves-xl-modern;
  font-weight: bold;

  &:hover {
    color: #1b065e;
    text-decoration: none;
  }

  &:active {
    color: #1b065e;
  }
`;

export const LinkText = styled(FluidTypography).attrs(() => ({
  minFontSize: '18px',
  maxFontSize: '20px',
  minViewportWidth: '768px',
  maxViewportWidth: '1350px',
}))``;

const Navbar = styled(Grid).attrs(() => ({
  container: true,
  component: 'nav',
}))`
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: #f4d35e;
  box-shadow: 0px 3px 5px rgba(0%, 0%, 0%, 0.2);

  @media screen and (max-width: 767px) {
    display: none;
  }
  @media screen and (min-width: 768px) {
    position: sticky;
    top: 0;
    z-index: 1020;
  }
`;

const Navigation: React.FC = () => (
  <Navbar>
    {/* Brand */}
    <Link to="/">
      <Brand as="h1">BRIAN MONACCIO</Brand>
    </Link>
    {/* Links */}
    <NavLink to="/">
      <LinkText as="span">Home</LinkText>
    </NavLink>
    <NavLink to="/portfolio">
      <LinkText as="span">Portfolio</LinkText>
    </NavLink>
    <NavLink to="/about">
      <LinkText as="span">About</LinkText>
    </NavLink>
    <NavLink to="/contact">
      <LinkText as="span">Contact</LinkText>
    </NavLink>
  </Navbar>
);

export default Navigation;
