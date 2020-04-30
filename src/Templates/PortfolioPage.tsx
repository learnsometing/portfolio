import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import { Carousel, Nav, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { TiArrowForward } from 'react-icons/ti';
import { FaGithub } from 'react-icons/fa';
import Layout from '../App/Layout/Layout';
import SEO from '../App/SEO/SEO';
import FluidTypography from '../shared/FluidTypography';
import Navigation from '../shared/Navigation';
import CollapsedNavigation from '../shared/CollapsedNavigation';

interface ChildImageSharp {
  childImageSharp: {
    fluid: {
      base64: string;
      aspectRatio: number;
      src: string;
      srcSet: string;
      sizes: string;
    };
  };
}

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

const Grid = styled.div`
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

const PortfolioLinks = styled(Nav)`
  grid-column: 3/7;
`;

const NavLinkText = styled.span`
  margin: 0 5px;
`;

const CarouselWrapper = styled.div`
  grid-row: 3/4;
  grid-column: 1/9;
  display: flex;
  justify-content: center;
`;

const CustomCarousel = styled(Carousel)`
  width: 90%;

  /* indicators */
  ol {
    display: none;
  }

  /* queries to keep the carousel on screen as aspect ratio increases */
  @media screen and (min-width: 1350px) {
    width: 100%;
  }
  @media screen and (min-aspect-ratio: 17/9) and (max-aspect-ratio: 18/9) {
    max-width: 80%;
  }
  @media screen and (min-aspect-ratio: 18/9) and (max-aspect-ratio: 19/9) {
    max-width: 75%;
  }
  @media screen and (min-aspect-ratio: 19/9) and (max-aspect-ratio: 20/9) {
    max-width: 72.5%;
  }
  @media screen and (min-aspect-ratio: 20/9) and (max-aspect-ratio: 21/9) {
    max-width: 70%;
  }
  @media screen and (min-aspect-ratio: 21/9) and (max-aspect-ratio: 22/9) {
    max-width: 67.5%;
  }

  @media only screen and (min-width: 760px) {
    ol {
      display: flex;
    }
  }
`;

const Caption = styled(FluidTypography)`
  display: none;

  @media only screen and (min-width: 760px) {
    display: block;
  }
`;

const CaptionOverlay = styled.div`
  position: absolute;
  top: 0;
  display: block;
  height: 100%;
  width: 100%;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 15%,
    rgba(0, 0, 0, 0.3) 100%
  );
  border: 1px solid #bbc7ce;
`;

const PortfolioPage: React.FC<Props> = ({ data }) => {
  const project = data.portfolioJson;
  const disabled = project.carouselPhotos.length > 1;

  return (
    <Layout>
      <SEO title={project.title} />
      <Navigation />
      <CollapsedNavigation />
      <Grid>
        <PageHeading
          as="h1"
          minFontSize={'24px'}
          maxFontSize={'32px'}
          minViewportWidth={'320px'}
          maxViewportWidth={'1920px'}
        >
          {project.title}
        </PageHeading>
        <PortfolioLinks className={'justify-content-center'}>
          <Nav.Item>
            <Nav.Link
              href={project.websiteURL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Container className="container">
                <Row className={'justify-content-center align-items-center'}>
                  <NavLinkText>Visit</NavLinkText>
                  <TiArrowForward />
                </Row>
              </Container>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              href={project.githubURL}
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              <NavLinkText>Github Repo</NavLinkText>
              <FaGithub />
            </Nav.Link>
          </Nav.Item>
        </PortfolioLinks>
        <CarouselWrapper>
          <CustomCarousel controls={disabled}>
            {project.carouselPhotos.map((photoNode) => (
              <Carousel.Item key={photoNode.altText}>
                <Img fluid={photoNode.src.childImageSharp.fluid} />
                <CaptionOverlay />
                <Carousel.Caption>
                  <Caption
                    minFontSize={'16px'}
                    maxFontSize={'24px'}
                    minViewportWidth={'320px'}
                    maxViewportWidth={'1920px'}
                  >
                    {photoNode.caption}
                  </Caption>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </CustomCarousel>
        </CarouselWrapper>
      </Grid>
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
