import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Grid from '@material-ui/core/Grid';

import { SectionHeading } from './ProjectPage';
import Tag from './Tag';

interface Props {
  tags: string[];
}

const TagContainer = styled(Grid)`
  @media screen and (min-width: 960px) {
    justify-content: flex-start;
  }
`;

const Tags: React.FC<Props> = ({ tags }) => (
  <>
    <Grid item>
      <SectionHeading>Tags</SectionHeading>
    </Grid>
    <TagContainer item container spacing={2} justify={'center'}>
      {tags.map((tag) => (
        <Grid key={tag} item>
          <Tag text={tag} />
        </Grid>
      ))}
    </TagContainer>
  </>
);

Tags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default Tags;
