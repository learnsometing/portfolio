import React from 'react';
import styled from 'styled-components';
import { NavLink, LinkText } from '../../shared/Navigation';

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 768px) {
    margin-right: 1rem;
    justify-content: flex-start;
    flex-direction: row-reverse;
  }
`;

const HeaderNavLink = styled(NavLink)`
  padding: 0;
  margin: 0;
  &:hover {
    animation: indent 0.5s ease-in-out alternate infinite forwards;
    &:after {
      content: ' >';
      font-weight: bold;
    }
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

const HeaderLinkText = styled(LinkText).attrs(() => ({
  minFontSize: '16px',
  maxFontSize: '24px',
  minViewportWidth: '320px',
  maxViewportWidth: '1920px',
}))``;

const Navbar: React.FC = () => (
  <Nav>
    <HeaderNavLink to="/portfolio">
      <HeaderLinkText as="span">Portfolio</HeaderLinkText>
    </HeaderNavLink>
    <HeaderNavLink to="/about">
      <HeaderLinkText as="span">About</HeaderLinkText>
    </HeaderNavLink>
    <HeaderNavLink to="/contact">
      <HeaderLinkText as="span">Contact</HeaderLinkText>
    </HeaderNavLink>
  </Nav>
);

export default Navbar;
