import React from 'react';

import Layout from '../App/Layout/Layout';
import SEO from '../App/SEO/SEO';
import Introduction from '../App/Intro/Introduction';
import Navigation from '../App/Navigation/Navigation';
import Portfolio from '../App/Portfolio/Portfolio';

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Home" />
    <Introduction />
    <Navigation />
    <Portfolio />
  </Layout>
);

export default IndexPage;
