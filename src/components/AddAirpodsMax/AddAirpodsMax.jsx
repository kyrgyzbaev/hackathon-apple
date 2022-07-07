import React, { useContext, useState } from "react";
import {
  Box,
  Breadcrumbs,
  Container,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { airpodsMaxContext } from "../../contexts/airpodsMaxContext";

// title, description, price, image

const AddAirpodsMax = () => {
  const { createAirpodsMax } = useContext(airpodsMaxContext);
  const navigate = useNavigate();

  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  function handleValues() {
    let newAirpodsMax = {
      image,
      title,
      price,
    };
    if (!image.trim() || !title.trim() || !price) {
      alert("fill in the fields!");
      return;
    }
    createAirpodsMax(newAirpodsMax);
    navigate("/airpods-max");
  }

  return (
    <Container maxWidth="sm">
      <Breadcrumbs aria-label="breadcrumb">
        <p onClick={() => navigate("/airpods-max")}>iPhone 13 Pro</p>
        <Typography fontFamily={"-moz-initial"} color="text.primary">
          Add
        </Typography>
      </Breadcrumbs>
      <Box
        display={"flex"}
        flexDirection={"column"}
        padding={"30px"}
        textAlign={"center"}>
        <p className="add-m-t">Add new AirPods</p>

        <TextField
          value={image}
          onChange={e => setImage(e.target.value)}
          id="standard-basic"
          label="Image"
          variant="standard"
          style={{ margin: "10px" }}
        />
        <TextField
          value={title}
          onChange={e => setTitle(e.target.value)}
          label="Title"
          variant="standard"
          style={{ margin: "10px" }}
        />

        <TextField
          type={"number"}
          value={price}
          onChange={e => setPrice(+e.target.value)}
          label="Price"
          variant="standard"
          style={{ margin: "10px" }}
        />

        <button
          className="add-mens-btn"
          onClick={handleValues}
          style={{ margin: "10px" }}
          variant="contained">
          Add AirPods Max
        </button>
      </Box>
    </Container>
  );
};

export default AddAirpodsMax;
