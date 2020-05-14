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

const ProjectCards = styled(Grid)`
  @media screen and (max-width: 1279px) {
    &:last-child {
      margin-bottom: 1rem;
    }
  }

  @media screen and (min-width: 1280px) {
    padding: 1rem 0;
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
    <ProjectCards container spacing={3}>
      {order == 'DESC'
        ? projects
            .sort((a, b) => sortByDateDESC(a.date, b.date))
            .map((card) => <ProjectCard key={card.title} content={card} />)
        : projects
            .sort((a, b) => sortByDateASC(a.date, b.date))
            .map((card) => <ProjectCard key={card.title} content={card} />)}
    </ProjectCards>
  </Grid>
);

Projects.propTypes = {
  projects: PropTypes.array.isRequired,
  order: PropTypes.string.isRequired,
};

export default Projects;
