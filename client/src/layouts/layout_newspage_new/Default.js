import React from "react";
import TopNavbar from "../../components/Navbar/TopNavbar";
import Footer from "../../components/Footer/FooterNew";

import "./style.css";

const DefaultLayout = ({ children }) => (
  <div className="body-news">
    <div className="container-new">
      <div className="news-paper-new">
        <div className="header">
          <div className="header-left-new">
            <div className="logo" style={{ textDecoration: "none" }}>
              <a href="#" style={{ textDecoration: "none" }}>
                <h1>
                  KITABACA<span>.COM</span>
                </h1>
              </a>
            </div>
          </div>
          <div className="menu-strip">
            <TopNavbar />
          </div>
        </div>
        {children}
        <Footer />
      </div>
    </div>
  </div>
);

export default DefaultLayout;
