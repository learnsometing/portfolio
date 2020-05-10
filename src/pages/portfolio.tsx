import React, { useEffect, useState } from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { ThemeProvider } from '@material-ui/core';
import theme from '../shared/MUITheme';

import Layout from '../App/Layout/Layout';
import PortfolioCard, {
  ProjectCardContent,
} from '../App/Portfolio/ProjectCard';
import Navigation from '../shared/Navigation';
import BottomNavigation from '../shared/BottomNavigation/BottomNavigation';
import { MdClose } from 'react-icons/md';

import { connect } from 'react-redux';
import { removeFilter } from '../state/actions';
import { getAppliedFilters } from '../state/selectors';

const PageHeader = styled(Typography)`
  margin-top: 0.35em;
`;

const Filters = styled(Grid).attrs({
  component: 'section',
})``;

const Projects = styled(Grid)`
  &:last-child {
    margin-bottom: 80px;
  }
`;

export interface TaggedProjectCard extends ProjectCardContent {
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
  appliedFilters: string[];
  removeFilter: (filter: string) => void;
}

function getProjectCardContent(
  taggedProjectCards: TaggedProjectCard[]
): ProjectCardContent[] {
  return taggedProjectCards.map(({ title, path, cardText, cardPhoto }) => ({
    title,
    path,
    cardText,
    cardPhoto,
  }));
}

export const Portfolio: React.FC<PortfolioProps> = ({
  data: { allMdx },
  appliedFilters,
  removeFilter,
}) => {
  const { nodes } = allMdx;

  // separate the content of each card from its tech tags
  const projectCards = nodes.map(
    ({ frontmatter: { title, path, cardText, cardPhoto, tags } }) => ({
      title,
      path,
      cardText,
      cardPhoto,
      tags,
    })
  );
  // create an array of Sets of filters from the technology tags
  const filters = nodes.map(({ frontmatter }) => frontmatter.tags);

  const [displayedProjectCards, setDisplayedProjectCards] = useState(
    getProjectCardContent(projectCards)
  );

  useEffect(() => {
    const filteredProjects = projectCards.filter((project) =>
      appliedFilters.every((val) => project.tags.includes(val))
    );

    setDisplayedProjectCards(getProjectCardContent(filteredProjects));
  }, [appliedFilters]);

  return (
    <ThemeProvider theme={theme}>
      <Navigation />
      <Layout>
        <Container maxWidth={'lg'}>
          <PageHeader variant={'h1'} gutterBottom align={'center'}>
            Portfolio
          </PageHeader>

          {appliedFilters.length ? (
            <>
              <Typography variant={'h2'} gutterBottom>
                Selected Filters
              </Typography>
              <Filters container spacing={2}>
                {appliedFilters.map((filter) => (
                  <Grid key={`${filter}-selected`} item>
                    <Button
                      type="button"
                      variant={'contained'}
                      color={'primary'}
                      endIcon={<MdClose />}
                      onClick={(): void => removeFilter(filter)}
                    >
                      {filter}
                    </Button>
                  </Grid>
                ))}
              </Filters>
            </>
          ) : (
            <div>
              <Typography variant={'h2'} gutterBottom>
                All projects
              </Typography>
            </div>
          )}
          <Projects container spacing={4}>
            {displayedProjectCards.map((card) => (
              <PortfolioCard key={card.title} content={card} />
            ))}
          </Projects>
        </Container>
        <BottomNavigation filters={filters} />
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
  appliedFilters: PropTypes.array.isRequired,
  removeFilter: PropTypes.func.isRequired,
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

export default connect(
  (state) => ({ appliedFilters: getAppliedFilters(state) }),
  { removeFilter }
)(Portfolio);
