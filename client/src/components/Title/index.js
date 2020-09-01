import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Title.css";

class Title extends Component {
  render() {
    return (
      <div className="logo">
        <Link to="/home" style={{ textDecoration: "none" }}>
          <h1>
            Kita<span>baca.com</span>
          </h1>
        </Link>
      </div>
    );
  }
}
export default Title;
