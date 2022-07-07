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
import { iphone13Context } from "../../contexts/iphone13Context";

// title, description, price, image

const AddIphone13 = () => {
  const { createIphone13 } = useContext(iphone13Context);
  const navigate = useNavigate();

  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  function handleValues() {
    let newIphone13 = {
      image,
      title,
      price,
      description,
    };
    if (!image.trim() || !title.trim() || !price || !description.trim()) {
      alert("fill in the fields!");
      return;
    }
    createIphone13(newIphone13);
    navigate("/iphone-13");
  }

  return (
    <Container maxWidth="sm">
      <Breadcrumbs aria-label="breadcrumb">
        <p onClick={() => navigate("/iphone-13")}>iPhone 13 Pro</p>
        <Typography fontFamily={"-moz-initial"} color="text.primary">
          Add
        </Typography>
      </Breadcrumbs>
      <Box
        display={"flex"}
        flexDirection={"column"}
        padding={"30px"}
        textAlign={"center"}>
        <p className="add-m-t">Add new iPhone</p>

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

        <TextField
          value={description}
          onChange={e => setDescription(e.target.value)}
          variant="standard"
          label="Description"
        />

        <button
          className="add-mens-btn"
          onClick={handleValues}
          style={{ margin: "10px" }}
          variant="contained">
          Add iPhone
        </button>
      </Box>
    </Container>
  );
};

export default AddIphone13;
