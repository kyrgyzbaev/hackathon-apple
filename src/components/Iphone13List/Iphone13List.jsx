import { Box } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../contexts/authContext";
import { iphone13Context } from "../../contexts/iphone13Context";
import Iphone13Card from "../Iphone13Card/Iphone13Card";

const Iphone13List = () => {
  const { isAdmin } = useContext(authContext);
  const navigate = useNavigate();
  const { iphone13, getIphone13 } = useContext(iphone13Context);

  useEffect(() => {
    getIphone13();
  }, []);

  return (
    <div className="container-all-iphone-13-media">
      <div className="container-iphone-13-p">
        <p className="iphone-13-p">iPhone 13</p>
      </div>
      <div className="container-img-iphone-13">
        <img
          className="img-iphone-13"
          src="https://www.apple.com/v/iphone-13/g/images/overview/hero/hero_2_static__bcg2mb2z5sn6_large_2x.jpg"
          alt=""
        />
        <img
          className="img-iphone-13-2"
          src="https://www.apple.com/v/iphone-13/g/images/overview/camera/upgrade_mini_static__jsl0l3nl956y_large_2x.jpg"
          alt=""
        />
      </div>
      {isAdmin ? (
        <div className="container-13-pro-btn">
          <button
            onClick={() => navigate("/add-iphone-13")}
            className="add-iphone-13-pro-btn">
            Add iPhone 13 Pro
          </button>
        </div>
      ) : null}
      <Box
        className="box-iphone-13"
        display={"flex"}
        flexWrap={"wrap"}
        justifyContent={"center"}
        paddingTop={"30px"}>
        {iphone13.map(item => (
          <Iphone13Card key={item.id} item={item} />
        ))}
      </Box>
    </div>
  );
};

export default Iphone13List;
