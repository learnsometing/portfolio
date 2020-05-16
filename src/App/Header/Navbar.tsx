import React from 'react';
import styled from 'styled-components';

import Typography from '@material-ui/core/Typography';

import { AnchoredNavLink } from '../shared/Navigation';

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 960px) {
    margin-right: 1rem;
    justify-content: flex-start;
    flex-direction: row-reverse;
  }
`;

const HeaderNavLink = styled(AnchoredNavLink)`
  padding: 0.5rem 0;
  margin: 0;

  @media only screen and (min-width: 960px) {
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
    <HeaderNavLink to="/#about">
      <Typography variant={'h5'} component="span">
        About
      </Typography>
    </HeaderNavLink>
    <HeaderNavLink to="/#portfolio">
      <Typography variant={'h5'} component="span">
        Portfolio
      </Typography>
    </HeaderNavLink>
    <HeaderNavLink to="/#contact">
      <Typography variant={'h5'} component="span">
        Contact
      </Typography>
    </HeaderNavLink>
  </Nav>
);

export default Navbar;
