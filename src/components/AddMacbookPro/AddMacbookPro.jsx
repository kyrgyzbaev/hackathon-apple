import {
  Box,
  Breadcrumbs,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { macProContext } from "../../contexts/macbookPro";

const AddMacbookPro = () => {
  const { createMacPro } = useContext(macProContext);
  const navigate = useNavigate();

  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [chip, setChip] = useState("");
  const [price, setPrice] = useState("");
  const [screenSize, setScreenSize] = useState("");
  const [description, setDescription] = useState("");

  function handleValues() {
    let newMacPro = {
      image,
      title,
      chip,
      price,
      screenSize,
      description,
    };
    if (
      !image.trim() ||
      !title.trim() ||
      !price ||
      !screenSize ||
      !description.trim() ||
      !chip.trim()
    ) {
      alert("fill in the fields!");
      return;
    }
    createMacPro(newMacPro);
    navigate("/macbook-pro");
  }
  return (
    <Container maxWidth="sm">
      <Breadcrumbs aria-label="breadcrumb">
        {/* <Link
          fontFamily={"-moz-initial"}
          underline="hover"
          color="inherit"
          href="/macbook-pro">
          MacBook Pro
        </Link> */}
        <p onClick={() => navigate("/macbook-pro")}>MacBook Pro</p>
        <Typography fontFamily={"-moz-initial"} color="text.primary">
          Add
        </Typography>
      </Breadcrumbs>
      <Box
        display={"flex"}
        flexDirection={"column"}
        padding={"30px"}
        textAlign={"center"}>
        <p className="add-m-t">Add new mac</p>

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
          value={chip}
          onChange={e => setChip(e.target.value)}
          label="Chip"
          variant="standard"
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
          value={screenSize}
          onChange={e => setScreenSize(e.target.value)}
          label="Screen size and Display"
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
          Add mac
        </button>
      </Box>
    </Container>
  );
};

export default AddMacbookPro;
