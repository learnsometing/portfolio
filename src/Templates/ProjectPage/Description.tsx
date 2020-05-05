import React from 'react';
import PropTypes from 'prop-types';
import { MDXRenderer } from 'gatsby-plugin-mdx';

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
    <MDXRenderer>{description}</MDXRenderer>
  </>
);

Description.propTypes = {
  description: PropTypes.string.isRequired,
};

export default Description;
