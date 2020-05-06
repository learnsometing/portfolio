import React from 'react';
import Layout from '../App/Layout/Layout';
import SEO from '../App/SEO/SEO';
import Header from '../App/Header/Header';
import { ThemeProvider } from '@material-ui/core';
import theme from '../shared/MUITheme';

const IndexPage: React.FC = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <SEO title="Home" />
      <Header />
    </Layout>
  </ThemeProvider>
);

export default IndexPage;
