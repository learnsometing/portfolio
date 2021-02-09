import React, { useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';

import Section from '../../App/shared/Section';
import {
  Carousel,
  MobileCarousel,
  SlideInterface,
  TabletCarousel,
} from '../../App/Carousel';

import { fadeIn } from '../../App/shared/animations';
import { Box, Typography } from '@material-ui/core';

// Media Queries
import { EXTRA_SMALL, SMALL } from '../../media-queries';

// React Responsive
import { useMediaQuery } from 'react-responsive';

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
  slides: SlideInterface[];
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

  const isXs = useMediaQuery({ query: EXTRA_SMALL });
  const isSm = useMediaQuery({ query: SMALL });

  const { carouselPhotos, mobileCarouselPhotos, tabletCarouselPhotos } = slides;

  return (
    <GallerySection ref={galleryRef}>
      {galleryInView ? (
        <>
          <Typography variant="h2" gutterBottom className="gallery fade-in">
            Gallery
          </Typography>
          <Box className="gallery fade-in" padding={'0 1rem'}>
            {isXs && mobileCarouselPhotos && mobileCarouselPhotos.length ? (
              <MobileCarousel slides={mobileCarouselPhotos} />
            ) : null}
            {isSm && tabletCarouselPhotos && tabletCarouselPhotos.length ? (
              <TabletCarousel slides={tabletCarouselPhotos} />
            ) : null}
            {((!isXs && !isSm) ||
              (isXs && !mobileCarouselPhotos) ||
              (isXs && !tabletCarouselPhotos) ||
              (isSm && !tabletCarouselPhotos)) &&
            carouselPhotos &&
            carouselPhotos.length ? (
              <Carousel slides={carouselPhotos} />
            ) : null}
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
