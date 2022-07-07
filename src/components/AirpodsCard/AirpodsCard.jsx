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
import { airpodsContext } from "../../contexts/airpodsContext";
import { macbookProCart } from "../../contexts/macbookProCart";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

const AirpodsMaxCard = ({ item }) => {
  const navigate = useNavigate();
  const { deleteAirpods } = useContext(airpodsContext);
  const { isAdmin } = useContext(authContext);
  const { addProductToCart, checkProductInCart } = useContext(macbookProCart);
  const [checkProduct, setCheckProduct] = useState(checkProductInCart(item));
  // const { addProductToCart, checkProductInCart } = useContext(menscartContext);
  // const [checkProduct, setCheckProduct] = useState(checkProductInCart(item));

  // console.log(item);

  return (
    <div className="card-airpods">
      <CardMedia
        component="img"
        alt="green iguana"
        sx={{ maxWidth: "150px", maxHeight: "160px" }}
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
          onClick={() => navigate(`/airpods-max/${item.id}`)}
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
            <Button size="small" onClick={() => deleteAirpods(item.id)}>
              <DeleteIcon className="delete-icon" />
            </Button>
            <Button
              size="small"
              onClick={() => navigate(`/edit-airpods/${item.id}`)}>
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

export default AirpodsMaxCard;
