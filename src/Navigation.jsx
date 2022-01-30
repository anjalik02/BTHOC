import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
  return (
    <div className="navigation">
      <nav class="navbar navbar-expand navbar-dark bg-dark">
        <div class="container">
          <Link class="navbar-brand" to="/">
            BTHO Covid
          </Link>

          <div>
            <ul class="navbar-nav ml-auto">
              <li
                class={`nav-item  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/">
                  Home
                  <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/Status" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/Status">
                  Status
                  <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/Files" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/Files">
                  Files
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/Tracker" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/Tracker">
                  Tracker
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/Friends" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/Friends">
                  Friends
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);