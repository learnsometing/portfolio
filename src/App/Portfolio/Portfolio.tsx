import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Material-UI
import BottomNavigation from '@material-ui/core/BottomNavigation';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { ThemeProvider } from '@material-ui/core';
import theme from '../shared/MUITheme';

// Components
import MenuAction from '../shared/BottomNavigation/MenuAction';
import FilterAction from './FilterAction';
import Projects from './Projects';
import { Project } from './ProjectCard';
import AppliedFilters from './AppliedFilters';
import FiltersSidebar from './FiltersSidebar';
import Section from '../shared/Section';

// Redux
import { connect } from 'react-redux';
import {
  getAppliedFilters,
  getSortingOrder,
} from '../../state/portfolio/selectors';
import { RootState } from '../../state/createStore';
import { TagMap } from '../../helpers/getTagCounts';

const MobileWrapper = styled.div`
  @media only screen and (min-width: 1280px) {
    display: none;
  }
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
  background-color: ${(props): string => props.theme.bgLightened};
  @media only screen and (min-width: 1280px) {
    display: none;
  }
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
  useEffect(() => {
    const filteredProjects = allProjects.filter((project) =>
      appliedFilters.every((val) => project.tags.includes(val))
    );

    setDisplayedProjectCards(filteredProjects);
  }, [appliedFilters]);

  return (
    <ThemeProvider theme={theme}>
      <Section id="portfolio">
        <Container maxWidth={'lg'}>
          {/* */}
          <MobileWrapper>
            <AppliedFilters />
          </MobileWrapper>

          {/* Projects */}
          <Grid container justify={'center'}>
            <FiltersSidebar
              allProjectTags={allProjectTags}
              tagCounts={tagCounts}
            />
            <Projects projects={displayedProjects} order={order} />
          </Grid>
        </Container>
        <BottomNavigation component={Navbar} showLabels>
          <FilterAction allProjectTags={allProjectTags} tagCounts={tagCounts} />
          <MenuAction />
        </BottomNavigation>
      </Section>
    </ThemeProvider>
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
