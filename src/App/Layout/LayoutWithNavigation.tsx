/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';

// Components
import Layout from './Layout';
import Navigation from '../shared/Navigation';

interface Props {
  children: ReactNode;
}
const LayoutWithNavigation: React.FC<Props> = ({ children }) => (
  <Layout>
    <>
      <Navigation />
      {children}
    </>
  </Layout>
);

LayoutWithNavigation.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutWithNavigation;
