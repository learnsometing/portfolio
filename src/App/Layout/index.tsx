/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';

// Styles
import './Layout.css';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import scTheme from '../shared/SCTheme';
import { ThemeProvider } from '@material-ui/core';
import theme from '../shared/MUITheme';

// Components
import Contact from '../Contact';
import Header from '../Header';
interface Props {
  children: ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <StyledComponentsThemeProvider theme={scTheme}>
      <Header />
      <main>{children}</main>
      <Contact />
    </StyledComponentsThemeProvider>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
