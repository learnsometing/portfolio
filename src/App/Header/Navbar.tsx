import React from 'react';
import styled from 'styled-components';

import Typography from '@material-ui/core/Typography';

import { Link } from 'gatsby';
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

const AnchoredNavLink = styled(AnchoredLink)`
  margin: ${(props): string => props.theme.spacing(3)};

  @media only screen and (min-width: 960px) {
    writing-mode: vertical-lr;
    margin: 0 ${(props): string => props.theme.spacing(2)};
  }
`;

const NavLink = styled(Link)`
  margin: ${(props): string => props.theme.spacing(3)};
  text-decoration: none;
  @media only screen and (min-width: 960px) {
    writing-mode: vertical-lr;
    margin: 0 ${(props): string => props.theme.spacing(2)};
  }
`;

const Navbar: React.FC = () => (
  <Nav>
    <AnchoredNavLink to="/#about" stripHash>
      <Typography variant={'h5'} component="span">
        About
      </Typography>
    </AnchoredNavLink>
    <NavLink to="/portfolio">
      <Typography variant={'h5'} component="span">
        Portfolio
      </Typography>
    </NavLink>
    <AnchoredNavLink to="/#contact" stripHash>
      <Typography variant={'h5'} component="span">
        Contact
      </Typography>
    </AnchoredNavLink>
  </Nav>
);

export default Navbar;
