import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img className="glamjam-logo" src="/images/glamjam-logo.png" alt="" />
      </div>
      <div className="header-left">
        <div className="title">
          <span>Collection</span>
        </div>
        <div className="title">
          <span>Products</span>
        </div>
        <div className="title">
          <span>About</span>
        </div>
        <div className="title">
          <span>Blog</span>
        </div>
      </div>
      <div className="header-right">
        <div className="title">
          <Link to="/">
            <img className="login-pic" src="/images/login.png" alt="log-in" />
          </Link>
        </div>
        <div>|</div>
        <div className="cart-button">
          <div className="cart-text">Cart</div>
          <LocalMallOutlinedIcon className="cart-icon" />
        </div>
      </div>
    </div>
  );
}

export default Header;
