import React from "react";

const AirPodsList = () => {
  return (
    <div className="all-background">
      <div className="airpods-icons">
        <div className="airpods-icon-1">
          <img
            className="airpods-img-1"
            src="	https://www.apple.com/v/airpods/r/images/chapternav/airpods_2gen_light__ckwbqlgv1r9e_large.svg"
            alt=""
          />
          <p>AirPods 2nd</p>
        </div>
        <div className="airpods-icon-2">
          <img
            className="airpods-img-2"
            src="	https://www.apple.com/v/airpods/r/images/chapternav/airpods_3gen_light__6r7zooyk4lua_large.svg"
            alt=""
          />
          <p>AirPods 3rd </p>
        </div>
        <div className="airpods-icon-3">
          <img
            className="airpods-img-3"
            src="	https://www.apple.com/v/airpods/r/images/chapternav/airpods_pro_light__ets5a19rt3au_large.svg"
            alt=""
          />
          <p>AirPods Pro</p>
        </div>
        <div className="airpods-icon-4">
          <img
            className="airpods-img-4"
            src="https://www.apple.com/v/airpods/r/images/chapternav/airpods_max_light__cvaaddhgazqu_large.svg"
            alt=""
          />
          <p>AirPods Max</p>
        </div>
      </div>
      <div className="container-airpods">
        <p>Get 6 months of Apple Music free with your AirPods.</p>{" "}
        <a href="">*Learn more {" >"} </a>
      </div>
      <div className="all-container-airpods-video">
        <div className="container-video-airpods">
          <video
            width="320"
            height="240"
            loop="true"
            autoplay="autoplay"
            no-controls
            muted>
            <source
              src="https://www.apple.com/105/media/us/airpods/2022/7052f60e-c8a4-4a32-b278-0d0348fbcd0a/anim/spatial/large_2x.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="inscr-video-airpods">
          <p id="airpods-v-p">AirPods</p>
          <p id="airpods-v-p-3rd">3rd generation</p>
          <p id="airpods-v-p-dollar">$ 179</p>
          <button className="video-btn">Buy</button>
          <a href="">Learn more {" >"} </a>
        </div>
      </div>
      <div className="all-all-pro">
        <div className="all-container-3rd">
          <div className="container-3d-airpods">
            <div className="img-airpods-3d">
              <img
                className="right-airpods"
                src="	https://www.apple.com/v/airpods/r/images/overview/airpods_pro_left__bvanpj0ujnf6_large_2x.png"
                alt=""
              />
              <img
                className="left-airpods"
                src="	https://www.apple.com/v/airpods/r/images/overview/airpods_pro_right__fm0wwisa76em_large_2x.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="inscription-airpods-3rd">
          <p className="airpods-pro-pro">AirPods Pro</p>
          <p className="pro-dollar">$ 249</p>
          <button className="rd3-btn">Buy</button>
          <a className="airpods-pro-a" href="">
            Learn more {" >"}
          </a>
        </div>
      </div>
      <div className="all-all-airpods-max">
        <div className="all-container-airpods-max">
          <div className="background-airpods-max">
            <div className="inscriptions-airpods-max">
              <p className="airpods-max-p">AirPods Max</p>
              <p className="airpods-max-dollar">$ 549</p>
            </div>
          </div>
        </div>
        <div className="airpods-max-btn-a">
          <button className="airpods-max-btn">Buy</button>
          <a className="airpods-max-a" href="">
            Learn more {" >"}
          </a>
        </div>

        <div className="container-img-airpods-max">
          <img
            className="airpods-max-img"
            src="https://www.apple.com/v/airpods/r/images/overview/airpods_max__f265q4g4ddym_large_2x.png"
            alt=""
          />
        </div>
      </div>
      <div className="all-all-airpods-2nd">
        <div className="all-airpods-2nd">
          <div className="container-airpods-2nd">
            <img
              className="img-airpods-2nd"
              src="https://www.apple.com/v/airpods/r/images/overview/airpods_2ndgen_left__gjpt8k836yy6_large_2x.png"
              alt=""
            />
            <img
              className="img-airpods-2nd-2"
              src="https://www.apple.com/v/airpods/r/images/overview/airpods_2ndgen_right__gahfggwvcx6q_large_2x.png"
              alt=""
            />
          </div>
        </div>
        <div className="inscriptions-airpods-2nd">
          <p className="airpods-2nd-p">Airpods</p>
          <p className="generation-2nd-airpods">2nd generation</p>
          <p className="airpods-2nd-dollar">$ 129</p>
          <button className="airpods-2nd-btn">Buy</button>
          <a className="airpods-2nd-a" href="">
            Learn more {" >"}
          </a>
        </div>
      </div>
    </div>
  );
};

export default AirPodsList;
