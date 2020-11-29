import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';

// Material-UI
import {
  BottomNavigation,
  Box,
  Container,
  Grid,
  Paper,
} from '@material-ui/core';

// Components
import AppliedFilters from './AppliedFilters';
import FilterAction from './FilterAction';
import FiltersSidebar from './FiltersSidebar';
import Projects from './Projects';
import { Project } from './ProjectCard';
import MenuAction from '../shared/BottomNavigation/MenuAction';
import Section from '../shared/Section';
import SortMenu from './SortMenu';

// Redux
import { connect } from 'react-redux';
import {
  getAppliedFilters,
  getSortingOrder,
} from '../../state/portfolio/selectors';
import { RootState } from '../../state/createStore';
import { TagMap } from '../../helpers/getTagCounts';

import { slideUp } from '../shared/animations';

const MobileWrapper = styled.div`
  @media only screen and (min-width: 1280px) {
    display: none;
  }
  width: 100%;
`;

const Navbar = styled(Paper).attrs({
  elevation: 2,
  square: true,
})`
  position: sticky;
  bottom: 0;
  right: 0;
  height: 80px;
  width: 100%;
  z-index: 2;
  background-color: ${(props): string => props.theme.metallicSeaweed};
  @media only screen and (min-width: 1280px) {
    display: none;
  }
`;

const PortfolioSection = styled(Section)`
  min-height: 100vh;
`;

interface Props {
  allProjects: Project[];
  allProjectTags: string[][];
  tagCounts: TagMap;
  appliedFilters: string[];
  order: string;
}

const Portfolio: React.FC<Props> = ({
  allProjects,
  allProjectTags,
  tagCounts,
  appliedFilters,
  order,
}) => {
  const [displayedProjects, setDisplayedProjectCards] = useState(allProjects);

  const [portfolioRef, portfolioInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const hasAnimated = useRef(false);

  useEffect(() => {
    const filteredProjects = allProjects.filter((project) =>
      appliedFilters.every((val) => project.tags.includes(val))
    );
    setDisplayedProjectCards(filteredProjects);

    if (appliedFilters.length && !hasAnimated.current) {
      hasAnimated.current = true;
    }
  }, [appliedFilters]);

  useEffect(() => {
    if (portfolioInView) {
      slideUp('.projects', 0.2);
    }
  }, [portfolioInView]);

  return (
    <PortfolioSection id="portfolio" ref={portfolioRef}>
      <Container maxWidth={'lg'}>
        <Grid container>
          <MobileWrapper>
            <AppliedFilters />
          </MobileWrapper>

          <FiltersSidebar
            allProjectTags={allProjectTags}
            tagCounts={tagCounts}
          />
          <Grid item xs={12} sm={12} md={12} lg={9}>
            <SortMenu projectCount={displayedProjects.length} />
            {portfolioInView ? (
              <>
                <Projects
                  hasAnimated={hasAnimated.current}
                  projects={displayedProjects}
                  order={order}
                />
              </>
            ) : (
              <Box height="100vh" />
            )}
          </Grid>
        </Grid>
      </Container>
      <BottomNavigation component={Navbar} showLabels>
        <FilterAction allProjectTags={allProjectTags} tagCounts={tagCounts} />
        <MenuAction />
      </BottomNavigation>
    </PortfolioSection>
  );
};

Portfolio.propTypes = {
  allProjects: PropTypes.array.isRequired,
  allProjectTags: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
  ).isRequired,
  tagCounts: PropTypes.objectOf(PropTypes.number.isRequired).isRequired,
  appliedFilters: PropTypes.array.isRequired,
  order: PropTypes.string.isRequired,
};

export default connect(
  (state: RootState) => ({
    appliedFilters: getAppliedFilters(state),
    order: getSortingOrder(state),
  }),
  null
)(Portfolio);
