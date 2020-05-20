import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../App/Layout/Layout';
import SEO from '../App/SEO/SEO';
import Header from '../App/Header/Header';

// Material-UI
import { ThemeProvider } from '@material-ui/core';
import theme from '../App/shared/MUITheme';

import Portfolio from '../App/Portfolio/Portfolio';
import About from '../App/About/About';
import Contact from '../App/Contact/Contact';
import { Frontmatter } from '../App/Portfolio/Projects';

// Logic Helpers
import getTagCounts from '../helpers/getTagCounts';

interface Props {
  data: {
    allMdx: {
      nodes: Frontmatter[];
    };
  };
}

const IndexPage: React.FC<Props> = ({ data: { allMdx } }) => {
  const { nodes } = allMdx;

  // unpack the content from each project
  const allProjects = nodes.map(
    ({ frontmatter: { title, path, cardText, cardPhoto, tags, date } }) => ({
      title,
      path,
      cardText,
      cardPhoto,
      tags,
      date,
    })
  );

  // Count the number of projects associated with each tag
  const allProjectTags = nodes.map(({ frontmatter }) => frontmatter.tags);
  const tagCounts = getTagCounts(allProjectTags);

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="Portfolio" />
        <Header />
        <About />
        <Portfolio
          allProjects={allProjects}
          allProjectTags={allProjectTags}
          tagCounts={tagCounts}
        />
        <Contact />
      </Layout>
    </ThemeProvider>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      nodes: PropTypes.array.isRequired,
    }).isRequired,
  }).isRequired,
};

export default IndexPage;

export const data = graphql`
  query {
    allMdx(
      filter: { fileAbsolutePath: { regex: "/projects/" } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          title
          path
          cardPhoto {
            altText
            src {
              childImageSharp {
                fluid(maxWidth: 428) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          cardText
          tags
          date
        }
      }
    }
  }
`;
