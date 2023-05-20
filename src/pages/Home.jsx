import React from "react";
import Header from "../components/Header";
import "./home.css";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <div className="home-container">
        <div className="home-left">
          <div>
            <img
              className="lipgloss-pic"
              src="/images/lipgloss.jpeg"
              alt="lipgloss"
            />
          </div>
          <div className="big-text">Natural & Glowing</div>
          <div className="description">
            Skincare and makeup essentials that fit seamlessly into your routine
            and life, leaving you glowing, dewy, fresh and ready for the day
            ahead.
          </div>
          <div className="button-row">
            <div className="add-cart-button">
              <div className="add-cart-text">Add to cart</div>
              <LocalMallOutlinedIcon className="carticon" />
            </div>
            <div className="wishlist-button">
              <div className="add-wishlist-text">Add to wishlist</div>
              <FavoriteBorderIcon className="hearticon" />
            </div>
          </div>
          <div className="serum-and-numbers">
            <img className="serum-pic" src="/images/serum.png" alt="serums" />
            <div className="all-texts">
              <img
                className="orange-star"
                src="/images/orange-star.png"
                alt="star"
              />
              <div className="big-number">256k</div>
              <div className="claim">Women adore our skincare</div>
            </div>
          </div>
        </div>
        <div className="home-right">
          <div className="woman-and-product">
            <img
              className="woman-pic"
              src="/images/woman-pic.jpg"
              alt="woman"
            />
          </div>
          <div className="bottom-right-text">
            <div className="ad">
              Revollutionary for its time, harnessing a certain come-as-you-are
              acceptance
            </div>
            <div className="review-section">
              <div className="review-text">All reviews</div>
              <div className="circle-icon">
                <img className="woman-circle" src="/images/woman-circle.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
