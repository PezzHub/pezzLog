import React from "react";
import {Link} from "gatsby";
import styles from "./index.module.scss";


export default class PostPreview extends React.Component {
  render() {
    const {slug, title, excerpt, date} = this.props.postField;

    return (
      <article key={slug}>
        <h3 className={styles.title}>
          <Link to={slug}>
            {title}
          </Link>
        </h3>
        {date}
        <p dangerouslySetInnerHTML={{__html: excerpt}}/>
      </article>
    );
  }
}
