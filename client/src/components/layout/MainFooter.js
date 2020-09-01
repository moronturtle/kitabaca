import React from "react";
import PropTypes from "prop-types";

const MainFooter = ({ contained, menuItems, copyright }) => (
  <footer
    className="main-footer d-flex p-2 px-3 bg-white border-top"
    style={{ backgroundColor: "white", width: "100%" }}
  >
    <span
      className="copyright"
      style={{ backgroundColor: "white", width: "100%" }}
    >
      {copyright}
    </span>
  </footer>
);

MainFooter.propTypes = {
  /**
   * Whether the content is contained, or not.
   */
  contained: PropTypes.bool,
  /**
   * The menu items array.
   */
  menuItems: PropTypes.array,
  /**
   * The copyright info.
   */
  copyright: PropTypes.string
};

MainFooter.defaultProps = {
  contained: false,
  copyright: "Copyright © 2019 Kitabaca.com Dashboard",
  menuItems: [
    {
      title: "Home",
      to: "#"
    },
    {
      title: "Services",
      to: "#"
    },
    {
      title: "About",
      to: "#"
    },
    {
      title: "Products",
      to: "#"
    },
    {
      title: "Blog",
      to: "#"
    }
  ]
};

export default MainFooter;
