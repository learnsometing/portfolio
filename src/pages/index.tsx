import React from 'react';
import Layout from '../App/Layout/Layout';
import SEO from '../App/SEO/SEO';
import Header from '../App/Header/Header';

import About from '../App/About/About';

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Portfolio" />
      <Header />
      <About />
    </Layout>
  );
};

export default IndexPage;
