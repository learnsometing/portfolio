/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path');

// const slugify = (str) => {
//   // Slugify a string
//   str = str.replace(/^\s+|\s+$/g, '');

//   // Make the string lowercase
//   str = str.toLowerCase();

//   // Remove accents, swap ñ for n, etc
//   const from =
//     'ÁÄÂÀÃÅČÇĆĎÉĚËÈÊẼĔȆÍÌÎÏŇÑÓÖÒÔÕØŘŔŠŤÚŮÜÙÛÝŸŽáäâàãåčçćďéěëèêẽĕȇíìîïňñóöòôõøðřŕšťúůüùûýÿžþÞĐđßÆa·/_,:;';
//   const to =
//     'AAAAAACCCDEEEEEEEEIIIINNOOOOOORRSTUUUUUYYZaaaaaacccdeeeeeeeeiiiinnooooooorrstuuuuuyyzbBDdBAa------';
//   for (let i = 0, l = from.length; i < l; i++) {
//     str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
//   }

//   // Remove invalid chars
//   str = str
//     .replace(/[^a-z0-9 -]/g, '')
//     // Collapse whitespace and replace by -
//     .replace(/\s+/g, '-')
//     // Collapse dashes
//     .replace(/-+/g, '-');

//   return str;
// };

exports.createPages = async ({graphql, actions }) => {
  const {createPage} = actions;
  const { data } = await graphql(`
    query {
      projects: allMdx(filter: { fileAbsolutePath: { regex: "/projects/" } }) {
        nodes {
          frontmatter {
            path
          }
        }
      }
    }
  `);

  // Create a page for each project
  data.projects.nodes.forEach(node => {
    const slug = node.frontmatter.path;
    createPage({
      path: slug,
      component: path.resolve(`./src/Templates/ProjectPage/index.tsx`),
      context: {
        // Data passed to context is available in page queries as GraphQL variables.
        slug
      }
    });
  });
}
