import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

// Custom
import NavigationMenu from './NavigationMenu';
import SocialIconList from './SocialIconList';

// Hooks
import { useMediaQuery } from 'react-responsive';

// Material-ui
import {
  Box,
  Container,
  Divider,
  Grid,
  Paper,
  Typography,
} from '@material-ui/core';

const NavbarLink = styled(Link)`
  color: ${(props): string => props.theme.mintCream};
  display: inline-block;
  margin: ${(props): string => `0 ${props.theme.spacing(2)}`};
  text-decoration: none;
`;

const StickyHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 1020;
`;

const Navbar = styled(Paper)`
  background-color: ${(props): string => props.theme.metallicSeaweed};
  border-radius: 0;
`;

const NavbarContainer = styled(Container)`
  padding: ${(props): string => props.theme.spacing(2)};
`;

const StyledDivider = styled(Divider)`
  background-color: ${(props) => props.theme.mintCream};
  margin: 0 0.5rem;
`;

const Navigation: React.FC = () => {
  const shouldCondensePageLinks = useMediaQuery({
    query: '(min-width: 800px)',
  });
  const shouldCondenseSocialLinks = useMediaQuery({
    query: '(min-width: 600px)',
  });

  return (
    <Navbar elevation={2}>
      <NavbarContainer maxWidth={'lg'}>
        <Grid
          component={'nav'}
          container
          alignItems={'center'}
          justify="space-between"
        >
          <Grid item>
            {shouldCondenseSocialLinks ? (
              <Box display="flex" alignItems="center">
                <HomeLink />
                <StyledDivider orientation="vertical" flexItem />
                <SocialIconList />
              </Box>
            ) : (
              <HomeLink />
            )}
          </Grid>
          <Grid item>
            {shouldCondensePageLinks ? (
              <>
                <NavbarLink to="/#about">About</NavbarLink>
                <NavbarLink to="/portfolio">Portfolio</NavbarLink>
                <NavbarLink to="#contact">Contact</NavbarLink>
              </>
            ) : (
              <NavigationMenu />
            )}
          </Grid>
        </Grid>
      </NavbarContainer>
    </Navbar>
  );
};

const Header: React.FC = () => {
  return (
    <StickyHeader>
      <Navigation />
    </StickyHeader>
  );
};

export default Header;

const Brand = styled(Typography).attrs({
  component: 'span',
})`
  color: ${(props): string => props.theme.mintCream};
`;

const HomeLink: React.FC = () => (
  <NavbarLink to="/" style={{ marginRight: 0 }}>
    <Brand variant={'h4'} component="span">
      BRIAN MONACCIO
    </Brand>
  </NavbarLink>
);
