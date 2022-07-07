import { Box } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../contexts/authContext";
import { iphone13ProContext } from "../../contexts/iphone13ProContext";
import Iphone13ProCard from "../Iphone13ProCard/Iphone13ProCard";

const Iphone13ProList = () => {
  const { isAdmin } = useContext(authContext);
  const navigate = useNavigate();
  const { iphone13Pro, getIphone13Pro } = useContext(iphone13ProContext);
  useEffect(() => {
    getIphone13Pro();
  }, []);
  return (
    <div className="container-all-iphone-13-pro-media">
      <div className="div-13-pro-p">
        <p className="iphone-13-pro-p"> iPhone 13 Pro</p>
      </div>
      {/* <div className="inscriptions-pro-13">
        <p className="iphone13-pro-p">The best phone in the world</p>
        <button className="iphone13-pro-btn">Buy</button>
        <a className="iphone13-pro-a" href="">
          Learn more {" >"}
        </a>
      </div> */}
      <div className="video-13-pro">
        <img
          className="img-13-pro"
          src="https://www.cnet.com/a/img/resize/3b89bdf77cb6f3cbc13ed584ba8b30edd1cffe71/2022/02/01/ef6c7569-d45a-48eb-b084-75ad829a7e7a/capture-one-catalog0461-1.jpg?auto=webp&fit=crop&height=675&width=1200"
          alt=""
        />
        <img
          className="img-13-pro-2"
          src="https://www.apple.com/v/iphone-12/key-features/g/images/overview/features/night_mode__8i9e1s3un2ae_large_2x.jpg"
          alt=""
        />
        <p className="p-13-pro">
          Advanced triple system with Night mode selfies.
        </p>
      </div>
      <div></div>

      {isAdmin ? (
        <div className="container-13-pro-btn">
          <button
            onClick={() => navigate("/add-iphone-13-pro")}
            className="add-iphone-13-pro-btn">
            Add iPhone 13 Pro
          </button>
        </div>
      ) : null}

      <Box
        className="box-iphone-13-pro"
        display={"flex"}
        flexWrap={"wrap"}
        justifyContent={"center"}
        paddingTop={"30px"}>
        {iphone13Pro.map(item => (
          <Iphone13ProCard key={item.id} item={item} />
        ))}
      </Box>
    </div>
  );
};

export default Iphone13ProList;
