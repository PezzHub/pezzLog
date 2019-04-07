import React from "react";
import "./index.scss";

import {Link} from "gatsby";
import moment from "moment";
import config from "../../config/blog-config";


export default class PostPreview extends React.Component {

  render() {
    const {slug, title, excerpt, date} = this.props.postField;
    const formattedDate = moment(date).format(config.dateFormat);

    return (
      <article key={slug} className="PostPreview">
        <Link className="title link" to={slug}>
          {title}
        </Link>
        <p className="text" dangerouslySetInnerHTML={{__html: excerpt}}/>
        <div className="date">{formattedDate}</div>
      </article>
    );
  }
}
