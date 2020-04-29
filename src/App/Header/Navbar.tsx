import React from 'react';
import styled from 'styled-components';
import FluidTypography from '../../shared/FluidTypography';

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 768px) {
    margin-right: 1rem;
    justify-content: flex-start;
    flex-direction: row-reverse;
  }
`;

const NavLink = styled(FluidTypography).attrs(() => ({
  minFontSize: '16px',
  maxFontSize: '20px',
  minViewportWidth: '320px',
  maxViewportWidth: '960px',
}))`
  color: #f95738 !important;
  font-family: mr-eaves-xl-modern;
  font-weight: bold;
  margin: 0.5rem 0;

  &:hover {
    color: #1b065e !important;
    animation: indent 0.5s ease-in-out 1 forwards;
    text-decoration: none;
  }

  @keyframes indent {
    to {
      transform: translateX(16px);
    }
  }

  @media only screen and (min-width: 768px) {
    writing-mode: vertical-lr;
    margin: 0 0.25rem;
    @keyframes indent {
      to {
        transform: translateY(16px);
      }
    }
  }
`;

const Navbar: React.FC = () => (
  <Nav>
    <NavLink as="a" href="/portfolio">
      Portfolio
    </NavLink>
    <NavLink as="a" href="/about">
      About
    </NavLink>
    <NavLink as="a" href="/contact">
      Contact
    </NavLink>
  </Nav>
);

export default Navbar;
