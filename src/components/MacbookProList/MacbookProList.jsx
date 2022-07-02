import { Box } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../contexts/authContext";
import { macProContext } from "../../contexts/macbookPro";
import MacBookProCard from "../MacBookProCard/MacBookProCard";

const MacbookPro = () => {
  const navigate = useNavigate();
  const { isAdmin } = useContext(authContext);
  const { getMacPro, macPro } = useContext(macProContext);
  useEffect(() => {
    getMacPro();
  }, []);
  return (
    <div>
      <div className="container-pro-p">
        <p className="pro-mac-p">Macbook Pro</p>
      </div>
      <div className="container-images-macbook-pro">
        <div>
          <img
            className="img-macbook-pro"
            src="	https://www.apple.com/v/macbook-pro/af/images/overview/hero_13__d1tfa5zby7e6_large_2x.jpg"
            alt=""
          />
          <div className="inscription-macbook-pro">
            <p className="mac-13">MacBook pro 13</p>
            <p className="pro-dollar">$ 1299</p>
            <button className="mac-pro-btn">Buy</button>
            <a className="mac-pro-a" href="">
              Learn more {" >"}
            </a>
          </div>
        </div>
        <div>
          <img
            className="img-macbook-pro-2"
            src="https://www.apple.com/v/macbook-pro/af/images/overview/hero_14_16__bux8byft94oi_large_2x.jpg"
            alt=""
          />
          <div className="inscription-macbook-pro-2">
            <p className="mac-14-16">MacBook Pro 14 and 16</p>
            <p className="pro-dollar-2">$ 1999</p>
            <button className="mac-pro-btn-2">Buy</button>
            <a className="mac-pro-a-2" href="">
              Learn more {" >"}
            </a>
          </div>
        </div>
      </div>
      {isAdmin ? (
        <div className="mac-pro-add-container">
          <button
            className="mac-pro-add-btn"
            onClick={() => navigate("/add-macbook-pro")}>
            Add MacBook Pro
          </button>
        </div>
      ) : null}

      <Box
        display={"flex"}
        flexWrap={"wrap"}
        justifyContent={"center"}
        paddingTop={"30px"}>
        {macPro.map(item => (
          <MacBookProCard key={item.id} item={item} />
        ))}
      </Box>
    </div>
  );
};

export default MacbookPro;
