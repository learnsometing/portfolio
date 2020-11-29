import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';

// Material-UI
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ChildImageSharp from '../shared/ChildImageSharp';

import { fadeIn } from '../shared/animations';

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
  hasAnimated: boolean;
}

const ProjectLink = styled(Link)`
  text-decoration: none;
`;

const ProjectCard: React.FC<ProjectCardProps> = ({ content, hasAnimated }) => {
  const { title, path, cardText, cardPhoto } = content;

  const [projectCardRef, projectCardInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  let delay = 0;

  useEffect(() => {
    if (hasAnimated) delay = 0;
    if (projectCardInView) {
      fadeIn('.projectCards', delay);
    }
  }, [projectCardInView]);

  return (
    <Grid
      component="article"
      item
      xl={6}
      lg={6}
      md={6}
      sm={6}
      xs={12}
      ref={projectCardRef}
      className="projectCards fade-in"
    >
      <ProjectLink to={path}>
        <Card raised>
          <CardActionArea>
            <Img
              fluid={cardPhoto.src.childImageSharp.fluid}
              alt={cardPhoto.altText}
            />
            <CardContent>
              <Typography gutterBottom variant={'h5'} component={'h3'}>
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
  hasAnimated: PropTypes.bool.isRequired,
};

export default ProjectCard;
