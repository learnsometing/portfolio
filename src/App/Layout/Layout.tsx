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

// Components
import Contact from '../Contact';

interface Props {
  children: ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => (
  <StyledComponentsThemeProvider theme={scTheme}>
    <main>{children}</main>
    <Contact />
  </StyledComponentsThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
