import {
  alpha,
  Box,
  Button,
  Container,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Typography,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppleIcon from "@mui/icons-material/Apple";
import { AccountCircle } from "@mui/icons-material";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import LoginIcon from "@mui/icons-material/Login";
import { macProContext } from "../../contexts/macbookPro";
import MacBookProCard from "../MacBookProCard/MacBookProCard";
import axios from "axios";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import FavoriteIcon from "@mui/icons-material/Favorite";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  border: "1px solid grey",
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "innerhit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const Header = ({ search, setSearch }) => {
  const navigate = useNavigate();

  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const { getMacPro, macPro } = useContext(macProContext);

  const [anchorElBag, setAnchorElBag] = React.useState(null);
  const open = Boolean(anchorElBag);
  const handleClick = event => {
    setAnchorElBag(event.currentTarget);
  };
  const handleCloseBag = () => {
    setAnchorElBag(null);
  };

  return (
    <div className="header">
      <AppleIcon
        sx={{ paddingTop: "8px" }}
        onClick={() => navigate("/shop")}
        className="apple-icon"
      />
      <p onClick={() => navigate("/macs")}>Mac</p>
      <p onClick={() => navigate("/iphones")}>iPhone</p>
      <p onClick={() => navigate("/airpods")}>AirPods</p>

      {/* <div className="search-box">
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{ marginTop: "5px" }}
          className="search-txt"
          type="text"
          placeholder="Search..."
        />
        <SearchIcon sx={{ paddingTop: "5px" }} className="search-icon" />
      </div> */}

      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit">
        <AccountCircle className="account-icon" />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}>
        <MenuItem onClick={handleClose}>
          <LoginIcon sx={{ marginRight: "6px" }} />
          <a className="login-a" href="/login">
            Log in
          </a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          {" "}
          <AppRegistrationIcon sx={{ marginRight: "5px" }} />
          <a className="register-a" href="/register">
            Sign in
          </a>{" "}
        </MenuItem>
      </Menu>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}>
        <ShoppingBagIcon className="shopping-bag-icon" />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorElBag}
        open={open}
        onClose={handleCloseBag}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}>
        <MenuItem onClick={handleCloseBag}>
          <BookmarksIcon onClick={() => navigate("/cart")} />
        </MenuItem>
        <MenuItem onClick={handleCloseBag}>
          <InsertCommentIcon onClick={() => navigate("/comments")} />
        </MenuItem>
      </Menu>
    </div>
  );
};

export default Header;
