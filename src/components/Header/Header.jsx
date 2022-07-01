import {
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import { useNavigate } from "react-router-dom";
import AppleIcon from "@mui/icons-material/Apple";
import { AccountCircle } from "@mui/icons-material";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import LoginIcon from "@mui/icons-material/Login";

const Header = () => {
  const navigate = useNavigate();

  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
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

      <div className="search-box">
        <input
          style={{ marginTop: "5px" }}
          className="search-txt"
          type="text"
          placeholder="Search..."
        />
        <SearchIcon sx={{ paddingTop: "5px" }} className="search-icon" />
      </div>

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
    </div>
  );
};

export default Header;
