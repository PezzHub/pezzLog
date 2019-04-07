import React from "react";
import "./index.scss";

import {Link} from "gatsby";


export default class Menu extends React.Component {

  render() {
    return (
      <div className="Menu">
        <Item slug={"/blog"}>Blog</Item>
        <Item slug={"/"}>about</Item>
        <Item slug={"/"}>works</Item>
      </div>
    );
  }
}

class Item extends React.Component {

  render() {
    const {slug, children} = this.props;
    return (
      <div className="Item">
        <Link to={slug}>{children}</Link>
      </div>
    );
  }
}
