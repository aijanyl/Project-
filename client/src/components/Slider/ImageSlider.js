import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ImageSlider.css";
import kid1 from "../images/kid1.jpg";
import kid2 from "../images/kid2.jpg";
import kid3 from "../images/kid3.jpg";
import kid4 from "../images/kid4.jpg";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

function ImageSlider() {
  let settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "linear",
  };
  return (
    <Grid>
      <div className="best"></div>
      <Slider
        autoplay
        style={{
          position: "relative",
        }}
        {...settings}
      >
        <div className="card-wrapper">
          <div className="card">
            <div className="card-image">
              <img src={kid1} />
            </div>

            <div className="details">
              <h2>
                You can help<span className="price"></span>
              </h2>
            </div>
          </div>
        </div>

        <div className="card-wrapper">
          <div className="card">
            <div className="card-image">
              <img src={kid2} />
            </div>

            <div className="details">
              <h2>
                You can help<span className="price"></span>
              </h2>
            </div>
          </div>
        </div>
        <div className="card-wrapper">
          <div className="card">
            <div className="card-image">
              <img src={kid3} />
            </div>

            <div className="details">
              <h2>
                You can help<span className="price"></span>
              </h2>
            </div>
          </div>
        </div>
        <div className="card-wrapper">
          <div className="card">
            <div className="card-image">
              <img src={kid4} />
            </div>

            <div className="details">
              <h2>
                You can help<span className="price"></span>
              </h2>
            </div>
          </div>
        </div>
      </Slider>
    </Grid>
  );
}

export default ImageSlider;
