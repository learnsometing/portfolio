/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { ReactNode } from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import './Layout.css';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import scTheme from '../shared/SCTheme';

interface Props {
  children: ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => (
  <StyledComponentsThemeProvider theme={scTheme}>
    <main>
      <Helmet>
        <link rel="stylesheet" href="https://use.typekit.net/ari5qhg.css" />
      </Helmet>
      {children}
    </main>
  </StyledComponentsThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
