import React from 'react';
import styled from 'styled-components';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

// Hooks
import { useMediaQuery } from 'react-responsive';

// Material-ui
import { Container, Grid, Paper, Typography } from '@material-ui/core';

const Brand = styled(Typography).attrs({
  component: 'span',
})`
  color: ${(props): string => props.theme.mintCream};
`;

export const AnchoredLink = styled(AnchorLink)`
  text-decoration: none;
`;

const NavbarLink = styled(AnchoredLink)`
  margin: ${(props): string => `0 ${props.theme.spacing(4)}`};
  color: ${(props): string => props.theme.mintCream};
`;

const Navbar = styled(Paper)`
  background-color: ${(props): string => props.theme.metallicSeaweed};
  border-radius: 0;
  position: sticky;
  top: 0;
  z-index: 1020;
`;

const NavbarContainer = styled(Container)`
  padding: ${(props): string => props.theme.spacing(4)};
`;

const Navigation: React.FC = () => {
  const shouldRenderFullNav = useMediaQuery({ query: '(min-width: 500px)' });

  return shouldRenderFullNav ? (
    <Navbar elevation={2}>
      <NavbarContainer maxWidth={'lg'}>
        <Grid
          component={'nav'}
          container
          alignItems={'center'}
          justify="space-between"
        >
          <Grid item>
            <AnchoredLink to="/#header" stripHash>
              <Brand variant={'h4'} component="span">
                BRIAN MONACCIO
              </Brand>
            </AnchoredLink>
          </Grid>
          <Grid item>
            <>
              <NavbarLink to="/#about" stripHash>
                About
              </NavbarLink>
              <NavbarLink to="/portfolio" stripHash>
                Portfolio
              </NavbarLink>
              <NavbarLink to="#contact">Contact</NavbarLink>
            </>
          </Grid>
        </Grid>
      </NavbarContainer>
    </Navbar>
  ) : null;
};

const Header: React.FC = () => {
  return (
    <header>
      <Navigation />
    </header>
  );
};

export default Header;
