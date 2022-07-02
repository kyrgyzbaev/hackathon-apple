import { Box } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../contexts/authContext";
import { macbookAirContext } from "../../contexts/macbookAirContext";
import { macsContext } from "../../contexts/macsContext";
import MacbookAirCard from "../MacbookAirCard/MacbookAirCard";

const MacBookAirList = () => {
  const navigate = useNavigate();

  const { isAdmin } = useContext(authContext);

  const { airs, pages, getAirs } = useContext(macbookAirContext);
  useEffect(() => {
    getAirs();
  }, []);
  // console.log(airs);

  return (
    <div>
      <div className="container-all-macbook-air">
        <p className="macbook-air-p">Macbook Air</p>
        <div>
          <div className="container-images-air">
            <div>
              <img
                className="macbook-air-img-1"
                src="https://www.apple.com/v/macbook-air/o/images/overview/hero_mba_m1__mfge6fbp7t2m_large_2x.jpg"
                alt=""
              />
              <div className="inscriptions-macbook-air">
                <p className="macbook-air-m1">M1 chip</p>
                <p className="macbook-air-p-1">Macbook Air</p>
                <button className="macbook-air-btn">Buy</button>
                <a className="macbook-air-a" href="">
                  Learn more {" >"}
                </a>
              </div>
            </div>
            <div>
              <img
                className="macbook-air-img-2"
                src="https://www.apple.com/v/macbook-air/o/images/overview/hero_mba_m2__ejbs627dj7ee_large_2x.jpg"
                alt=""
              />
              <div className="inscriptions-macbook-air-2">
                <p className="macbook-air-m1-2">M1 chip</p>
                <p className="macbook-air-p-2">Macbook Air</p>
                <button className="macbook-air-btn-2">Buy</button>
                <a className="macbook-air-a-2" href="">
                  Learn more {" >"}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isAdmin ? (
        <div className="container-btn-add-air">
          <button
            className="add-macbook-air-btn"
            onClick={() => navigate("/add-macbook-air")}>
            Add MacBook Air
          </button>
        </div>
      ) : null}

      <Box
        display={"flex"}
        flexWrap={"wrap"}
        justifyContent={"center"}
        paddingTop={"30px"}>
        {airs.map(item => (
          <MacbookAirCard key={item.id} item={item} />
        ))}
      </Box>
    </div>
  );
};

export default MacBookAirList;
