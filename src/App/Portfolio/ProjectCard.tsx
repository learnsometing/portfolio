import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

// Material-UI
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ChildImageSharp from '../../shared/ChildImageSharp';

interface Image {
  src: ChildImageSharp;
  altText: string;
}

export interface ProjectCardContent {
  title: string;
  path: string;
  cardText: string;
  cardPhoto: Image;
}

export interface Project extends ProjectCardContent {
  tags: string[];
  date: string;
}

interface ProjectCardProps {
  content: ProjectCardContent;
}

const ProjectLink = styled(Link)`
  text-decoration: none;
`;

const ProjectCard: React.FC<ProjectCardProps> = ({ content }) => {
  const { title, path, cardText, cardPhoto } = content;

  return (
    <Grid item component={'article'} xl={4} lg={4} md={6} sm={6} xs={12}>
      <ProjectLink to={path}>
        <Card raised>
          <CardActionArea>
            <Img
              fluid={cardPhoto.src.childImageSharp.fluid}
              alt="First slide"
            />
            <CardContent>
              <Typography gutterBottom variant={'h5'} component={'h2'}>
                {title}
              </Typography>
              <Typography variant={'body1'}>{cardText}</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </ProjectLink>
    </Grid>
  );
};

const ChildImageSharpPropType = PropTypes.shape({
  fluid: PropTypes.shape({
    base64: PropTypes.string.isRequired,
    aspectRatio: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
    srcSet: PropTypes.string.isRequired,
    sizes: PropTypes.string.isRequired,
  }).isRequired,
}).isRequired;

ProjectCard.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    cardText: PropTypes.string.isRequired,
    cardPhoto: PropTypes.shape({
      src: PropTypes.shape({
        childImageSharp: ChildImageSharpPropType,
      }).isRequired,
      altText: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ProjectCard;
