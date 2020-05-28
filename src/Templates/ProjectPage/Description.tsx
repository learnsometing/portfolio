import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { useInView } from 'react-intersection-observer';

// Material-UI
import Grid from '@material-ui/core/Grid';

// Custom Components
import { SectionHeading } from './ProjectPage';
import Section from '../../App/shared/Section';

// Animations
import { slideUp } from '../../App/shared/animations';

interface Props {
  description: string;
}

const Description: React.FC<Props> = ({ description }) => {
  const [descriptionRef, descriptionInView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (descriptionInView) {
      slideUp('.description');
    }
  }, [descriptionInView]);

  return (
    <Section ref={descriptionRef}>
      {descriptionInView ? (
        <>
          <Grid item>
            <SectionHeading className="description scroll-in">
              Description
            </SectionHeading>
          </Grid>
          <MDXRenderer>{description}</MDXRenderer>
        </>
      ) : (
        <></>
      )}
    </Section>
  );
};

Description.propTypes = {
  description: PropTypes.string.isRequired,
};

export default Description;
