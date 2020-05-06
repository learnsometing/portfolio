import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

interface Props {
  text: string;
  color: string;
}

interface Highlight {
  highlightColor: string;
}

const Highlight = styled.span<Highlight>`
  display: inline-block;
  position: relative;
  height: 100%;
  background-color: transparent;
  &::after {
    content: '';
    position: absolute;
    height: 0.125rem;
    width: 100%;
    border: 0.125rem solid ${(props): string => props.highlightColor || 'black'};
    border-radius: 0.125rem;
    bottom: 0;
    left: 0;
    background-color: ${(props): string => props.highlightColor || 'black'};
  }

  &:hover {
    &::after {
      animation: highlight 0.25s ease-in-out 1 forwards;
    }

    @keyframes highlight {
      to {
        height: 100%;
      }
    }
  }
`;

const TagText = styled(Typography).attrs({
  component: 'span',
})`
  display: inline-block;
  position: relative;
  z-index: 1;
  padding: 0.25rem;
  padding-bottom: 0;
`;

const Tag: React.FC<Props> = ({ text, color }) => (
  <Link to="/">
    <Highlight highlightColor={color} className={'highlight'}>
      <TagText variant={'body1'}>{text}</TagText>
    </Highlight>
  </Link>
);

Tag.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Tag;
