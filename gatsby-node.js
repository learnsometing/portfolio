/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path');

const slugify = (str) => {
  // Slugify a string
  str = str.replace(/^\s+|\s+$/g, '');

  // Make the string lowercase
  str = str.toLowerCase();

  // Remove accents, swap ñ for n, etc
  const from =
    'ÁÄÂÀÃÅČÇĆĎÉĚËÈÊẼĔȆÍÌÎÏŇÑÓÖÒÔÕØŘŔŠŤÚŮÜÙÛÝŸŽáäâàãåčçćďéěëèêẽĕȇíìîïňñóöòôõøðřŕšťúůüùûýÿžþÞĐđßÆa·/_,:;';
  const to =
    'AAAAAACCCDEEEEEEEEIIIINNOOOOOORRSTUUUUUYYZaaaaaacccdeeeeeeeeiiiinnooooooorrstuuuuuyyzbBDdBAa------';
  for (let i = 0, l = from.length; i < l; i++) {
    str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
  }

  // Remove invalid chars
  str = str
    .replace(/[^a-z0-9 -]/g, '')
    // Collapse whitespace and replace by -
    .replace(/\s+/g, '-')
    // Collapse dashes
    .replace(/-+/g, '-');

  return str;
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'PortfolioJson') {
    const url = `/${slugify(node.title)}/`;
    createNodeField({
      node,
      name: 'slug',
      value: url,
    });
  }
};

exports.createPages = async ({graphql, actions }) => {
  const {createPage} = actions;
  const { data } = await graphql(`
    query {
      allPortfolioPages: allPortfolioJson {
        nodes {
          fields {
            slug
          }
        }
      }
    }
  `);

  // Create a page for each subcategory of item
  data.allPortfolioPages.nodes.forEach(node => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/Templates/PortfolioPage/PortfolioPage.tsx`),
      context: {
        // Data passed to context is available in page queries as GraphQL variables.
        slug: node.fields.slug,
      }
    });
  });
}