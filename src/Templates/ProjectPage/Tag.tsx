import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import Button from '@material-ui/core/Button';

// Redux
import { connect } from 'react-redux';
import { clearFilters, applyFilters } from '../../state/portfolio/actions';

interface Props {
  text: string;
  applyFilters: (filters: string[]) => void;
  clearFilters: () => void;
}

const Tag: React.FC<Props> = ({ text, applyFilters, clearFilters }) => (
  <Button
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
  </Button>
);

Tag.propTypes = {
  text: PropTypes.string.isRequired,
  applyFilters: PropTypes.func.isRequired,
  clearFilters: PropTypes.func.isRequired,
};

export default connect(null, { clearFilters, applyFilters })(Tag);
