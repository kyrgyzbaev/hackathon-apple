import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  Breadcrumbs,
  Button,
  Container,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import { macsContext } from "../../contexts/macsContext";
import { macProContext } from "../../contexts/macbookPro";

// title, description, price, image

const EditMacBookPro = () => {
  const { getOneMacPro, oneMacPro, updateMacPro } = useContext(macProContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [chip, setChip] = useState("");
  const [price, setPrice] = useState("");
  const [screenSize, setScreenSize] = useState("");
  const [description, setDescription] = useState("");
  function handleValues() {
    let editedMacPro = {
      image,
      title,
      chip,
      price,
      screenSize,
      description,
    };
    if (
      !title.trim() ||
      !description.trim() ||
      !price ||
      !image.trim() ||
      !screenSize.trim() ||
      !chip.trim()
    ) {
      alert("заполните поля!");
      return;
    }
    updateMacPro(id, editedMacPro);
    navigate("/macbook-pro");
  }
  useEffect(() => {
    getOneMacPro(id);
  }, []);
  useEffect(() => {
    if (oneMacPro) {
      setTitle(oneMacPro.title);
      setPrice(oneMacPro.price);
      setImage(oneMacPro.image);
      setDescription(oneMacPro.description);
      setChip(oneMacPro.chip);
      setScreenSize(oneMacPro.screenSize);
    }
  }, [oneMacPro]);
  return oneMacPro ? (
    <Container maxWidth="sm">
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          fontFamily={"-moz-initial"}
          underline="hover"
          color="inherit"
          href="/">
          Shop
        </Link>
        <Link
          fontFamily={"-moz-initial"}
          underline="hover"
          color="inherit"
          href="/macs">
          Mac
        </Link>
        <Typography fontFamily={"-moz-initial"} color="text.primary">
          Edit
        </Typography>
      </Breadcrumbs>
      <Box
        fontFamily={"-moz-initial"}
        display={"flex"}
        flexDirection={"column"}
        padding={"30px"}
        textAlign={"center"}>
        <p className="edit-m-p">Edit mac</p>
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
          id="standard-basic"
          label="Title"
          variant="standard"
          style={{ margin: "10px" }}
        />
        <TextField
          value={chip}
          onChange={e => setChip(e.target.value)}
          style={{ margin: "10px" }}
          variant="standard"
          label="Chip"
        />
        <TextField
          type="number"
          value={price}
          onChange={e => setPrice(+e.target.value)}
          id="standard-basic"
          label="Price"
          variant="standard"
          style={{ margin: "10px" }}
        />
        <TextField
          value={screenSize}
          onChange={e => setScreenSize(e.target.value)}
          variant="standard"
          style={{ margin: "10px" }}
          label="Screen Size"
        />
        <TextField
          value={description}
          onChange={e => setDescription(e.target.value)}
          id="standard-basic"
          label="Description"
          variant="standard"
        />

        <button className="edit-m-btn" onClick={handleValues}>
          Save product
        </button>
      </Box>
    </Container>
  ) : (
    <Loader />
  );
};

export default EditMacBookPro;
