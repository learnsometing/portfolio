import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';

import { Box, Container, Typography } from '@material-ui/core';
import Section from '../shared/Section';
import Avatar from './Avatar';

import { slideUp } from '../shared/animations';

const AboutSection = styled(Section)`
  min-height: 100vh;

  &:after {
    content: '.';
    visibility: hidden;
    display: block;
    height: 0;
    clear: both;
  }
`;

const About: React.FC = () => {
  const [aboutRef, aboutInView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (aboutInView) {
      slideUp('.about', 0.2);
    }
  }, [aboutInView]);

  return (
    <Container maxWidth={'lg'}>
      <AboutSection id="about" ref={aboutRef}>
        {aboutInView ? (
          <>
            <Avatar />
            <Typography variant={'h2'} gutterBottom className="about scroll-in">
              Hello 🖖
            </Typography>
            <Typography
              variant={'h4'}
              component={'p'}
              gutterBottom
              className="about scroll-in"
            >
              I’m Brian Monaccio, a self-taught frontend developer and
              JavaScript specialist.
            </Typography>
            <Typography
              variant={'body1'}
              gutterBottom
              className="about scroll-in"
            >
              In January 2019 I left my career in the wine industry to pursue a
              more satisfying career in web development. In the past year,
              I&#39;ve immersed myself in web technologies and grown my
              appreciation for the richness and complexities of the sites that
              connect us.
            </Typography>
            <Typography
              variant={'body1'}
              gutterBottom
              className="about scroll-in"
            >
              My interest in frontend development was ignited by the realization
              that I had an opportunity to create things that could be used by
              millions of people every day. Now driven by the desire to
              implement elegant and effective websites, I spend my time
              developing React applications and practicing design with a focus
              on user experience.
            </Typography>
            <Typography
              variant={'body1'}
              gutterBottom
              className="about scroll-in"
            >
              The rest of my free time is spent gardening, cooking, eating, and
              drinking with my partner Arden and our pets Herbie 🦜 and Skipper
              🐕. We recently moved to Beacon, NY where (hopefully soon) we can
              be found in the community garden, or at one of the many coffee
              shops and breweries in town.
            </Typography>
          </>
        ) : (
          <Box height="100vh" />
        )}
      </AboutSection>
    </Container>
  );
};

export default About;
