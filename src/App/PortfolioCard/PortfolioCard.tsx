import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { Card, Col } from 'react-bootstrap';
import { ChildImageSharp } from '../../shared/ChildImageSharp';

const ProjectLink = styled(Link)`
  position: relative;
  display: block;
  margin: 15px 0;
  color: black;
`;

const CardHeader = styled(Card.Header)`
  font-weight: 700;
`;

const MainPhoto = styled(Img)`
  margin-bottom: 0;
`;

interface Image {
  src: ChildImageSharp;
  altText: string;
}

export interface Project {
  title: string;
  cardPhoto: Image;
  fields: {
    slug: string;
  };
}

interface CardProps {
  project: Project;
}

const PortfolioCard: React.FC<CardProps> = ({ project }) => {
  return (
    <Col as={'article'}>
      <ProjectLink to={project.fields.slug}>
        <Card>
          <CardHeader>{project.title}</CardHeader>
          <MainPhoto
            fluid={project.cardPhoto.src.childImageSharp.fluid}
            alt="First slide"
          />
        </Card>
      </ProjectLink>
    </Col>
  );
};

PortfolioCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
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

export default PortfolioCard;
