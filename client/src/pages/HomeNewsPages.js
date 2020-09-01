import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/HomeNewsPage.css";

import HomeMainNews from "../components/home-news-page/HomeMainNews";
import HomeCategoryNews from "../components/home-news-page/HomeCategoryNews";

class NewsPage extends Component {
  render() {
    return (
      <div>
        <HomeMainNews />
        <HomeCategoryNews />
      </div>
    );
  }
}

export default NewsPage;
