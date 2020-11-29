import React, { useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';

import Section from '../../App/shared/Section';
import Carousel, { Slide } from '../../App/Carousel/Carousel';

import { fadeIn } from '../../App/shared/animations';
import { Box, Typography } from '@material-ui/core';

const GallerySection = styled(Section)`
  min-height: 424px;

  @media only screen and (min-width: 600px) {
    min-height: 576px;
  }
  @media only screen and (min-width: 960px) {
    min-height: 616px;
  }
  @media only screen and (min-width: 1280px) {
    min-height: 773px;
  }
`;

interface Props {
  slides: Slide[];
}

const Gallery: React.FC<Props> = ({ slides }) => {
  const [galleryRef, galleryInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (galleryInView) {
      fadeIn('.gallery', 0, 0.1);
    }
  }, [galleryInView]);

  return (
    <GallerySection ref={galleryRef}>
      {galleryInView ? (
        <>
          <Typography variant="h2" gutterBottom className="gallery fade-in">
            Gallery
          </Typography>
          <Box className="gallery fade-in">
            <Carousel slides={slides} />
          </Box>
        </>
      ) : (
        <></>
      )}
    </GallerySection>
  );
};

Gallery.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
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
      caption: PropTypes.string,
    }).isRequired
  ).isRequired,
};

export default Gallery;
