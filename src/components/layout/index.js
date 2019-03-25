import React from "react";
import styles from "./index.module.scss";

export default class Layout extends React.Component {
  render() {
    const {location, children} = this.props;

    const rootPath = "/";
    const isRoot = location.pathname === rootPath;

    let header;
    if (isRoot) {
      header = (
        <div className={styles.header_container}>
          <div className={styles.blog_title}>
            PezzLog
          </div>
        </div>
      );
    }
    // else if (isTag) {
    //   header = (
    //     <div className={styles.header_container}>
    //       <div className={styles.header_container__inner}>
    //         <h1 className={styles.blog_title_area}>
    //           <Link
    //             className={styles.blog_title}
    //             to={"/"}
    //           >{config.blogTitle} </Link>
    //         </h1>
    //         <Bio/>
    //       </div>
    //       <Rss/>
    //     </div>
    //   );
    // } else {
    //   header = "";
    // }

    return (
      <div className={styles.root_container}>
        {header}
        {children}
        {/*<Footer isRoot={isRoot}/>*/}
      </div>
    );
  }
}
