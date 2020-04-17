import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FlexContainer from '../../shared/FlexContainer';
import { Card } from 'react-bootstrap';

interface ChildImageSharp {
  childImageSharp: {
    fluid: {
      base64: string;
      aspectRatio: number;
      src: string;
      srcSet: string;
      sizes: string;
    };
  };
}

interface Image {
  src: ChildImageSharp;
  altText: string;
}

interface Project {
  title: string;
  shortDescription: string;
  cardPhoto: Image;
  fields: {
    slug: string;
  };
}

interface CardProps {
  project: Project;
}

interface PortfolioProps {
  data: Project[];
}

const PortfolioSection = styled(FlexContainer)`
  flex-wrap: wrap;
`;

const PCard = styled(Link)`
  color: black;
  margin: 0.75rem;
  width: 100%;
`;

export const PortfolioCard: React.FC<CardProps> = ({ project }) => {
  return (
    <PCard to={project.fields.slug}>
      <Card>
        <Img
          fluid={project.cardPhoto.src.childImageSharp.fluid}
          alt="First slide"
        />
        <Card.ImgOverlay>
          <Card.Title>{project.title}</Card.Title>
          <Card.Text>{project.shortDescription}</Card.Text>
        </Card.ImgOverlay>
      </Card>
    </PCard>
  );
};

PortfolioCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    shortDescription: PropTypes.string.isRequired,
    cardPhoto: PropTypes.shape({
      src: PropTypes.shape({
        childImageSharp: PropTypes.shape({
          fluid: PropTypes.shape({
            base64: PropTypes.string.isRequired,
            aspectRatio: PropTypes.number.isRequired,
            src: PropTypes.string.isRequired,
            srcSet: PropTypes.string.isRequired,
            sizes: PropTypes.string.isRequired,
          }).isRequired,
        }).isRequired,
      }).isRequired,
      altText: PropTypes.string.isRequired,
    }).isRequired,
    fields: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export const PurePortfolio: React.FC<PortfolioProps> = ({ data }) => {
  return (
    <PortfolioSection id="portfolio" as="section" justifyContent={'center'}>
      {data.map((project) => (
        <PortfolioCard key={project.title} project={project} />
      ))}
    </PortfolioSection>
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
  `);

  return <PurePortfolio data={allPortfolioJson.nodes} />;
};

export default Portfolio;
