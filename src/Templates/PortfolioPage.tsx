import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../App/Layout/Layout';
import SEO from '../App/SEO/SEO';

interface Data {
  portfolioJson: {
    title: string;
  };
}

interface Props {
  data: Data;
}

const PortfolioPage: React.FC<Props> = ({ data }) => {
  const project = data.portfolioJson;

  return (
    <Layout>
      <SEO title={project.title} />
      <h1>{project.title}</h1>
    </Layout>
  );
};

PortfolioPage.propTypes = {
  data: PropTypes.shape({
    portfolioJson: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default PortfolioPage;

export const query = graphql`
  query($slug: String!) {
    portfolioJson(fields: { slug: { eq: $slug } }) {
      title
    }
  }
`;

// const { allPortfolioJson } = useStaticQuery(graphql`
//     query {
//       allPortfolioJson {
//         nodes {
//           title
//           shortDescription
//           fullDescription
//           images {
//             altText
//             src {
//               childImageSharp {
//                 fluid(maxWidth: 300) {
//                   ...GatsbyImageSharpFluid
//                 }
//               }
//             }
//           }
//           githubURL
//           websiteURL
//           techSpecs
//           fields {
//             slug
//           }
//         }
//       }
//     }
//   `);

// PortfolioCard.propTypes = {
//   project: PropTypes.shape({
//     title: PropTypes.string.isRequired,
//     shortDescription: PropTypes.string.isRequired,
//     websiteURL: PropTypes.string.isRequired,
//     githubURL: PropTypes.string.isRequired,
//     images: PropTypes.arrayOf(
//       PropTypes.shape({
//         src: PropTypes.shape({
//           childImageSharp: PropTypes.shape({
//             fluid: PropTypes.shape({
//               base64: PropTypes.string.isRequired,
//               aspectRatio: PropTypes.number.isRequired,
//               src: PropTypes.string.isRequired,
//               srcSet: PropTypes.string.isRequired,
//               sizes: PropTypes.string.isRequired,
//             }).isRequired,
//           }).isRequired,
//         }).isRequired,
//         altText: PropTypes.string.isRequired,
//         caption: PropTypes.string,
//       }).isRequired
//     ).isRequired,
//     fullDescription: PropTypes.string.isRequired,
//     techSpecs: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
//     fields: PropTypes.shape({
//       slug: PropTypes.string.isRequired,
//     }).isRequired,
//   }).isRequired,
// };

// interface ChildImageSharp {
//   fluid: {
//     base64: string;
//     aspectRatio: number;
//     src: string;
//     srcSet: string;
//     sizes: string;
//   };
// }

// interface Src {
//   childImageSharp: ChildImageSharp;
// }

// interface Image {
//   src: Src;
//   altText: string;
//   caption?: string;
// }

// interface Project {
//   title: string;
//   shortDescription: string;
//   websiteURL: string;
//   githubURL: string;
//   images: Image[];
//   fullDescription: string;
//   techSpecs: string[];
//   fields: {
//     slug: string;
//   };
// }
