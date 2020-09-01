import React, { Component } from "react";
import "./HomeMainNews.css";

class MainNews extends Component {
  render() {
    return (
      <div>
        <div className="main-title-head">
          <div>
            <h5>Berita Utama</h5>
          </div>
        </div>

        <div className="new-news">
          <div className="new-news1">
            <div className="img-container">
              <img
                src="http://pogmogoal.com/wp-content/uploads/maxresdefault3.jpg"
                alt="Nature"
                className="gallery-img"
              />
              <div className="text-img">
                <h6>Nature</h6>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea,
                  sapiente debitis. Quidem, laborum numquam
                </p>
              </div>
            </div>
          </div>
          <div className="new-news2">
            <div className="img-container">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUUCrEpRSaaZG4LNV28Io_vF14kZtU1aKx7tVfa6MNAkM-DrSIsQ"
                className="gallery-img"
                alt="Nature"
              />
              <div className="text-img-news2">
                <h6>Lorem ipsum dolor sit amet.</h6>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Voluptates, aliquid?
                </p>
              </div>
            </div>
            <div className="img-container">
              <img
                src="https://akcdn.detik.net.id/community/media/visual/2018/08/13/ae09b527-451e-4deb-81f3-f7aa0e50a662_169.jpeg?w=780&q=90"
                alt="Nature"
                className="gallery-img"
              />
              <div className="text-img-news2">
                <h6>Nature</h6>
                <p>What a beautiful sunrise</p>
              </div>
            </div>
            <div className="img-container">
              <img
                src="https://www.bitcoinisle.com/wp-content/uploads/2018/07/ronaldinho-cryptocurrency-ico-soccercoin-760x400.jpeg"
                alt="Nature"
                className="gallery-img"
              />
              <div className="text-img-news2">
                <h6>Nature</h6>
                <p>What a beautiful sunrise</p>
              </div>
            </div>
            <div className="img-container">
              <img
                src="https://i.dailymail.co.uk/i/pix/2009/07/24/article-0-0612009B0000044D-157_468x431.jpg"
                alt="Nature"
                className="gallery-img"
              />
              <div className="text-img-news2">
                <h6>Nature</h6>
                <p>What a beautiful sunrise</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainNews;
