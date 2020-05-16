import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import SortMenu from './SortMenu';

// interfaces
import ProjectCard, { Project } from './ProjectCard';

// Material-UI
import Grid from '@material-ui/core/Grid';

// helpers
import { sortByDateASC, sortByDateDESC } from './helpers/sortProjectsByDate';

const ProjectCardsWrapper = styled.div`
  @media screen and (min-width: 1280px) {
    padding: ${(props): string =>
      `calc(${props.theme.spacing(4)} + 1px) ${props.theme.spacing(4)}`};
  }
`;

const ProjectCards = styled(Grid)`
  @media screen and (max-width: 1279px) {
    &:last-child {
      margin-bottom: ${(props): string => props.theme.spacing(4)};
    }
  }
`;

export interface Frontmatter {
  frontmatter: Project;
}

interface Props {
  projects: Project[];
  order: string;
}

const Projects: React.FC<Props> = ({ projects, order }) => (
  <Grid item xs={12} sm={12} md={12} lg={9}>
    <SortMenu projectCount={projects.length} />
    <ProjectCardsWrapper>
      <ProjectCards container spacing={4}>
        {order == 'DESC'
          ? projects
              .sort((a, b) => sortByDateDESC(a.date, b.date))
              .map((card) => <ProjectCard key={card.title} content={card} />)
          : projects
              .sort((a, b) => sortByDateASC(a.date, b.date))
              .map((card) => <ProjectCard key={card.title} content={card} />)}
      </ProjectCards>
    </ProjectCardsWrapper>
  </Grid>
);

Projects.propTypes = {
  projects: PropTypes.array.isRequired,
  order: PropTypes.string.isRequired,
};

export default Projects;
