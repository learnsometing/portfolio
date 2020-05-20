import React from 'react';
import styled from 'styled-components';
import useScrollAnimation from '../shared/useScrollAnimation';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Section from '../shared/Section';
import Avatar from './Avatar';

const AboutSection = styled(Section)`
  h2,
  p {
    text-align: center;
  }

  @media screen and (min-width: 600px) {
    h2,
    p {
      text-align: start;
    }
  }

  &:after {
    content: '.';
    visibility: hidden;
    display: block;
    height: 0;
    clear: both;
  }
`;

const AnimatedTypography = styled(Typography)`
  transform: translateY(100px);
  opacity: 0;
`;

const About: React.FC = () => {
  return (
    <AboutSection id="about">
      <Container maxWidth={'lg'}>
        <Avatar />
        <AnimatedTypography
          variant={'h2'}
          gutterBottom
          ref={useScrollAnimation(0)}
        >
          Hello 🖖
        </AnimatedTypography>
        <AnimatedTypography
          variant={'h4'}
          component={'p'}
          gutterBottom
          ref={useScrollAnimation(0)}
        >
          I’m Brian Monaccio, a self-taught frontend developer and JavaScript
          specialist.
        </AnimatedTypography>
        <AnimatedTypography
          variant={'body1'}
          gutterBottom
          ref={useScrollAnimation(0)}
        >
          In January 2019 I left my career in the wine industry to pursue a more
          satisfying career in web development. In the past year, I&#39;ve
          immersed myself in web technologies and grown my appreciation for the
          richness and complexities of the sites that connect us.
        </AnimatedTypography>
        <AnimatedTypography
          variant={'body1'}
          gutterBottom
          ref={useScrollAnimation(0)}
        >
          My interest in frontend development was ignited by the realization
          that I had an opportunity to create things that could be used by
          millions of people every day. Now driven by the desire to implement
          elegant and effective websites, I spend my time developing React
          applications and practicing design with a focus on user experience.
        </AnimatedTypography>
        <AnimatedTypography
          variant={'body1'}
          gutterBottom
          ref={useScrollAnimation(0)}
        >
          The rest of my free time is spent gardening, cooking, eating, and
          drinking with my partner Arden and our pets Herbie 🦜 and Skipper 🐕.
          We recently moved to Beacon, NY where (hopefully soon) we can be found
          in the community garden, or at one of the many coffee shops and
          breweries in town.
        </AnimatedTypography>
      </Container>
    </AboutSection>
  );
};

export default About;
