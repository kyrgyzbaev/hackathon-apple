import { Box } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../contexts/authContext";
import { iphone12Context } from "../../contexts/iphone12Context";
import Iphone12Card from "../Iphone12Card/Iphone12Card";

const Iphone12List = () => {
  const { isAdmin } = useContext(authContext);
  const navigate = useNavigate();
  const { iphone12, getIphone12 } = useContext(iphone12Context);

  useEffect(() => {
    getIphone12();
  }, []);
  return (
    <div className="container-all-iphone-12-media">
      <div className="container-12-p">
        <p>iPhone 12</p>
      </div>
      <div className="container-img-iphone-12">
        <img
          className="img-iphone-12"
          src="https://www.apple.com/v/iphone-12/key-features/g/images/overview/features/design_endframe__bdiag34ld9r6_large_2x.jpg"
          alt=""
        />
      </div>
      {isAdmin ? (
        <div className="container-iphone-12-btn">
          <button
            onClick={() => navigate("/add-iphone-12")}
            className="add-iphone-13-pro-btn">
            Add iPhone 12
          </button>
        </div>
      ) : null}
      <Box
        className="box-iphone-12"
        display={"flex"}
        flexWrap={"wrap"}
        justifyContent={"center"}
        paddingTop={"30px"}>
        {iphone12.map(item => (
          <Iphone12Card key={item.id} item={item} />
        ))}
      </Box>
    </div>
  );
};

export default Iphone12List;
