import { Button } from "@mui/material";
import React, { useContext, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { authContext } from "../../contexts/authContext";
import { commentsContext } from "../../contexts/commentsContext";

const CommentsContainer = ({ item }) => {
  const navigate = useNavigate();
  const { deleteComments } = useContext(commentsContext);
  const { isAdmin } = useContext(authContext);
  // const { addProductToCart, checkProductInCart } = useContext(menscartContext);
  // const [checkProduct, setCheckProduct] = useState(checkProductInCart(item));

  // console.log(item);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "50px",
        marginBottom: "50px",
      }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="comments-container-p">
        <p className="name-p">
          {item.nick}
          {":"}
        </p>
        <p className="comment-p">{item.comments}</p>
      </div>
      <div className="">
        {isAdmin ? (
          <>
            <Button
              size="small"
              onClick={() => navigate(`/edit-comments/${item.id}`)}>
              <EditIcon className="edit-icon" />
            </Button>
            <Button size="small" onClick={() => deleteComments(item.id)}>
              <DeleteIcon className="delete-icon" />
            </Button>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default CommentsContainer;
