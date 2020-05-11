import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Material-UI
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { ThemeProvider } from '@material-ui/core';
import theme from '../shared/MUITheme';

import Layout from '../App/Layout/Layout';
import Navigation from '../shared/Navigation';
import BottomNavigation from '../shared/BottomNavigation/BottomNavigation';
import { MdClose } from 'react-icons/md';
import SortMenu from '../App/Portfolio/SortMenu';
import Projects, { Frontmatter } from '../App/Portfolio/Projects';

import { connect } from 'react-redux';
import { removeFilter } from '../state/portfolio/actions';
import {
  getAppliedFilters,
  getSortingOrder,
} from '../state/portfolio/selectors';
import { RootState } from '../state/createStore';

const SectionHeading = styled(Typography)`
  margin-top: 0.35em;
`;

const Filters = styled(Grid)`
  padding: 1rem 0;
`;

interface PortfolioProps {
  data: {
    allProjectCards: {
      nodes: Frontmatter[];
    };
  };
  removeFilter: (filter: string) => void;
  appliedFilters: string[];
  order: string;
}

export const Portfolio: React.FC<PortfolioProps> = ({
  data: {
    allProjectCards: { nodes },
  },
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

          {/* Mobile Filters List */}
          <SortMenu />
          <Typography variant={'h4'} component={'h2'} gutterBottom>
            {projectCount
              ? `${projectCount} 
                  ${projectCount > 1 ? 'projects' : 'project'}
                `
              : null}
          </Typography>
          {appliedFilters.length ? (
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
          ) : null}

          <Projects projects={displayedProjects} order={order} />
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
  { removeFilter }
)(Portfolio);
