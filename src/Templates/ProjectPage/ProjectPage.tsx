import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import styled from 'styled-components';

// Material-UI Imports
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { ThemeProvider } from '@material-ui/core';
import theme from '../../App/shared/MUITheme';

// Icons
import { TiArrowForward } from 'react-icons/ti';
import { FaGithub } from 'react-icons/fa';

// Components
import Layout from '../../App/Layout/Layout';
import SEO from '../../App/SEO/SEO';
import Navigation from '../../App/shared/Navigation';
import BottomNavigation from '../../App/shared/BottomNavigation/BottomNavigation';
import Carousel from '../../App/Carousel/Carousel';
import DescriptionContent from './Description';
import Tags from './Tags';
import Contact from '../../App/Contact/Contact';
import Section from '../../App/shared/Section';

// Interfaces
import { Slide } from '../../App/Carousel/Carousel';

interface Mdx {
  mdx: {
    frontmatter: {
      title: string;
      websiteUrl: string;
      githubUrl: string;
      carouselPhotos: Slide[];
      tags: string[];
    };
    body: string;
  };
}

interface Props {
  data: Mdx;
}

const ProjectTitle = styled(Typography).attrs({
  variant: 'h1',
  gutterBottom: true,
})`
  text-align: center;

  @media screen and (min-width: 1280px) {
    text-align: start;
  }
`;

const ProjectLinks = styled(Grid)`
  padding: 1rem 0;
  justify-content: center;

  @media screen and (min-width: 1280px) {
    justify-content: flex-start;
  }
`;

export const SectionHeading = styled(Typography).attrs({
  variant: 'h2',
  gutterBottom: true,
})`
  text-align: center;

  @media screen and (min-width: 1280px) {
    text-align: start;
  }
`;

const CarouselRoot = styled(Grid)`
  margin: 1rem 0;
  background-color: ${(props): string => props.theme.secondary};
`;

const TechTags = styled(Grid).attrs({
  component: 'section',
})`
  background-color: ${(props): string => props.theme.tertiary};
  color: #fdfde8;
  margin: 1rem 0;
  @media screen and (min-width: 1280px) {
    padding: 0 2rem;
  }
`;

const Description = styled.section`
  padding-bottom: 1rem;
  @media screen and (min-width: 1280px) {
    padding-bottom: 4rem;
  }
`;

const DescriptionParagraph = styled(Typography).attrs({
  variant: 'body1',
  gutterBottom: true,
})`
  text-align: center;

  @media screen and (min-width: 1280px) {
    text-align: start;
  }
`;

const shortcodes = { DescriptionParagraph, Grid };

const ProjectPage: React.FC<Props> = ({ data: { mdx } }) => {
  const { frontmatter } = mdx;

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Navigation />
        <SEO title={frontmatter.title} />
        <Container maxWidth={'lg'}>
          <Section as={'header'}>
            <ProjectTitle>{frontmatter.title}</ProjectTitle>
            <ProjectLinks container spacing={2}>
              <Grid item>
                <Link
                  href={frontmatter.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    color={'primary'}
                    variant={'contained'}
                    endIcon={<TiArrowForward />}
                  >
                    Visit
                  </Button>
                </Link>
              </Grid>
              <Grid item>
                <Link
                  href={frontmatter.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    color={'primary'}
                    variant={'contained'}
                    endIcon={<FaGithub />}
                  >
                    Github
                  </Button>
                </Link>
              </Grid>
            </ProjectLinks>
          </Section>
          <Grid container justify={'center'}>
            <Description>
              <MDXProvider components={shortcodes}>
                <DescriptionContent description={mdx.body} />
              </MDXProvider>
            </Description>

            <CarouselRoot item xs={12} sm={12} md={8} lg={8} xl={8}>
              <SectionHeading>Gallery</SectionHeading>
              <Carousel slides={frontmatter.carouselPhotos} />
            </CarouselRoot>

            <TechTags item xs={12} sm={12} md={4} lg={4} xl={4}>
              <Tags tags={frontmatter.tags} />
            </TechTags>
          </Grid>
          <Contact />
        </Container>
        <BottomNavigation />
      </Layout>
    </ThemeProvider>
  );
};

ProjectPage.propTypes = {
  data: PropTypes.shape({
    mdx: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        websiteUrl: PropTypes.string.isRequired,
        githubUrl: PropTypes.string.isRequired,
        carouselPhotos: PropTypes.arrayOf(
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
        tags: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
      }).isRequired,
      body: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ProjectPage;

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { path: { eq: $slug } }) {
      frontmatter {
        title
        githubUrl
        websiteUrl
        carouselPhotos {
          altText
          src {
            childImageSharp {
              fluid(maxWidth: 1920) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          caption
        }
        tags
      }
      body
    }
  }
`;
