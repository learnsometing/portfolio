import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';

import { Box, Container, Grid } from '@material-ui/core';
import Section from '../shared/Section';
import Avatar from './Avatar';

// Styles
import { slideUp } from '../shared/animations';

const AboutSection = styled(Section)`
  padding-top: 2rem;
  @media only screen and (min-width: 1280px) {
    padding: 6rem 0;
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
    <Container maxWidth="lg">
      <AboutSection id="about" ref={aboutRef}>
        {aboutInView ? <AboutMe /> : <Box height="100vh" />}
      </AboutSection>
    </Container>
  );
};

export default About;

const AboutGreeting = styled.h1`
  text-align: center;
  font-family: 'Roboto', 'sans-serif';
  color: ${(props) => props.theme.blueSapphire};
  /* minor third  */

  font-size: 2.49rem;

  @media only screen and (min-width: 600px) {
    font-size: 2.99rem;
  }

  @media only screen and (min-width: 960px) {
    font-size: 3.58rem;
  }

  /* major third  */

  @media only screen and (min-width: 1280px) {
    font-size: 4.77rem;
  }

  @media only screen and (min-width: 1920px) {
    font-size: 5.96rem;
  }
`;

const AboutDetails = styled.p`
  text-align: center;
  font-family: 'Roboto', 'sans-serif';
  color: ${(props) => props.theme.blueSapphire};
  line-height: 1.3;

  /* minor third  */

  font-size: 1.2rem;

  @media only screen and (min-width: 960px) {
    font-size: 1.44rem;
  }

  /* major third  */

  @media only screen and (min-width: 1280px) {
    font-size: 1.95rem;
  }

  @media only screen and (min-width: 1920px) {
    font-size: 2.441rem;
  }
`;

const Name = styled.span`
  background-color: rgb(0, 168, 151);
  background-image: linear-gradient(
    145deg,
    rgba(5, 104, 143, 1) 0%,
    rgba(2, 129, 146, 1) 50%,
    rgba(0, 168, 151, 1) 75%
  );

  background-size: 100%;
  background-repeat: repeat;
  background-clip: text;
  /* Use the text as a mask for the background. */
  /* This will show the gradient as a text color rather than element bg. */
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
`;

const ExperienceDescription = styled.p`
  color: ${(props) => props.theme.blueSapphire};
  font-family: 'aleo', 'sans-serif';
  text-align: center;
  line-height: 1.5;
  font-size: 1rem;

  @media only screen and (min-width: 960px) {
    font-size: 1.2rem;
  }

  /* major third  */

  @media only screen and (min-width: 1280px) {
    font-size: 1.3rem;
  }

  @media only screen and (min-width: 1920px) {
    font-size: 1.62rem;
  }
`;

function AboutMe() {
  return (
    <Container disableGutters maxWidth="md">
      <Grid container justify="center">
        <Grid item xs={12}>
          <Avatar />
        </Grid>
        <Grid item xs={12}>
          <AboutGreeting>
            <span>Hello, my name is</span>
            <br />
            <Name>Brian Monaccio.</Name>
          </AboutGreeting>
        </Grid>

        <Grid item>
          <AboutDetails>
            I’m a self-taught Software Developer and JavaScript specialist.
          </AboutDetails>
          <ExperienceDescription>
            I work at The Wally Shop, a sustainability-focused e-commerce
            startup company. I manage development efforts, as well as the
            technical needs of each of our departments. I&#39;m responsible for
            each aspect of the development lifecycle, from gathering
            requirements from product owners to releasing new and exciting
            features.
          </ExperienceDescription>
        </Grid>
      </Grid>
    </Container>
  );
}
