import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

// Redux
import { connect } from 'react-redux';
import { clearFilters, applyFilters } from '../../state/portfolio/actions';

interface Props {
  text: string;
  applyFilters: (filters: string[]) => void;
  clearFilters: () => void;
}

const TagButton = styled(Button)`
  color: ${(props): string => props.theme.mintCream};
`;

const Tag: React.FC<Props> = ({ text, applyFilters, clearFilters }) => (
  <TagButton
    variant={'contained'}
    color={'primary'}
    component={Link}
    to="/portfolio"
    onClick={(): void => {
      clearFilters();
      applyFilters([text]);
    }}
  >
    {text}
  </TagButton>
);

Tag.propTypes = {
  text: PropTypes.string.isRequired,
  applyFilters: PropTypes.func.isRequired,
  clearFilters: PropTypes.func.isRequired,
};

export default connect(null, { clearFilters, applyFilters })(Tag);
