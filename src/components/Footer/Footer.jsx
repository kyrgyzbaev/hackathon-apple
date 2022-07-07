import React, { useContext } from "react";
import AppleIcon from "@mui/icons-material/Apple";
import { useNavigate } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className="footer">
      <div
        className="inscriptions-footer"
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "50px",
        }}>
        <div
          style={{
            display: "flex",
            justifyContent: "baseline",
            marginRight: "50px",
          }}>
          <AppleIcon
            onClick={() => navigate("/cart")}
            style={{ cursor: "pointer" }}
          />
          <p style={{ marginTop: "4px" }}> {" >"} Bag</p>
        </div>
        <div className="all-inscriptions-footer">
          <div
            className="footer-shop-learn"
            style={{
              display: "flex",
              justifyContent: "flex-start",
              flexDirection: "column",
              marginLeft: "20px",
              marginTop: "20px",
            }}>
            <p style={{ fontSize: "18px", marginBottom: "10px" }}>
              Shop and Learn
            </p>
            <a
              style={{
                fontSize: "14px",
                marginBottom: "10px",
                marginLeft: "35px",
              }}
              href="/macs">
              Mac
            </a>
            <a
              style={{
                fontSize: "14px",
                marginBottom: "10px",
                marginLeft: "25px",
              }}
              href="/iphones">
              iPhone
            </a>
            <a
              style={{
                fontSize: "14px",
                marginBottom: "10px",
                marginLeft: "23px",
              }}
              href="/airpods">
              AirPods
            </a>
          </div>
          <div className="servises">
            <p>Servises</p>
            <a href="https://www.apple.com/apple-music/">Apple music</a>
            <a href="https://www.apple.com/apple-tv-plus/">Apple TV+</a>
            <a href="https://www.apple.com/apple-news/">Apple news</a>
            <a href="https://www.apple.com/apple-books/">Apple books</a>
            <a href="https://www.apple.com/app-store/">App Store</a>
          </div>
          <div className="apple-store">
            <p style={{ marginTop: "20px", fontSize: "18px" }}>Apple Store</p>
            <p>Find a Store</p>
            <p>Genius Bar</p>
            <p>Today at apple</p>
            <p>Apple Camp</p>
            <p>Apple Store App</p>
            <p>Financing</p>
          </div>
          <div className="apple-values">
            <p style={{ marginTop: "20px", fontSize: "18px" }}>Apple Values</p>
            <p>Accessibillity</p>
            <p>Education</p>
            <p>Environment</p>
            <p>Privacy</p>
            <p>Racial Equity</p>
          </div>
          <div style={{ marginLeft: "100px" }}>
            <InstagramIcon style={{ marginRight: "30px" }} />
            <TwitterIcon style={{ marginRight: "30px" }} />
            <FacebookIcon />
          </div>
        </div>
      </div>

      <div className="container-more-ways">
        <p className="more-ways">
          More ways to shop: Find an Apple Store or other retailer near you.
        </p>
      </div>
      <div className="container-copyright">
        <p className="copyright">
          Copyright © 2022 Apple Inc. All rights reserved.
        </p>
      </div>
      <div className="container-US">
        <p>United States</p>
      </div>
    </div>
  );
};

export default Footer;
