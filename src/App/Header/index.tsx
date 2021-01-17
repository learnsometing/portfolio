import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

// Social Icons
import { EmailIcon, GithubIcon, LinkedinIcon } from '../SocialIcons';

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

const Brand = styled(Typography).attrs({
  component: 'span',
})`
  color: ${(props): string => props.theme.mintCream};
`;

const NavbarLink = styled(Link)`
  color: ${(props): string => props.theme.mintCream};
  display: inline-block;
  margin: ${(props): string => `0 ${props.theme.spacing(2)}`};
  text-decoration: none;
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

const StyledDivider = styled(Divider)`
  background-color: ${(props) => props.theme.mintCream};
  margin: 0 0.5rem;
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
            <Box display="flex" alignItems="center">
              <NavbarLink to="/" style={{ marginRight: 0 }}>
                <Brand variant={'h4'} component="span">
                  BRIAN MONACCIO
                </Brand>
              </NavbarLink>
              <StyledDivider orientation="vertical" flexItem />
              <SocialIconList />
            </Box>
          </Grid>
          <Grid item>
            <>
              <NavbarLink to="/#about">About</NavbarLink>
              <NavbarLink to="/portfolio">Portfolio</NavbarLink>
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

const SocialIconList: React.FC = () => (
  <Box display="flex" alignItems="center">
    <GithubNavLink />
    <LinkedinNavLink />
    <EmailNavLink />
  </Box>
);

const StyledAnchor = styled.a`
  margin-right: 0.5rem;
`;

const EmailNavLink: React.FC = () => (
  <StyledAnchor
    href="mailto: brianmonaccio@protonmail.com"
    target="_blank"
    rel="noopener noreferrer"
    title="link to Brian's github account"
  >
    <EmailIcon />
  </StyledAnchor>
);

const GithubNavLink: React.FC = () => (
  <StyledAnchor
    href="https://github.com/learnsometing"
    target="_blank"
    rel="noopener noreferrer"
    title="link to Brian's github account"
  >
    <GithubIcon />
  </StyledAnchor>
);

const LinkedinNavLink: React.FC = () => (
  <StyledAnchor
    href="https://www.linkedin.com/in/brian-monaccio/"
    target="_blank"
    rel="noopener noreferrer"
    title="link to Brian's LinkedIn account"
  >
    <LinkedinIcon />
  </StyledAnchor>
);
