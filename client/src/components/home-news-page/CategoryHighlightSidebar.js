import React, { Component } from "react";
import { getMainNews } from "../../actions/articleDashboard/articleActions";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import PropTypes from "prop-types";

class CategoryHighlightSidebar extends Component {
  //   static propTypes = {
  //     getMainNews: PropTypes.func.isRequired
  //   };

  //   componentDidMount() {
  //     this.props.getMainNews();
  //   }

  render() {
    return (
      <div className="category-highlights-sidebar">
        <div className="galery">
          <img
            src=" https://wpism.com/wp-content/uploads/Google-Adsense-Page-Level-Ads.png"
            alt="Nature"
            className="gallery-img"
          />
        </div>

        <div className="main-title-head-sidebar-news">
          <div className="main-title-head-sidebar">
            <div>
              <h5>Popular News</h5>
            </div>
          </div>
        </div>
        <div className="desc-popular-news">
          <h6>February 12th 2019</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            aliquid eligendi ut beatae dolorum, dolorem explicabo praesentium
            delectus obcaecati non deleniti necessitatibus! Recusandae, vero.
            Quia?
          </p>
        </div>
        <div className="desc-popular-news">
          <h6>February 12th 2019</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            aliquid eligendi ut beatae dolorum, dolorem explicabo praesentium
            delectus obcaecati non deleniti necessitatibus! Recusandae, vero.
            Quia?
          </p>
        </div>
        <div className="desc-popular-news">
          <h6>February 12th 2019</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            aliquid eligendi ut beatae dolorum, dolorem explicabo praesentium
            delectus obcaecati non deleniti necessitatibus! Recusandae, vero.
            Quia?
          </p>
        </div>
        <div className="desc-popular-news">
          <h6>February 12th 2019</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            aliquid eligendi ut beatae dolorum, dolorem explicabo praesentium
            delectus obcaecati non deleniti necessitatibus! Recusandae, vero.
            Quia?
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
  return {
    ...bindActionCreators({ getMainNews }, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryHighlightSidebar);
