import React from "react";
import "./index.css";

import TopNavbar from "../../components/Navbar/TopNavbar";
import Title from "../../components/Title";
import Footer from "../../components/Footer/";

const DefaultLayout = ({ children }) => (
  <div className="wrapper">
    <div className="news-paper">
      <Title />
      <TopNavbar />
      {children}
    </div>
    <Footer />
  </div>
);

export default DefaultLayout;
