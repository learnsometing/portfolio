import React from 'react';
import PropTypes from 'prop-types';
import { MDXRenderer } from 'gatsby-plugin-mdx';

// Material-UI
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

interface Props {
  description: string;
}

const Description: React.FC<Props> = ({ description }) => (
  <>
    <Grid item>
      <Typography variant={'h2'} gutterBottom>
        Description
      </Typography>
    </Grid>
    <MDXRenderer>{description}</MDXRenderer>
  </>
);

Description.propTypes = {
  description: PropTypes.string.isRequired,
};

export default Description;
