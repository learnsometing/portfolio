import React from 'react';
import Layout from '../App/Layout/Layout';
import SEO from '../App/SEO/SEO';
import Header from '../App/Header/Header';

// Material-UI
import { ThemeProvider } from '@material-ui/core';
import theme from '../App/shared/MUITheme';

import About from '../App/About/About';

const IndexPage: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="Portfolio" />
        <Header />
        <About />
      </Layout>
    </ThemeProvider>
  );
};

export default IndexPage;
