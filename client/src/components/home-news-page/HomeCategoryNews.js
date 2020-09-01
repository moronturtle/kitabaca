import React, { Component } from "react";
import CategoryHighlightSidebar from "./CategoryHighlightSidebar";

import "./css/HomeCategoryNews.css";
import { getCategoryNews } from "../../actions/articleDashboard/articleActions";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import PropTypes from "prop-types";

class HomeCategoryNews extends Component {
  static propTypes = {
    getCategoryNews: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getCategoryNews();
  }

  render() {
    const { categoryNewsItems } = this.props.maincategoryNews;
    console.log(categoryNewsItems);
    return (
      <div>
        <div className="tes1">
          <div className="parent-a">
            <div className="news-inside-parent-a">
              {categoryNewsItems.map(({ _id, news }) => (
                <div className="apa" key={_id}>
                  <h5>{_id}</h5>
                  <div className="child-a">
                    {news.map(({ _id, image_url, title }) => (
                      <div key={_id}>
                        <Link
                          to={{
                            pathname: "/news-new",
                            state: {
                              id: _id
                            }
                          }}
                        >
                          <div className="card-news">
                            <img
                              src={image_url}
                              alt="Nature"
                              className="gallery-img"
                            />

                            <div className="desc">
                              <p
                                style={{ fontSize: "11px", fontWeight: "bold" }}
                              >
                                {title}
                              </p>
                            </div>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="category-highlights">
              <div className="category-highlights-news">
                <div className="main-title-head-category-news">
                  <div className="main-title-head">
                    <div>
                      <h5>Galery</h5>
                    </div>
                  </div>
                </div>
                <div className="card-news">
                  <img
                    src="http://vid01.bt.co.uk/v1/bc/pd/2503979514001/201901/1865/2503979514001_5988957079001_5988958369001-vs.jpg?pubId=2503979514001"
                    alt="Nature"
                    className="gallery-img"
                  />

                  {/* <!-- <div className="desc">Add a description of the image here</div> --> */}

                  <div className="desc">
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Officiis, expedita.
                    </p>
                  </div>
                </div>

                <div className="card-news">
                  <img
                    src="https://media.gettyimages.com/photos/mia-blichfeldt-of-denmark-misses-a-shot-against-ratchanok-intanon-of-picture-id1008050636"
                    alt="Nature"
                    className="gallery-img"
                  />
                  {/* <!-- <div className="desc">Add a description of the image here</div>   --> */}

                  <div className="desc">
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Officiis, expedita.
                    </p>
                  </div>
                </div>

                <div className="card-news">
                  <img
                    src="http://www.wbsc.org/wp-content/uploads/20180829-Women-Baseball-World-Cup-Korea-beats-The-Netherlands-cover-1280x640.jpg"
                    alt="Nature"
                    className="gallery-img"
                  />
                  {/* <!-- <div className="desc">Add a description of the image here</div> --> */}
                  <div className="desc">
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Officiis, expedita.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="parent-b">
            <CategoryHighlightSidebar />
          </div>
        </div>

        {/* <!-- start highligt kategori news  --> */}

        {/* <!-- end kategori highlight and sidebar news  --> */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  maincategoryNews: state.mainNews
});

const mapDispatchToProps = dispatch => {
  return {
    ...bindActionCreators({ getCategoryNews }, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeCategoryNews);
