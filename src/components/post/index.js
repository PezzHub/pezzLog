import React from "react";
import "./index.scss";

import "prismjs/plugins/line-numbers/prism-line-numbers.css";


export default class Post extends React.Component {


  render() {
    const {
      fields,
      html,
    } = this.props;

    return (
      <article className="Post">
        <div className="title">{fields.title}</div>
        <div className="post" dangerouslySetInnerHTML={{__html: html}}/>
      </article>
    );
  }
}