import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
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
    <Layout>
      <Navigation />
      <CollapsedNavigation />
      <h1>Portfolio</h1>
      <Grid container spacing={2}>
        {nodes.map((project) => (
          <PortfolioCard key={project.frontmatter.title} project={project} />
        ))}
      </Grid>
    </Layout>
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
