import React from 'react';
import PropTypes from 'prop-types';

// Material-UI
import Typography from '@material-ui/core/Typography';

interface Props {
  description: string;
}

const Description: React.FC<Props> = ({ description }) => (
  <>
    <Typography variant={'h2'} gutterBottom>
      Description
    </Typography>
    <Typography variant={'body1'} gutterBottom>
      {description}
    </Typography>
  </>
);

Description.propTypes = {
  description: PropTypes.string.isRequired,
};

export default Description;
