import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import { StyledGatsbyLink } from './Navigation';

// Redux
import { connect } from 'react-redux';
import { clearFilters, applyFilters } from '../../state/portfolio/actions';

interface Props {
  text: string;
  highlightColor: string;
  textColor: string;
  applyFilters: (filters: string[]) => void;
  clearFilters: () => void;
}

interface TagLink {
  color: string;
}

const TagLink = styled(StyledGatsbyLink)<TagLink>`
  color: ${(props): string => props.color || '#000'};

  &:hover,
  &:active {
    color: ${(props): string => props.color || '#000'};
  }
`;

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
  padding: 0.25rem 0.5rem;
`;

const Tag: React.FC<Props> = ({
  text,
  highlightColor,
  textColor,
  applyFilters,
  clearFilters,
}) => (
  <TagLink
    to="/#portfolio"
    color={textColor}
    onClick={(): void => {
      clearFilters();
      applyFilters([text]);
    }}
  >
    <Highlight highlightColor={highlightColor} className={'highlight'}>
      <TagText variant={'body1'}>{text}</TagText>
    </Highlight>
  </TagLink>
);

Tag.propTypes = {
  text: PropTypes.string.isRequired,
  highlightColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  applyFilters: PropTypes.func.isRequired,
  clearFilters: PropTypes.func.isRequired,
};

export default connect(null, { clearFilters, applyFilters })(Tag);
