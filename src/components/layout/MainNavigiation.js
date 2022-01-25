import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";
export default function MainNavigiation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Quotes</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to="/Quotes">
              Qoutes
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/New-Quote">
              Add Qoute
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
