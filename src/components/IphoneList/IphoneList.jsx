import React from "react";
import { useNavigate } from "react-router-dom";
import CommentsContainer from "../CommentsContainer/CommentsContainer";

const IphoneList = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <div className="icons_iPhones">
          <div className="iphone_icon-1">
            <img
              onClick={() => navigate("/iphone-13-pro")}
              className="iphone-13-pro"
              src="	https://www.apple.com/v/iphone/home/bh/images/chapternav/iphone_13_pro_light__bywz8u012wk2_large.svg"
              alt=""
            />
            <p>iPhone 13 Pro </p>
          </div>
          <div className="iphone_icon-2">
            <img
              onClick={() => navigate("/iphone-13")}
              className="iphone-13"
              src="	https://www.apple.com/v/iphone/home/bh/images/chapternav/iphone_13_pro_light__bywz8u012wk2_large.svg"
              alt=""
            />
            <p>iPhone 13</p>
          </div>
          <div className="iphone_icon-3">
            <img
              onClick={() => navigate("/iphone-12")}
              className="iphone-12"
              src="	https://www.apple.com/v/iphone/home/bh/images/chapternav/iphone_13_pro_light__bywz8u012wk2_large.svg"
              alt=""
            />
            <p>iPhone 12 </p>
          </div>
        </div>

        <div className="vh5-container">
          <p>Сhoose yourself iPhone.</p>
          <a href="">*Learn more {" >"}</a>
        </div>
      </div>
      <div className="container-for-height">
        <div className="inscription-iphone-13-pro">
          <p className="iphone-13pro-p">iPhone 13 Pro</p>
          <p className="oh-so-p">Oh.So.Pro</p>
          <p className="iphone-13-pro-dollar">$ 999</p>
          <button className="iphone-13-pro-btn">Buy</button>
          <a className="iphone-13-pro-a" href="">
            Learn more {" >"}
          </a>
        </div>
        <div className="container-iphone-13pro">
          <img
            className="iphone-13pro-img"
            src="https://www.apple.com/v/iphone/home/bh/images/overview/hero/iphone_13_pro_hero__gqclakbze4a6_large_2x.png"
            alt=""
          />
        </div>
      </div>

      <div className="vh3-container"></div>
      <div className="container-all-iphone-13">
        <div className="inscriptions-iphone-13">
          <p className="iphone-13-p">iPhone 13</p>
          <p className="your-new-super-power">Your new superpower.</p>
          <p className="iphone-13-dollar">$ 799</p>
          <button className="iphone-13-btn">Buy</button>
          <a className="iphone-13-a" href="">
            Learn more {" >"}
          </a>
        </div>
        <div className="container-img-iphone-13">
          <img
            style={{ width: "750px" }}
            className="img-iphone-13"
            src="https://www.apple.com/v/iphone/home/bh/images/overview/hero/iphone_13_hero__c7g09yt0mjcm_large_2x.png"
            alt=""
          />
        </div>
      </div>

      <div className="iphone-13-container-vh2"></div>

      <div className="all-all-container-iphone-se">
        <div className="inscription-iphone-se">
          <p className="iphone-se-p">iPhone 12</p>
          <p className="love-the-power">Love the power.</p>
          <p className="love-the-price">Love the price.</p>
          <p className="iphone-se-dollar">$ 599</p>
          <button className="iphone-se-btn">Buy</button>
          <a className="iphone-se-a" href="">
            Learn more {" >"}{" "}
          </a>
        </div>
        <div className="container-img-iphone-se">
          <img
            className="img-iphone-se"
            src="https://www.apple.com/newsroom/images/product/iphone/geo/apple_iphone-12_2-up_geo_10132020_inline.jpg.large_2x.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default IphoneList;
