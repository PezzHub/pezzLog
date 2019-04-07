const path = require("path");
const {createFilePath} = require("gatsby-source-filesystem");

const unified = require("unified");
const remarkParse = require("remark-parse");
const remark2rehype = require("remark-rehype");
const rehypeStringify = require("rehype-stringify");
const striptags = require("striptags");


exports.onCreateNode = ({node, getNode, actions}) => {
  const {createNodeField} = actions;

  if (node.internal.type === "MarkdownRemark") {
    const [
      slug,
      title,
      date,
      excerpt,
    ] = [
      node.frontmatter.slug || createFilePath({node, getNode}),
      node.frontmatter.title,
      node.frontmatter.date,
      _excerptMarkdown(node.rawMarkdownBody, 120),
    ];

    createNodeField({node, name: "slug", value: slug});
    createNodeField({node, name: "title", value: title});
    createNodeField({node, name: "date", value: date});
    createNodeField({node, name: "excerpt", value: excerpt});
  }
};

exports.createPages = ({graphql, actions}) => {
  const {createPage} = actions;
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
              title
              date
              excerpt
            }
          }
        }
      }
    }
  `).then(result => {
    result.data.allMarkdownRemark.edges.forEach(({node}) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve("./src/templates/BlogPostTemplate.js"),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: node.fields.slug,
        },
      });
    });
  });
};

function _excerptMarkdown(markdown, length) {
  const {contents: html} =
    unified()
      .use(remarkParse)
      .use(remark2rehype)
      .use(rehypeStringify)
      .processSync(markdown);

  return _excerptHtml(html, length);
}

function _excerptHtml(html, length) {
  const postContent = striptags(html).replace(/\r?\n/g, "").trim();
  return postContent.length <= length
    ? postContent
    : postContent.slice(0, length) + "...";
}