import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Material-UI
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { ThemeProvider } from '@material-ui/core';
import theme from '../shared/MUITheme';

import Layout from '../App/Layout/Layout';
import Navigation from '../shared/Navigation';
import BottomNavigation from '../shared/BottomNavigation/BottomNavigation';
import Projects, { Frontmatter } from '../App/Portfolio/Projects';
import AppliedFilters from '../App/Portfolio/AppliedFilters';
import FiltersSidebar from '../App/Portfolio/FiltersSidebar';

import { connect } from 'react-redux';
import { addFilter, removeFilter } from '../state/portfolio/actions';
import {
  getAppliedFilters,
  getSortingOrder,
} from '../state/portfolio/selectors';
import { RootState } from '../state/createStore';

const SectionHeading = styled(Typography)`
  margin-top: 0.35em;
`;

const MobileWrapper = styled.div`
  @media only screen and (min-width: 1280px) {
    display: none;
  }
`;

interface PortfolioProps {
  data: {
    allProjectCards: {
      nodes: Frontmatter[];
    };
  };
  addFilter: (filter: string) => void;
  removeFilter: (filter: string) => void;
  appliedFilters: string[];
  order: string;
}

export const Portfolio: React.FC<PortfolioProps> = ({
  data: {
    allProjectCards: { nodes },
  },
  addFilter,
  removeFilter,
  appliedFilters,
  order,
}) => {
  // Map out the frontmatter properties
  const projectCards = nodes.map(
    ({ frontmatter: { title, path, cardText, cardPhoto, tags, date } }) => ({
      title,
      path,
      cardText,
      cardPhoto,
      tags,
      date,
    })
  );

  const [displayedProjects, setDisplayedProjectCards] = useState(projectCards);
  const projectCount = displayedProjects.length;

  useEffect(() => {
    const filteredProjects = projectCards.filter((project) =>
      appliedFilters.every((val) => project.tags.includes(val))
    );

    setDisplayedProjectCards(filteredProjects);
  }, [appliedFilters]);

  // Count the number of projects associated with each tag
  const allProjectTags = nodes.map(({ frontmatter }) => frontmatter.tags);

  return (
    <ThemeProvider theme={theme}>
      <Navigation />
      <Layout>
        <Container maxWidth={'lg'} component={'section'}>
          <SectionHeading variant={'h1'} gutterBottom align={'center'}>
            Portfolio
          </SectionHeading>

          {/* */}
          <MobileWrapper>
            <AppliedFilters
              projectCount={projectCount}
              appliedFilters={appliedFilters}
              removeFilter={removeFilter}
            />
          </MobileWrapper>

          {/* Projects */}
          <Grid container justify={'center'}>
            <FiltersSidebar
              addFilter={addFilter}
              allProjectTags={allProjectTags}
              appliedFilters={appliedFilters}
              projectCount={projectCount}
              removeFilter={removeFilter}
            />
            <Projects projects={displayedProjects} order={order} />
          </Grid>
        </Container>
        <BottomNavigation allProjectTags={allProjectTags} />
      </Layout>
    </ThemeProvider>
  );
};

Portfolio.propTypes = {
  data: PropTypes.shape({
    allProjectCards: PropTypes.shape({
      nodes: PropTypes.array.isRequired,
    }).isRequired,
  }).isRequired,
  addFilter: PropTypes.func.isRequired,
  removeFilter: PropTypes.func.isRequired,
  appliedFilters: PropTypes.array.isRequired,
  order: PropTypes.string.isRequired,
};

export const portfolioCards = graphql`
  query {
    allProjectCards: allMdx(
      filter: { fileAbsolutePath: { regex: "/projects/" } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
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
          date
        }
      }
    }
  }
`;

export default connect(
  (state: RootState) => ({
    appliedFilters: getAppliedFilters(state),
    order: getSortingOrder(state),
  }),
  { addFilter, removeFilter }
)(Portfolio);
