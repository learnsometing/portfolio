import React from 'react';
import styled from 'styled-components';

import Typography from '@material-ui/core/Typography';

import { Link } from 'gatsby';
import { AnchoredLink } from '../shared/Navigation';

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
`;

const AnchoredNavLink = styled(AnchoredLink)`
  margin: ${(props): string => props.theme.spacing(3)};
`;

const NavLink = styled(Link)`
  margin: ${(props): string => props.theme.spacing(3)};
  text-decoration: none;
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
