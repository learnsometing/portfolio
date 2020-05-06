import React from 'react';
import styled from 'styled-components';

import Typography from '@material-ui/core/Typography';

import { NavLink } from '../../shared/Navigation';

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
  padding: 0.5rem 0;
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
    margin: 0 0.5rem;

    @keyframes indent {
      to {
        transform: translateY(16px);
      }
    }
  }
`;

const Navbar: React.FC = () => (
  <Nav>
    <HeaderNavLink to="/portfolio">
      <Typography component="span">Portfolio</Typography>
    </HeaderNavLink>
    <HeaderNavLink to="/about">
      <Typography component="span">About</Typography>
    </HeaderNavLink>
    <HeaderNavLink to="/contact">
      <Typography component="span">Contact</Typography>
    </HeaderNavLink>
  </Nav>
);

export default Navbar;
