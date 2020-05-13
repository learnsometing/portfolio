import React, { useState, useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Material-UI
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { ThemeProvider } from '@material-ui/core';
import theme from '../../shared/MUITheme';

import Navigation from '../../shared/Navigation';
import BottomNavigation from '../../shared/BottomNavigation/BottomNavigation';
import Projects, { Frontmatter } from './Projects';
import AppliedFilters from './AppliedFilters';
import FiltersSidebar from './FiltersSidebar';

import { connect } from 'react-redux';
import {
  addFilter,
  removeFilter,
  clearFilters,
} from '../../state/portfolio/actions';
import {
  getAppliedFilters,
  getSortingOrder,
} from '../../state/portfolio/selectors';
import { RootState } from '../../state/createStore';

const PortfolioSection = styled(Container).attrs({
  component: 'section',
})`
  padding-top: 1rem;

  @media screen and (min-width: 1280px) {
    padding-top: 4rem;
  }
`;

const MobileWrapper = styled.div`
  @media only screen and (min-width: 1280px) {
    display: none;
  }
`;

interface PurePortfolioProps {
  data: {
    nodes: Frontmatter[];
  };
  addFilter: (filter: string) => void;
  removeFilter: (filter: string) => void;
  clearFilters: () => void;
  appliedFilters: string[];
  order: string;
}

const PurePortfolio: React.FC<PurePortfolioProps> = ({
  data: { nodes },
  addFilter,
  removeFilter,
  clearFilters,
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
      <PortfolioSection maxWidth={'lg'} id="portfolio">
        {/* */}
        <MobileWrapper>
          <AppliedFilters
            appliedFilters={appliedFilters}
            removeFilter={removeFilter}
            clearFilters={clearFilters}
          />
        </MobileWrapper>

        {/* Projects */}
        <Grid container justify={'center'}>
          <FiltersSidebar
            addFilter={addFilter}
            allProjectTags={allProjectTags}
            appliedFilters={appliedFilters}
            removeFilter={removeFilter}
            clearFilters={clearFilters}
          />
          <Projects projects={displayedProjects} order={order} />
        </Grid>
        <BottomNavigation allProjectTags={allProjectTags} />
      </PortfolioSection>
    </ThemeProvider>
  );
};

PurePortfolio.propTypes = {
  data: PropTypes.shape({
    nodes: PropTypes.array.isRequired,
  }).isRequired,
  addFilter: PropTypes.func.isRequired,
  removeFilter: PropTypes.func.isRequired,
  clearFilters: PropTypes.func.isRequired,
  appliedFilters: PropTypes.array.isRequired,
  order: PropTypes.string.isRequired,
};

interface PortfolioProps {
  addFilter: (filter: string) => void;
  removeFilter: (filter: string) => void;
  clearFilters: () => void;
  appliedFilters: string[];
  order: string;
}

const Portfolio: React.FC<PortfolioProps> = ({
  addFilter,
  removeFilter,
  clearFilters,
  appliedFilters,
  order,
}) => {
  const { allProjects } = useStaticQuery(graphql`
    query {
      allProjects: allMdx(
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
  `);

  return (
    <PurePortfolio
      data={allProjects}
      addFilter={addFilter}
      removeFilter={removeFilter}
      clearFilters={clearFilters}
      appliedFilters={appliedFilters}
      order={order}
    />
  );
};

Portfolio.propTypes = {
  addFilter: PropTypes.func.isRequired,
  removeFilter: PropTypes.func.isRequired,
  clearFilters: PropTypes.func.isRequired,
  appliedFilters: PropTypes.array.isRequired,
  order: PropTypes.string.isRequired,
};

export default connect(
  (state: RootState) => ({
    appliedFilters: getAppliedFilters(state),
    order: getSortingOrder(state),
  }),
  { addFilter, removeFilter, clearFilters }
)(Portfolio);
