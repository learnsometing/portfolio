import React from 'react';
import PropTypes from 'prop-types';
import { MDXRenderer } from 'gatsby-plugin-mdx';

// Material-UI
import Grid from '@material-ui/core/Grid';

import { SectionHeading } from './ProjectPage';

interface Props {
  description: string;
}

const Description: React.FC<Props> = ({ description }) => (
  <>
    <Grid item>
      <SectionHeading className="description scroll-in">
        Description
      </SectionHeading>
    </Grid>
    <MDXRenderer>{description}</MDXRenderer>
  </>
);

Description.propTypes = {
  description: PropTypes.string.isRequired,
};

export default Description;
