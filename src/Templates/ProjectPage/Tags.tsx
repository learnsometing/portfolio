import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Grid from '@material-ui/core/Grid';

import { SectionHeading } from './ProjectPage';
import Tag from './Tag';

import { useFadeInAnimation } from '../../App/shared/animationHooks';

interface Props {
  tags: string[];
}

const TagContainer = styled(Grid)`
  padding-bottom: ${(props): string => props.theme.spacing(4)};
  @media screen and (min-width: 1280px) {
    padding: 0;
    justify-content: flex-start;
  }
`;

const Tags: React.FC<Props> = ({ tags }) => (
  <>
    <Grid item>
      <SectionHeading className="tags scroll-in">Tags</SectionHeading>
    </Grid>
    <TagContainer
      item
      container
      spacing={2}
      justify={'center'}
      ref={useFadeInAnimation(0.4, '.tags', false)}
    >
      {tags.map((tag) => (
        <Grid key={tag} item className="tags fade-in">
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
