import React from 'react';
import Layout from '../App/Layout/Layout';
import SEO from '../App/SEO/SEO';
import Header from '../App/Header/Header';
import { ThemeProvider } from '@material-ui/core';
import theme from '../shared/MUITheme';
import Portfolio from '../App/Portfolio/Portfolio';
import About from '../App/About/About';
import Contact from '../App/Contact/Contact';

const IndexPage: React.FC = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <SEO title="Home" />
      <Header />
      <About />
      <Portfolio />
      <Contact />
    </Layout>
  </ThemeProvider>
);

export default IndexPage;
