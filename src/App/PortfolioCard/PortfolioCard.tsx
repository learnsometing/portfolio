import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import ChildImageSharp from '../../shared/ChildImageSharp';

interface Image {
  src: ChildImageSharp;
  altText: string;
}

export interface ProjectCard {
  title: string;
  cardPhoto: Image;
  fields: {
    slug: string;
  };
}

interface CardProps {
  project: ProjectCard;
}

const PortfolioCard: React.FC<CardProps> = ({ project }) => {
  return (
    <Grid item component={'article'} xl={4} lg={4} md={6} sm={6} xs={12}>
      <Link to={project.fields.slug}>
        <Card raised>
          <CardActionArea>
            <Img
              fluid={project.cardPhoto.src.childImageSharp.fluid}
              alt="First slide"
            />
            <CardContent>
              <CardHeader title={project.title} />
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </Grid>
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
