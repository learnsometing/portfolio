import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import Section from '../shared/Section';

const AboutSection = styled(Section)`
  padding-top: 1rem;
  padding-bottom: 1rem;

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

  @media screen and (min-width: 1280px) {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }

  &:after {
    content: '.';
    visibility: hidden;
    display: block;
    height: 0;
    clear: both;
  }
`;

const Avatar = styled.img`
  margin: 2rem 10%;
  border-radius: 50%;
  background: #f4d35e;
  max-width: 80%;

  @media screen and (min-width: 600px) {
    margin: 1.5rem;
    margin-bottom: 0;
    float: left;
    max-width: 40%;
  }

  @media screen and (min-width: 960px) {
    max-width: 30%;
  }

  @media screen and (min-width: 1280px) {
    max-width: 25%;
  }
`;

const About: React.FC = () => {
  const { avatar } = useStaticQuery(graphql`
    query Avatar {
      avatar: file(name: { regex: "/avatar-tree/" }) {
        publicURL
      }
    }
  `);

  return (
    <AboutSection id="about">
      <Container maxWidth={'lg'}>
        <Avatar src={avatar.publicURL} />
        <Typography variant={'h2'} gutterBottom>
          Hello 🖖
        </Typography>
        <Typography variant={'h4'} component={'p'} gutterBottom>
          I’m Brian Monaccio, a self-taught frontend developer and JavaScript
          specialist.
        </Typography>
        <Typography variant={'body1'} gutterBottom>
          In January 2019 I left my career in the wine industry to pursue a more
          satisfying career in web development. In the past year, I&#39;ve
          immersed myself in web technologies and grown my appreciation for the
          richness and complexities of the sites that connect us.
        </Typography>
        <Typography variant={'body1'} gutterBottom>
          My interest in frontend development was ignited by the realization
          that I had an opportunity to create things that could be used by
          millions of people every day. Now driven by the desire to implement
          elegant and effective websites, I spend my time developing React
          applications and practicing design with a focus on user experience.
        </Typography>
        <Typography variant={'body1'} gutterBottom>
          The rest of my free time is spent gardening, cooking, eating, and
          drinking with my partner Arden and our pets Herbie 🦜 and Skipper 🐕.
          We recently moved to Beacon, NY where (hopefully soon) we can be found
          in the community garden, or at one of the many coffee shops and
          breweries in town.
        </Typography>
      </Container>
    </AboutSection>
  );
};

export default About;