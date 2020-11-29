import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { MDXRenderer } from 'gatsby-plugin-mdx';

// Material-UI
import Grid from '@material-ui/core/Grid';

// Custom Components
import Section from '../../App/shared/Section';

// Animations
import { fadeIn } from '../../App/shared/animations';
import { Typography } from '@material-ui/core';

interface Props {
  description: string;
}

const Description: React.FC<Props> = ({ description }) => {
  useEffect(() => {
    fadeIn('.description', 0.1, 0.1);
  }, []);

  return (
    <Section>
      <Grid item>
        <Typography variant="h2" gutterBottom className="description">
          Description
        </Typography>
      </Grid>
      <MDXRenderer>{description}</MDXRenderer>
    </Section>
  );
};

Description.propTypes = {
  description: PropTypes.string.isRequired,
};

export default Description;
