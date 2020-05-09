import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { ThemeProvider } from '@material-ui/core';
import theme from '../shared/MUITheme';

import Layout from '../App/Layout/Layout';
import PortfolioCard, {
  ProjectCardContent,
} from '../App/ProjectCard/ProjectCard';
import Navigation from '../shared/Navigation';
import BottomNavigation from '../shared/BottomNavigation/BottomNavigation';

interface TaggedProjectCard extends ProjectCardContent {
  tags: string[];
}

interface Frontmatter {
  frontmatter: TaggedProjectCard;
}

interface PortfolioProps {
  data: {
    allMdx: {
      nodes: Frontmatter[];
    };
  };
}

export const Portfolio: React.FC<PortfolioProps> = ({ data: { allMdx } }) => {
  const { nodes } = allMdx;

  // separate the content of each card from its tech tags
  const projectCards = nodes.map(
    ({ frontmatter: { title, path, cardText, cardPhoto } }) => ({
      title,
      path,
      cardText,
      cardPhoto,
    })
  );

  // create an array of Sets of filters from the technology tags
  const filters = nodes.map(({ frontmatter }) => frontmatter.tags);
  return (
    <ThemeProvider theme={theme}>
      <Navigation />
      <BottomNavigation filters={filters} />
      <Layout>
        <Container maxWidth={'lg'}>
          <Typography variant={'h1'} gutterBottom>
            Portfolio
          </Typography>
          <Grid container spacing={4}>
            {projectCards.map((card) => (
              <PortfolioCard key={card.title} content={card} />
            ))}
          </Grid>
        </Container>
      </Layout>
    </ThemeProvider>
  );
};

Portfolio.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      nodes: PropTypes.array.isRequired,
    }).isRequired,
  }).isRequired,
};

export const portfolioCards = graphql`
  query {
    allMdx(filter: { fileAbsolutePath: { regex: "/projects/" } }) {
      nodes {
        frontmatter {
          title
          path
          cardPhoto {
            altText
            src {
              childImageSharp {
                fluid(maxWidth: 1920) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          cardText
          tags
        }
      }
    }
  }
`;

export default Portfolio;
