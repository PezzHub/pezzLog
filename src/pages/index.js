import React from "react";
import Layout from "../components/layout";
import PostList from "../components/postList";
import {get} from "lodash";

export default class SiteTop extends React.Component {
  render() {
    const {location} = this.props;
    const posts = get(this, "props.data.allMarkdownRemark.edges", []);

    return (
      <Layout location={location}>
        <PostList postFields={posts.map(post => post.node.fields)}/>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  {
    allMarkdownRemark(sort: { fields: [fields___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
            title
            excerpt
            date
          }
        }
      }
    }
  }
`;
