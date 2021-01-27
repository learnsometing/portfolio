import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import styled from 'styled-components';

// Material-UI Imports
import { Button, Container, Grid, Link, Typography } from '@material-ui/core';

// Icons
import { TiArrowForward } from '@react-icons/all-files/ti/TiArrowForward';
import { FaGithub } from '@react-icons/all-files/fa/FaGithub';

// Components
import Layout from '../../App/Layout';
import SEO from '../../App/SEO';
import Gallery from './Gallery';
import Description from './Description';
import Tags from './Tags';
import Section from '../../App/shared/Section';

// Interfaces
import { Slide } from '../../App/Carousel/Carousel';

interface Mdx {
  mdx: {
    frontmatter: {
      title: string;
      websiteUrl: string;
      githubUrl: string;
      mobileCarouselPhotos: Slide[];
      tabletCarouselPhotos: Slide[];
      carouselPhotos: Slide[];
      tags: string[];
    };
    body: string;
  };
}

interface Props {
  data: Mdx;
}

const ProjectLink = styled(Button)`
  color: ${(props) => props.theme.mintCream};
`;

const ProjectLinks = styled(Grid)`
  padding: ${(props): string => props.theme.spacing(4)} 0;
`;

const shortcodes = { Grid, Typography };

const ProjectPage: React.FC<Props> = ({ data: { mdx } }) => {
  const { frontmatter } = mdx;
  console.log(frontmatter);
  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <Container maxWidth={'lg'}>
        <Section as={'header'}>
          <Typography variant="h1" gutterBottom>
            {frontmatter.title}
          </Typography>
          {frontmatter.websiteUrl || frontmatter.githubUrl ? (
            <ProjectLinks container spacing={2}>
              {frontmatter.websiteUrl && (
                <Grid item>
                  <Link
                    href={frontmatter.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ProjectLink
                      color="primary"
                      variant={'contained'}
                      endIcon={<TiArrowForward />}
                    >
                      Visit
                    </ProjectLink>
                  </Link>
                </Grid>
              )}
              {frontmatter.githubUrl && (
                <Grid item>
                  <Link
                    href={frontmatter.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ProjectLink
                      color={'primary'}
                      variant={'contained'}
                      endIcon={<FaGithub />}
                    >
                      Github
                    </ProjectLink>
                  </Link>
                </Grid>
              )}
            </ProjectLinks>
          ) : null}
        </Section>
        <MDXProvider components={shortcodes}>
          <Description description={mdx.body} />
        </MDXProvider>
        <Grid container justify={'center'}>
          <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
            <Gallery slides={frontmatter.carouselPhotos} />
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <Tags tags={frontmatter.tags} />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

ProjectPage.propTypes = {
  data: PropTypes.shape({
    mdx: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        websiteUrl: PropTypes.string.isRequired,
        githubUrl: PropTypes.string.isRequired,
        mobileCarouselPhotos: PropTypes.arrayOf(
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
        tabletCarouselPhotos: PropTypes.arrayOf(
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
        mobileCarouselPhotos {
          altText
          src {
            childImageSharp {
              fluid(maxWidth: 784) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          caption
        }
        tabletCarouselPhotos {
          altText
          src {
            childImageSharp {
              fluid(maxWidth: 784) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          caption
        }
        carouselPhotos {
          altText
          src {
            childImageSharp {
              fluid(maxWidth: 784) {
                ...GatsbyImageSharpFluid_withWebp
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
