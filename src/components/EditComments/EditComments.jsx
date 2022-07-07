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
import { commentsContext } from "../../contexts/commentsContext";

// title, description, price, image

const EditProductForm = () => {
  const { getOneComments, oneComments, updateComments } =
    useContext(commentsContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const [nick, setNick] = useState("");
  const [comments, setComments] = useState("");

  function handleValues() {
    let editedProduct = {
      nick,
      comments,
    };
    if (!nick.trim() || !comments.trim()) {
      alert("заполните поля!");
      return;
    }
    updateComments(id, editedProduct);
    navigate("/comments");
  }
  useEffect(() => {
    getOneComments(id);
  }, []);
  useEffect(() => {
    if (oneComments) {
      setNick(oneComments.nick);
      setComments(oneComments.comments);
    }
  }, [oneComments]);
  return oneComments ? (
    <Container maxWidth="sm">
      <TextField
        value={nick}
        onChange={e => setNick(e.target.value)}
        id="standard-basic"
        label="Name"
        variant="standard"
        style={{ margin: "10px" }}
      />
      <TextField
        value={comments}
        onChange={e => setComments(e.target.value)}
        id="standard-basic"
        label="Comment"
        variant="standard"
        style={{ margin: "10px" }}
      />

      <button className="edit-m-btn" onClick={handleValues}>
        Save comment
      </button>
    </Container>
  ) : (
    <Loader />
  );
};

export default EditProductForm;
