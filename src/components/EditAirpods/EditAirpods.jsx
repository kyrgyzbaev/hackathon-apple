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
import { airpodsContext } from "../../contexts/airpodsContext";

// title, description, price, image

const EditProductForm = () => {
  const { getAirpods, oneAirpods, updateAirpods } = useContext(airpodsContext);
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
    if (!title.trim() || !price || !image.trim() || !description.trim()) {
      alert("заполните поля!");
      return;
    }
    updateAirpods(id, editedProduct);
    navigate("/airpods");
  }
  useEffect(() => {
    getAirpods(id);
  }, []);
  useEffect(() => {
    if (oneAirpods) {
      setTitle(oneAirpods.title);
      setPrice(oneAirpods.price);
      setImage(oneAirpods.image);
      setDescription(oneAirpods.description);
    }
  }, [oneAirpods]);
  return oneAirpods ? (
    <Container maxWidth="sm">
      <Breadcrumbs aria-label="breadcrumb">
        <p onClick={() => navigate("/airpods-max")}>AirPods Max</p>
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
        <p className="edit-m-p">Edit AirPods</p>
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
