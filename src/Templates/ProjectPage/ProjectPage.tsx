import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import styled from 'styled-components';

// Material-UI Imports
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { ThemeProvider } from '@material-ui/core';
import theme from '../../shared/MUITheme';

// Icons
import { TiArrowForward } from 'react-icons/ti';
import { FaGithub } from 'react-icons/fa';

// Components
import Layout from '../../App/Layout/Layout';
import SEO from '../../App/SEO/SEO';
import Navigation from '../../shared/Navigation';
import CollapsedNavigation from '../../shared/CollapsedNavigation';
import Carousel from '../../App/Carousel/Carousel';
import Description from './Description';
import Tags from './Tags';

// Interfaces
import { Slide } from '../../App/Carousel/Carousel';

interface Mdx {
  mdx: {
    frontmatter: {
      title: string;
      websiteURL: string;
      githubURL: string;
      carouselPhotos: Slide[];
      technologies: string[];
    };
    body: string;
  };
}

interface Props {
  data: Mdx;
}

const PageHeader = styled(Grid).attrs({
  component: 'header',
})`
  padding: 1.5rem;
  color: #000;
  background-color: #f49097;
`;

const DescriptionSection = styled(Grid).attrs({
  component: 'section',
})`
  padding: 1.5rem;
  color: #000;
  background-color: #f49097;
`;

const CarouselRoot = styled(Grid)`
  padding: 1.5rem;
  color: #fdfde8;
  background-color: #0d3b66;
`;

const TechTags = styled(Grid).attrs({
  component: 'section',
})`
  background-color: #00916e;
  color: #fdfde8;
  padding: 1.5rem;
`;

const shortcodes = { Typography, Grid };

const PortfolioPage: React.FC<Props> = ({ data: { mdx } }) => {
  const { frontmatter } = mdx;

  return (
    <ThemeProvider theme={theme}>
      <Navigation />
      <CollapsedNavigation />
      <Layout>
        <SEO title={frontmatter.title} />
        <Grid container justify={'center'}>
          <PageHeader container justify={'space-between'} alignItems={'center'}>
            <Grid item>
              <Typography variant={'h1'}>{frontmatter.title}</Typography>
            </Grid>
            <Grid item>
              <Grid container spacing={2}>
                <Grid item>
                  <Link
                    href={frontmatter.websiteURL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button color={'primary'} endIcon={<TiArrowForward />}>
                      Visit
                    </Button>
                  </Link>
                </Grid>
                <Grid item>
                  <Link
                    href={frontmatter.githubURL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button color={'primary'} endIcon={<FaGithub />}>
                      Github
                    </Button>
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </PageHeader>

          <DescriptionSection
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            container
            direction={'column'}
            justify={'center'}
            alignItems={'flex-start'}
          >
            <MDXProvider components={shortcodes}>
              <Description description={mdx.body} />
            </MDXProvider>
          </DescriptionSection>

          <CarouselRoot item xs={12} sm={12} md={8} lg={8} xl={8}>
            <Typography variant={'h2'} gutterBottom>
              Gallery
            </Typography>
            <Carousel slides={frontmatter.carouselPhotos} />
          </CarouselRoot>

          <TechTags item xs={12} sm={12} md={4} lg={4} xl={4}>
            <Tags tags={frontmatter.technologies} />
          </TechTags>
        </Grid>
      </Layout>
    </ThemeProvider>
  );
};

PortfolioPage.propTypes = {
  data: PropTypes.shape({
    mdx: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        websiteURL: PropTypes.string.isRequired,
        githubURL: PropTypes.string.isRequired,
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
        technologies: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
      }).isRequired,
      body: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default PortfolioPage;

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { path: { eq: $slug } }) {
      frontmatter {
        title
        githubURL
        websiteURL
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
        technologies
      }
      body
    }
  }
`;
