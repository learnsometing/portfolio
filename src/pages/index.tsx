import React from 'react';

// Components
import About from '../App/About';
import Layout from '../App/Layout';
import SEO from '../App/SEO';

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Portfolio" />
      <About />
    </Layout>
  );
};

export default IndexPage;
