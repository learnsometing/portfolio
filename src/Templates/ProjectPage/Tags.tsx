import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Tag from '../../App/shared/Tag';

interface Props {
  tags: string[];
}

const Tags: React.FC<Props> = ({ tags }) => (
  <>
    <Grid item>
      <Typography variant={'h2'} gutterBottom>
        Tags
      </Typography>
    </Grid>
    <Grid item container spacing={3}>
      {tags.map((tag) => (
        <Grid key={tag} item>
          <Tag text={tag} highlightColor="#0d3b66" textColor={'#fdfde8'} />
        </Grid>
      ))}
    </Grid>
  </>
);

Tags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default Tags;
