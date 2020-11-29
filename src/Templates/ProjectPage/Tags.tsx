import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';

import Grid from '@material-ui/core/Grid';

import Section from '../../App/shared/Section';
import Tag from './Tag';

// Animations
import { slideUp, fadeIn } from '../../App/shared/animations';
import { Typography } from '@material-ui/core';

interface Props {
  tags: string[];
}

const TagsSection = styled(Section)`
  min-height: 220px;
  @media screen and (min-width: 1280px) {
    margin-left: ${(props): string => props.theme.spacing(6)};
  }
`;

const TagContainer = styled(Grid)`
  padding-bottom: ${(props): string => props.theme.spacing(4)};
  @media screen and (min-width: 1280px) {
    padding: 0;
    justify-content: flex-start;
  }
`;

const Tags: React.FC<Props> = ({ tags }) => {
  const [tagsRef, tagsInView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (tagsInView) {
      slideUp('.tags', 0.2);
    }
  }, [tagsInView]);

  const [tagContainerRef, tagContainerInView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const delay = 0;

  useEffect(() => {
    if (tagContainerInView) {
      fadeIn('.tag', delay);
    }
  }, [tagContainerInView]);

  return (
    <TagsSection ref={tagsRef}>
      {tagsInView ? (
        <>
          <Typography variant="h2" gutterBottom className="tags scroll-in">
            Tags
          </Typography>
          <TagContainer
            item
            container
            spacing={2}
            justify={'center'}
            ref={tagContainerRef}
          >
            {tagContainerInView ? (
              tags.map((tag) => (
                <Grid key={tag} item className="tag fade-in">
                  <Tag text={tag} />
                </Grid>
              ))
            ) : (
              <></>
            )}
          </TagContainer>
        </>
      ) : (
        <></>
      )}
    </TagsSection>
  );
};

Tags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default Tags;
