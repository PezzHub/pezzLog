import React from "react";
import "./index.scss";

import {Link} from "gatsby";
import config from "../../config/blog-config";
// import Menu from "../menu/Index";


export default class Layout extends React.Component {

  render() {
    const {location, children} = this.props;
    const {blogTitle} = config;

    const rootPath = "/";
    const isRoot = location.pathname === rootPath;

    let header;
    if (isRoot) {
      header = (
        <div className="header-container">
          <div className="blog-title">{blogTitle}</div>
          {/*<Menu/>*/}
        </div>
      );
    } else {
      header = (
        <div className="header-container">
          <div className="blog-title">
            <Link className="link" to={"/"}>{blogTitle}</Link>
          </div>
        </div>
      );
    }

    return (
      <div className="root-container">
        {header}
        {children}
        {/*<Footer isRoot={isRoot}/>*/}
      </div>
    );
  }
}
