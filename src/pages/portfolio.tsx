import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

// Typescript Interfaces
import { Frontmatter } from '../App/Portfolio/Projects';

// Logic Helpers
import getTagCounts from '../helpers/getTagCounts';

// Components
import LayoutWithNavigation from '../App/Layout/LayoutWithNavigation';
import Portfolio from '../App/Portfolio';

interface Props {
  data: {
    allMdx: {
      nodes: Frontmatter[];
    };
  };
}

const PortfolioPage: React.FC<Props> = ({ data: { allMdx } }) => {
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
    <LayoutWithNavigation>
      <Portfolio
        allProjects={allProjects}
        allProjectTags={allProjectTags}
        tagCounts={tagCounts}
      />
    </LayoutWithNavigation>
  );
};

PortfolioPage.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      nodes: PropTypes.array.isRequired,
    }).isRequired,
  }).isRequired,
};

export default PortfolioPage;

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
