import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import { Container, Row } from 'react-bootstrap';
import Layout from '../App/Layout/Layout';
import PortfolioCard, { Project } from './portfolio/PortfolioCard';
import Navigation from '../shared/Navigation';
import CollapsedNavigation from '../shared/CollapsedNavigation';

interface PortfolioProps {
  data: Project[];
}

export const PurePortfolio: React.FC<PortfolioProps> = ({ data }) => {
  return (
    <Layout>
      <Navigation />
      <CollapsedNavigation />
      <Container fluid>
        <h1>Portfolio</h1>
        <Row xs="1" sm="1" md="2" lg="2" xl="3">
          {data.map((project) => (
            <PortfolioCard key={project.title} project={project} />
          ))}
        </Row>
      </Container>
    </Layout>
  );
};

PurePortfolio.propTypes = {
  data: PropTypes.array.isRequired,
};

const Portfolio: React.FC = () => {
  const { allPortfolioJson } = useStaticQuery(graphql`
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
  `);

  return <PurePortfolio data={allPortfolioJson.nodes} />;
};

export default Portfolio;
