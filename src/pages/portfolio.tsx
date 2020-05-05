import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Layout from '../App/Layout/Layout';
import PortfolioCard, { ProjectCard } from '../App/PortfolioCard/PortfolioCard';
import Navigation from '../shared/Navigation';
import CollapsedNavigation from '../shared/CollapsedNavigation';

interface PortfolioProps {
  data: {
    allPortfolioJson: {
      nodes: ProjectCard[];
    };
  };
}

export const Portfolio: React.FC<PortfolioProps> = ({ data }) => {
  const { nodes } = data.allPortfolioJson;

  return (
    <Layout>
      <Navigation />
      <CollapsedNavigation />
      <h1>Portfolio</h1>
      <Grid container spacing={2}>
        {nodes.map((project) => (
          <PortfolioCard key={project.title} project={project} />
        ))}
      </Grid>
    </Layout>
  );
};

Portfolio.propTypes = {
  data: PropTypes.shape({
    allPortfolioJson: PropTypes.shape({
      nodes: PropTypes.array.isRequired,
    }).isRequired,
  }).isRequired,
};

export const portfolioCards = graphql`
  query {
    allPortfolioJson {
      nodes {
        title
        shortDescription
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
        fields {
          slug
        }
      }
    }
  }
`;

export default Portfolio;
