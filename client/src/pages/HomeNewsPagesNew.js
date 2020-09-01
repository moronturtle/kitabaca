import React, { Component } from "react";
import TopNavbar from "../components/Navbar/TopNavbar";

import HomeMainNews from "../components/home-news-page/HomeMainNews";
import HomeCategoryNews from "../components/home-news-page/HomeCategoryNews";

class HomeNewsPagesNew extends Component {
  render() {
    return (
      <div>
        <div>
          <HomeMainNews />
          <HomeCategoryNews />
        </div>
      </div>
    );
  }
}

export default HomeNewsPagesNew;
