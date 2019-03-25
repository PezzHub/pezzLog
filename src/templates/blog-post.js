import React from "react";
// import {graphql} from "gatsby";
import Layout from "../components/layout";

export default class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    return (
      <Layout location={this.props.location}>
        <div>
          <h1>{post.fields.title}</h1>
          <div dangerouslySetInnerHTML={{__html: post.html}}/>
        </div>
      </Layout>
    );
  }
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        title
      }
    }
  }
`;
