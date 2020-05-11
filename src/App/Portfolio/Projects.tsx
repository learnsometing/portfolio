import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// interfaces
import ProjectCard, { Project } from './ProjectCard';

// Material-UI
import Grid from '@material-ui/core/Grid';

// helpers
import { sortByDateASC, sortByDateDESC } from './helpers/sortProjectsByDate';

const ProjectCards = styled(Grid)`
  &:last-child {
    margin-bottom: 80px;
  }
`;

export interface Frontmatter {
  frontmatter: Project;
}

interface Props {
  projects: Project[];
  order: string;
}

const Projects: React.FC<Props> = ({ projects, order }) => {
  return (
    <ProjectCards container spacing={4}>
      {order == 'DESC'
        ? projects
            .sort((a, b) => sortByDateDESC(a.date, b.date))
            .map((card) => <ProjectCard key={card.title} content={card} />)
        : projects
            .sort((a, b) => sortByDateASC(a.date, b.date))
            .map((card) => <ProjectCard key={card.title} content={card} />)}
    </ProjectCards>
  );
};

Projects.propTypes = {
  projects: PropTypes.array.isRequired,
  order: PropTypes.string.isRequired,
};

export default Projects;
