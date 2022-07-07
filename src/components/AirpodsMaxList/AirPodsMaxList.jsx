import { Box } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { airpodsMaxContext } from "../../contexts/airpodsMaxContext";
import { authContext } from "../../contexts/authContext";
import AirpodsMaxCard from "../AirpodsMaxCard/AirpodsMaxCard";

const AirPodsMaxList = () => {
  const { isAdmin } = useContext(authContext);
  const navigate = useNavigate();
  const { airpodsMax, getAirpodsMax } = useContext(airpodsMaxContext);

  useEffect(() => {
    getAirpodsMax();
  }, []);
  return (
    <div className="all-container-airpods-max-media">
      <div className="container-airpods-max-p">
        <p>AirPods Max</p>
      </div>
      <div className="container-images-airpods-max">
        <img
          className="img-airpods-max"
          src="https://www.apple.com/v/airpods-max/e/images/overview/design_colors_pink_front__dbqafvrvcy6a_xlarge_2x.jpg"
          alt=""
        />
        <img
          className="img-airpods-max-2"
          src="https://www.apple.com/v/airpods-max/e/images/overview/design_colors_pink_side__gd261969pcmu_xlarge_2x.jpg"
          alt=""
        />
        <img
          className="img-airpods-max-3"
          src="https://www.apple.com/v/airpods-max/e/images/overview/magic_smart_case__e1xikczc5eoi_xlarge_2x.jpg"
          alt=""
        />
      </div>
      {isAdmin ? (
        <div className="container-airpods-max">
          <button
            onClick={() => navigate("/add-airpods-max")}
            className="add-iphone-13-pro-btn">
            Add AirPods Max
          </button>
        </div>
      ) : null}
      <Box
        className="box-airpods-max-media"
        display={"flex"}
        flexWrap={"wrap"}
        justifyContent={"center"}
        paddingTop={"30px"}>
        {airpodsMax.map(item => (
          <AirpodsMaxCard key={item.id} item={item} />
        ))}
      </Box>
    </div>
  );
};

export default AirPodsMaxList;
