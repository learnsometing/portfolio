import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';

// Material-UI Imports
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';

// Icons
import { TiArrowForward } from 'react-icons/ti';
import { FaGithub } from 'react-icons/fa';

// Components
import Layout from '../App/Layout/Layout';
import SEO from '../App/SEO/SEO';
import FluidTypography from '../shared/FluidTypography';
import Navigation from '../shared/Navigation';
import CollapsedNavigation from '../shared/CollapsedNavigation';
import Carousel from '../App/Carousel/Carousel';

// Interfaces
import ChildImageSharp from '../shared/ChildImageSharp';

interface Image {
  src: ChildImageSharp;
  altText: string;
  caption?: string;
}

interface Data {
  portfolioJson: {
    title: string;
    websiteURL: string;
    githubURL: string;
    carouselPhotos: Image[];
    // shortDescription: string;
    //   fullDescription: string;
    //   techSpecs: string[];
  };
}

interface Props {
  data: Data;
}

const Content = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: auto;
`;

const PageHeading = styled(FluidTypography).attrs(() => ({
  minFontSize: '24px',
  maxFontSize: '48px',
  minViewportWidth: '320px',
  maxViewportWidth: '1350px',
}))`
  grid-column: 2/8;
  text-align: center;
  margin-top: 0.5rem;
`;

const PortfolioLinks = styled(Grid).attrs({
  component: 'nav',
})`
  grid-column: 3/7;
  margin: 0.5rem 0;
`;

const CarouselWrapper = styled(Grid)`
  grid-row: 3/4;
  grid-column: 1/9;
`;

const PortfolioPage: React.FC<Props> = ({ data }) => {
  const project = data.portfolioJson;

  return (
    <Layout>
      <SEO title={project.title} />
      <Navigation />
      <CollapsedNavigation />
      <Content>
        <PageHeading
          as="h1"
          minFontSize={'24px'}
          maxFontSize={'32px'}
          minViewportWidth={'320px'}
          maxViewportWidth={'1920px'}
        >
          {project.title}
        </PageHeading>
        <PortfolioLinks container justify={'center'} spacing={2}>
          <Grid item>
            <Link
              href={project.websiteURL}
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
              href={project.githubURL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button color={'primary'} endIcon={<FaGithub />}>
                Github
              </Button>
            </Link>
          </Grid>
        </PortfolioLinks>
        <CarouselWrapper container justify={'center'}>
          <Carousel slides={project.carouselPhotos} />
        </CarouselWrapper>
      </Content>
    </Layout>
  );
};

PortfolioPage.propTypes = {
  data: PropTypes.shape({
    portfolioJson: PropTypes.shape({
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
      // shortDescription: PropTypes.string.isRequired,
      //     fullDescription: PropTypes.string.isRequired,
      //     techSpecs: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    }).isRequired,
  }).isRequired,
};

export default PortfolioPage;

export const query = graphql`
  query($slug: String!) {
    portfolioJson(fields: { slug: { eq: $slug } }) {
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
      shortDescription
      fullDescription
      techSpecs
    }
  }
`;
