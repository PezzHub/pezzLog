import React from "react";
import styles from "./index.module.scss";
import PostPreview from "../post-preview";

export default class PostList extends React.Component {
  render() {

    return (
      <div className={styles.post_list}>
        {this.props.postFields.map(postField =>
          <PostPreview
            key={postField.slug}
            postField={postField}
          />,
        )}
      </div>
    );
  }
}

