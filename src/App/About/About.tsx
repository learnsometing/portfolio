import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const AboutSection = styled(Container).attrs({
  component: 'section',
})`
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
    <AboutSection id="about" maxWidth={'lg'}>
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
        richness of the web and the complexities of the sites that connect us.
      </Typography>
      <Typography variant={'body1'} gutterBottom>
        My interest in frontend development was ignited by JavaScript and React
        when I built my first Gatsby site for a freelance client. Now I spend my
        time developing React applications and designing and implementing
        forward-facing features with user experience in mind.
      </Typography>
      <Typography variant={'body1'} gutterBottom>
        The rest of my free time is spent gardening, cooking, eating, and
        drinking with my partner Arden and our pets Herbie 🦜 and Skipper 🐕. We
        recently moved to Beacon, NY where (hopefully soon) we can be found in
        the community garden, or at one of the many coffee shops and breweries
        in town.
      </Typography>
    </AboutSection>
  );
};

export default About;
