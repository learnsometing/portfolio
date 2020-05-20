import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import styled from 'styled-components';

// Material-UI Imports
import BottomNavigation from '@material-ui/core/BottomNavigation';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
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
import Carousel from '../../App/Carousel/Carousel';
import DescriptionContent from './Description';
import Tags from './Tags';
import Contact from '../../App/Contact/Contact';
import Section from '../../App/shared/Section';
import MenuAction from '../../App/shared/BottomNavigation/MenuAction';

// Interfaces
import { Slide } from '../../App/Carousel/Carousel';

// Hooks
import useScrollAnimation from '../../App/shared/useScrollAnimation';

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

const CondensedNavbar = styled(Paper).attrs({
  elevation: 2,
  square: true,
})`
  position: fixed;
  bottom: ${(props): string => props.theme.spacing(4)};
  right: ${(props): string => props.theme.spacing(4)};
  z-index: 2;
  height: 80px;
  width: 80px;
  border-radius: 50%;
  background-color: ${(props): string => props.theme.bgLightened};
  @media only screen and (min-width: 1280px) {
    display: none;
  }
`;

const ProjectTitle = styled(Typography).attrs({
  variant: 'h1',
})`
  text-align: center;
  margin-bottom: 0.45em;
  @media screen and (min-width: 1280px) {
    text-align: start;
  }
`;

const ProjectLinks = styled(Grid)`
  padding: ${(props): string => props.theme.spacing(4)} 0;
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

const DescriptionParagraph = styled(Typography).attrs({
  variant: 'body1',
  gutterBottom: true,
})`
  text-align: center;
  opacity: 0;
  transform: translateY(100px);
  @media screen and (min-width: 1280px) {
    text-align: start;
  }
`;

const Gallery = styled(Section)`
  opacity: 0;
  transform: translateY(100px);
`;

const TechTags = styled(Section)`
  @media screen and (min-width: 1280px) {
    margin-left: ${(props): string => props.theme.spacing(6)};
  }
  opacity: 0;
  transform: translateY(100px);
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
          <Section>
            <MDXProvider components={shortcodes}>
              <DescriptionContent description={mdx.body} />
            </MDXProvider>
          </Section>

          <Grid container justify={'center'}>
            <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
              <Gallery ref={useScrollAnimation(0)}>
                <SectionHeading>Gallery</SectionHeading>
                <Carousel slides={frontmatter.carouselPhotos} />
              </Gallery>
            </Grid>

            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
              <TechTags ref={useScrollAnimation(0)}>
                <Tags tags={frontmatter.tags} />
              </TechTags>
            </Grid>
          </Grid>
        </Container>
        <Contact />
        <BottomNavigation component={CondensedNavbar} showLabels>
          <MenuAction />
        </BottomNavigation>
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
