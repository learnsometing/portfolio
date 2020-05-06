import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import Layout from '../App/Layout/Layout';
import PortfolioCard, {
  ProjectCardContent,
} from '../App/ProjectCard/ProjectCard';
import Navigation from '../shared/Navigation';
import CollapsedNavigation from '../shared/CollapsedNavigation';

interface PortfolioProps {
  data: {
    allMdx: {
      nodes: ProjectCardContent[];
    };
  };
}

export const Portfolio: React.FC<PortfolioProps> = ({ data: { allMdx } }) => {
  const { nodes } = allMdx;
  return (
    <>
      <Navigation />
      <CollapsedNavigation />
      <Layout>
        <Container maxWidth={'lg'}>
          <h1>Portfolio</h1>
          <Grid container spacing={4}>
            {nodes.map((project) => (
              <PortfolioCard
                key={project.frontmatter.title}
                project={project}
              />
            ))}
          </Grid>
        </Container>
      </Layout>
    </>
  );
};

Portfolio.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      nodes: PropTypes.array.isRequired,
    }).isRequired,
  }).isRequired,
};

export const portfolioCards = graphql`
  query {
    allMdx(filter: { fileAbsolutePath: { regex: "/projects/" } }) {
      nodes {
        frontmatter {
          title
          path
          cardPhoto {
            altText
            src {
              childImageSharp {
                fluid(maxWidth: 1920) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          cardText
        }
      }
    }
  }
`;

export default Portfolio;
