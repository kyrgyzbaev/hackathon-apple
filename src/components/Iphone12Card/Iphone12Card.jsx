import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { authContext } from "../../contexts/authContext";
import { iphone12Context } from "../../contexts/iphone12Context";
import { macbookProCart } from "../../contexts/macbookProCart";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

const Iphone12Card = ({ item }) => {
  const navigate = useNavigate();
  const { deleteIphone12 } = useContext(iphone12Context);
  const { isAdmin } = useContext(authContext);
  const { addProductToCart, checkProductInCart } = useContext(macbookProCart);
  const [checkProduct, setCheckProduct] = useState(checkProductInCart(item));
  // const { addProductToCart, checkProductInCart } = useContext(menscartContext);
  // const [checkProduct, setCheckProduct] = useState(checkProductInCart(item));

  // console.log(item);

  return (
    <div className="card-13-pro">
      <CardMedia
        component="img"
        alt="green iguana"
        sx={{ maxWidth: "190px" }}
        // height="100%"
        // width="100%"
        image={item.image}
      />
      <div className="card-2">
        <p className="p-1" component="div">
          {item.title}
        </p>
        <p className="p-2">{item.description}</p>
        <p className="p-3">
          {"$ "}
          {item.price}
        </p>
        <button className="mac-buy">Buy</button>

        <a
          className="learn-more"
          onClick={() => navigate(`/iphone-12/${item.id}`)}
          href="">
          Learn more
        </a>

        {/* <p className="p-5">
          {item.description.length > 20
            ? `${item.description.slice(0, 15)}... `
            : item.description}
        </p> */}
      </div>
      <div className="card-icons">
        {isAdmin ? (
          <>
            <Button size="small" onClick={() => deleteIphone12(item.id)}>
              <DeleteIcon className="delete-icon" />
            </Button>
            <Button
              size="small"
              onClick={() => navigate(`/edit-iphone-12/${item.id}`)}>
              <EditIcon className="edit-icon" />
            </Button>
          </>
        ) : null}
      </div>
      <Button
        onClick={() => {
          addProductToCart(item);
          setCheckProduct(checkProductInCart(item));
        }}
        size="small">
        {checkProduct ? (
          <BookmarkIcon onClick={() => navigate("/cart")} />
        ) : (
          <BookmarkBorderIcon onClick={() => navigate("/cart")} />
        )}
      </Button>
    </div>
  );
};

export default Iphone12Card;
