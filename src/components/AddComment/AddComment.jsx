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
import { commentsContext } from "../../contexts/commentsContext";

// title, description, price, image

const AddAirpodsMax = () => {
  const { createComments } = useContext(commentsContext);
  const navigate = useNavigate();

  const [nick, setNick] = useState("");
  const [comments, setComments] = useState("");

  function handleValues() {
    let newComments = {
      nick,
      comments,
    };
    if (!nick.trim() || !comments.trim()) {
      alert("fill in the fields!");
      return;
    }
    createComments(newComments);
    navigate("/comments");
  }

  return (
    <Container maxWidth="sm">
      <Breadcrumbs>
        <p style={{ cursor: "pointer" }} onClick={() => navigate("/comments")}>
          Comments
        </p>
        <Typography>Add Comment</Typography>
      </Breadcrumbs>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "300px",
          justifyContent: "center",
        }}>
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
          label="Comment"
          variant="standard"
          style={{ margin: "10px" }}
        />

        <button
          className="add-mens-btn"
          onClick={handleValues}
          style={{ margin: "10px" }}
          variant="contained">
          Add Comment
        </button>
      </Box>
    </Container>
  );
};

export default AddAirpodsMax;
