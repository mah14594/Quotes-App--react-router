import React, { Fragment } from "react";
import classes from "./Layout.module.css";
import MainNavigiation from "./MainNavigiation";
export default function Layout(props) {
  return (
    <Fragment>
      <MainNavigiation />
      <main className={classes.main}>{props.children}</main>
    </Fragment>
  );
}
