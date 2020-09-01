import React, { Component } from "react";
import "./css/HomeMainNews.css";
import { getMainNews } from "../../actions/articleDashboard/articleActions";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import PropTypes from "prop-types";

class HomeMainNews extends Component {
  static propTypes = {
    getMainNews: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getMainNews();
  }

  render() {
    const { mainNewsItems } = this.props.mainNews;
    let mainNewsLeft = [];
    let mainNewsRight = [];
    mainNewsItems.map(({ _id, image_url, title }, index) => {
      index === 0
        ? mainNewsLeft.push(
            <div className="img-container" key={_id}>
              <Link
                to={{
                  pathname: "/news-new",
                  state: {
                    id: _id
                  }
                }}>
                <img src={image_url} alt="Nature" className="gallery-img" />
                <div className="text-img">
                  <p>{title}</p>
                </div>
              </Link>
            </div>
          )
        : mainNewsRight.push(
            <div className="img-container" key={_id}>
              <Link
                to={{
                  pathname: "/news-new",
                  state: {
                    id: _id
                  }
                }}>
                <img src={image_url} alt="Nature" className="gallery-img" />
                <div className="text-img-news2">
                  <p>{title}</p>
                </div>
              </Link>
            </div>
          );
    });
    return (
      <div>
        <div className="main-title-head">
          <div>
            <h5>Berita Utama</h5>
          </div>
        </div>

        <div className="new-news">
          <div className="new-news1">{mainNewsLeft}</div>

          <div className="new-news2">{mainNewsRight}</div>
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
    ...bindActionCreators({ getMainNews }, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeMainNews);
