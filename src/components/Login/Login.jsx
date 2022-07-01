import {
  Alert,
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../contexts/authContext";

const Login = () => {
  const { login, error } = useContext(authContext);

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleValues() {
    if (!email || !password) {
      alert("заполните поля!");
      return;
    }
    login(email, password, navigate);
  }

  return (
    <Container>
      <Box className="box-login">
        {error ? <Alert severity="error">{error}</Alert> : null}

        <p className="log-in">Log in</p>
        <TextField
          value={email}
          onChange={e => setEmail(e.target.value)}
          sx={{ marginBottom: "10px" }}
          id="outlined-basic"
          label="Email"
          variant="outlined"
        />
        <TextField
          value={password}
          onChange={e => setPassword(e.target.value)}
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <Button
          onClick={handleValues}
          sx={{ marginTop: "10px" }}
          variant="outlined">
          Log in
        </Button>
        <Typography>
          Don't have a registered account? <a href="/register">Sign up</a>
        </Typography>
      </Box>
    </Container>
  );
};

export default Login;
