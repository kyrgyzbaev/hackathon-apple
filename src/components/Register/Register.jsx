import { Alert, Box, Button, Container, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../contexts/authContext";

const Register = () => {
  const { signUp, error } = useContext(authContext);

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  function handleValues() {
    if (!email || !password) {
      alert("заполните поля!");
      return;
    }
    signUp(email, password, navigate);
  }

  return (
    <Container>
      <Box className="box-register">
        {error ? <Alert severity="error">{error}</Alert> : null}
        <p className="register-p">Register</p>
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
          sx={{ marginBottom: "10px" }}
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />

        <TextField
          value={passwordConfirmation}
          onChange={e => setPasswordConfirmation(e.target.value)}
          id="outlined-password-input"
          label="Password Confirmation"
          type="password"
          autoComplete="current-password"
        />

        <Button
          onClick={handleValues}
          sx={{ marginTop: "10px" }}
          variant="outlined">
          Register
        </Button>
      </Box>
    </Container>
  );
};

export default Register;
