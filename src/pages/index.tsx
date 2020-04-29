import React from 'react';
import Layout from '../App/Layout/Layout';
import SEO from '../App/SEO/SEO';
import Header from '../App/Header/Header';

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Home" />
    <Header />
  </Layout>
);

export default IndexPage;
