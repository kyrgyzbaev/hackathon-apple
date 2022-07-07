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
import { iphone13Context } from "../../contexts/iphone13Context";
import { iphone12Context } from "../../contexts/iphone12Context";

// title, description, price, image

const EditProductForm = () => {
  const { getOneIphone12, oneIphone12, updateIphone12 } =
    useContext(iphone12Context);
  const { id } = useParams();
  const navigate = useNavigate();
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  function handleValues() {
    let editedProduct = {
      image,
      title,
      price,
      description,
    };
    if (!title.trim() || !description.trim() || !price || !image.trim()) {
      alert("заполните поля!");
      return;
    }
    updateIphone12(id, editedProduct);
    navigate("/iphone-12");
  }
  useEffect(() => {
    getOneIphone12(id);
  }, []);
  useEffect(() => {
    if (oneIphone12) {
      setTitle(oneIphone12.title);
      setPrice(oneIphone12.price);
      setImage(oneIphone12.image);
      setDescription(oneIphone12.description);
    }
  }, [oneIphone12]);
  return oneIphone12 ? (
    <Container maxWidth="sm">
      <Breadcrumbs aria-label="breadcrumb">
        <p onClick={() => navigate("/iphone-13")}>iPhone 12</p>
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
        <p className="edit-m-p">Edit iPhone</p>
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
          type="number"
          value={price}
          onChange={e => setPrice(+e.target.value)}
          id="standard-basic"
          label="Price"
          variant="standard"
          style={{ margin: "10px" }}
        />

        <TextField
          value={description}
          onChange={e => setDescription(e.target.value)}
          id="standard-basic"
          label="Description"
          variant="standard"
          style={{ margin: "10px" }}
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

export default EditProductForm;
