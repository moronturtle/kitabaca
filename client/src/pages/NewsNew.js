import React, { Component } from "react";
import { getNews } from "../actions/articleDashboard/articleActions";
import CategoryHighlightSidebar from "../components/home-news-page/CategoryHighlightSidebar";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import "./css/News.css";

class NewsNew extends Component {
  componentDidMount() {
    const { id } = this.props.location.state;
    this.props.getNews(id);
  }
  render() {
    const { mainNewsItems } = this.props.mainNews;
    return (
      <div className="news">
        <div className="singlepage">
          {mainNewsItems.map(({ _id, category, content, image_url, title }) => (
            <div key={_id}>
              <h5>{title}</h5>
              <img src={image_url} alt="Nature" className="picked-news-img" />
              <div>{content}</div>
            </div>
          ))}
          ;
        </div>

        <div>
          <CategoryHighlightSidebar />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  mainNews: state.mainNews
});

const mapDispatchToProps = dispatch => {
  return {
    ...bindActionCreators({ getNews }, dispatch)
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsNew);
