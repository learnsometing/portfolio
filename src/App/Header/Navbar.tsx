import React from 'react';
import styled from 'styled-components';

import Typography from '@material-ui/core/Typography';

import { AnchoredLink } from '../shared/Navigation';

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 960px) {
    margin-right: ${(props): string => props.theme.spacing(4)};
    justify-content: flex-start;
    flex-direction: row-reverse;
  }
`;

const HeaderNavLink = styled(AnchoredLink)`
  margin: ${(props): string => props.theme.spacing(3)};

  @media only screen and (min-width: 960px) {
    writing-mode: vertical-lr;
    margin: 0 ${(props): string => props.theme.spacing(2)};
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
