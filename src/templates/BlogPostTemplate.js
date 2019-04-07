import React from "react";
import {graphql} from "gatsby";
import Layout from "../components/layout";
import Post from "../components/post";

import "prismjs/plugins/line-numbers/prism-line-numbers.css";


export default class BlogPostTemplate extends React.Component {

  render() {
    const post = this.props.data.markdownRemark;

    return (
      <Layout location={this.props.location}>
        <Post
          fields={post.fields}
          html={post.html}
          pageContext={this.props.pageContext}
        />
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        title
        excerpt
        date
      }
    }
  }
`;