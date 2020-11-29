import React, { useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';

import Section from '../../App/shared/Section';
import Carousel, { Slide } from '../../App/Carousel/Carousel';

import { slideUp } from '../../App/shared/animations';
import { Typography } from '@material-ui/core';

const GallerySection = styled(Section)`
  min-height: 420px;
`;

interface Props {
  slides: Slide[];
}

const Gallery: React.FC<Props> = ({ slides }) => {
  const [galleryRef, galleryInView] = useInView({
    threshold: 0.8,
    triggerOnce: true,
  });

  useEffect(() => {
    if (galleryInView) {
      slideUp('.gallery', 0.2);
    }
  }, [galleryInView]);

  return (
    <GallerySection ref={galleryRef}>
      {galleryInView ? (
        <>
          <Typography variant="h2" gutterBottom className="gallery scroll-in">
            Gallery
          </Typography>
          <Carousel slides={slides} />
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
