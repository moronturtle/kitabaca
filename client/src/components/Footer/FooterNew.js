import React, { Component } from "react";

class FooterNew extends Component {
  render() {
    return (
      <div className="footer text-center">
        <div className="bottom-menu">
          <ul>
            <li>
              <a href="index.html">News</a>
            </li>{" "}
            |
            <li>
              <a href="sports.html">Sports</a>
            </li>{" "}
            |
            <li>
              <a href="tech.html">Techology</a>
            </li>{" "}
            |
            <li>
              <a href="movies.html">Movies</a>
            </li>{" "}
          </ul>
        </div>

        <div className="copyright text-center">
          <p>Kitabaca.com &copy; 2019 All rights reserved </p>
        </div>
      </div>
    );
  }
}

export default FooterNew;
