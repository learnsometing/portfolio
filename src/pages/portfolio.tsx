import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { Container, Row } from 'react-bootstrap';
import Layout from '../App/Layout/Layout';
import PortfolioCard, { Project } from '../App/PortfolioCard/PortfolioCard';
import Navigation from '../shared/Navigation';
import CollapsedNavigation from '../shared/CollapsedNavigation';

interface PortfolioProps {
  data: {
    allPortfolioJson: {
      nodes: Project[];
    };
  };
}

export const Portfolio: React.FC<PortfolioProps> = ({ data }) => {
  const { nodes } = data.allPortfolioJson;

  return (
    <Layout>
      <Navigation />
      <CollapsedNavigation />
      <Container fluid>
        <h1>Portfolio</h1>
        <Row xs="1" sm="1" md="2" lg="2" xl="3">
          {nodes.map((project) => (
            <PortfolioCard key={project.title} project={project} />
          ))}
        </Row>
      </Container>
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

export const portfolioCardQuery = graphql`
  query {
    allPortfolioJson {
      nodes {
        title
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
