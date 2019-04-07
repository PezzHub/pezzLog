import React from "react";
import "./index.scss";
import PostPreview from "../post-preview";

export default class PostList extends React.Component {

  render() {
    const {postFields} = this.props;

    return (
      <div className="PostList">
        {postFields.map(postField =>
          <PostPreview
            key={postField.slug}
            postField={postField}
          />,
        )}
      </div>
    );
  }
}

