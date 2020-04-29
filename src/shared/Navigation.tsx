import React from 'react';
import styled from 'styled-components';
import { Navbar, Nav } from 'react-bootstrap';
import FluidTypography from './FluidTypography';

const Brand = styled(FluidTypography).attrs(() => ({
  minFontSize: '20px',
  maxFontSize: '28px',
  minViewportWidth: '320px',
  maxViewportWidth: '960px',
}))`
  color: #0d3b66;
  margin-bottom: 0;
`;

export const NavLink = styled(FluidTypography).attrs(() => ({
  minFontSize: '16px',
  maxFontSize: '18px',
  minViewportWidth: '768px',
  maxViewportWidth: '1350px',
}))`
  color: #f95738 !important;
  font-family: mr-eaves-xl-modern;
  font-weight: bold;
  margin: 0.5rem 0;

  &:hover {
    color: #1b065e !important;
    text-decoration: none;
  }
`;

const NavBar = styled(Navbar)`
  width: 100%;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: #f4d35e !important;
  box-shadow: 0px 3px 5px rgba(0%, 0%, 0%, 0.5);

  @media screen and (max-width: 767px) {
    display: none !important;
  }
  @media screen and (min-width: 768px) {
    position: sticky !important;
    top: 0;
    z-index: 1020;
  }
`;

const Navigation: React.FC = () => (
  <NavBar expand="sm">
    <Navbar.Brand href="/">
      <Brand as="h1">BRIAN MONACCIO</Brand>
    </Navbar.Brand>
    <Nav navbar>
      <Nav.Item>
        <Nav.Link href="/">
          <NavLink as="span">Home</NavLink>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/portfolio">
          <NavLink as="span">Portfolio</NavLink>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/about">
          <NavLink as="span">About</NavLink>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/contact">
          <NavLink as="span">Contact</NavLink>
        </Nav.Link>
      </Nav.Item>
    </Nav>
  </NavBar>
);

export default Navigation;
