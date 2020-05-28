import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';

import Section from '../../App/shared/Section';
import { SectionHeading } from './ProjectPage';
import Carousel, { Slide } from '../../App/Carousel/Carousel';

import { slideUp } from '../../App/shared/animations';

interface Props {
  slides: Slide[];
}

const Gallery: React.FC<Props> = ({ slides }) => {
  const [galleryRef, galleryInView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (galleryInView) {
      slideUp('.gallery');
    }
  }, [galleryInView]);

  return (
    <Section ref={galleryRef}>
      {galleryInView ? (
        <>
          <SectionHeading className="gallery scroll-in">Gallery</SectionHeading>
          <Carousel slides={slides} />
        </>
      ) : (
        <></>
      )}
    </Section>
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
