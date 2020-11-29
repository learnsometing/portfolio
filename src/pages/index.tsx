import React from 'react';

// Components
import About from '../App/About';
import Layout from '../App/Layout/Layout';
import Header from '../App/Header';
import SEO from '../App/SEO';

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
