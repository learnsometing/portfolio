import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

interface Props {
  technologies: string[];
}

const Technologies: React.FC<Props> = ({ technologies }) => (
  <>
    <Grid item>
      <Typography variant={'h3'} component={'h2'} gutterBottom align={'center'}>
        Technologies
      </Typography>
    </Grid>
    <Grid item container spacing={1}>
      {technologies.map((tag) => (
        <Grid key={tag} item>
          <Typography variant={'body1'} component={'span'}>
            {tag}
          </Typography>
        </Grid>
      ))}
    </Grid>
  </>
);

Technologies.propTypes = {
  technologies: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default Technologies;
