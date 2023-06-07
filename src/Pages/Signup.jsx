import { Alert, Box, Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [signUpData, setSignUpData] = useState({
    name: "",
    mobile:"",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/signup", signUpData);
      setMsg(data.message);
      // { <Alert severity="success">{msg}</Alert>}
      navigate("/");
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
        // {<Alert severity="error">{error}</Alert>}
      }
    }
  }

  function handleChange(e) {
    setSignUpData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }
  console.log(signUpData);

  return (
    <div className="signuppage">
      {msg && <Alert severity="success">{msg}</Alert>}
      <form onSubmit={handleSubmit}>
        <Box
          display={"flex"}
          flexDirection={"column"}
          maxWidth={400}
          alignItems={"center"}
          justifyContent={"center"}
          margin={"auto"}
          marginTop={5}
          padding={3}
          borderRadius={5}
          boxShadow={"5px 5px 10px #ccc"}
          sx={{
            ":hover": {
              boxShadow: "12px 12px 22px #ccc",
            },
          }}
        >
          <Typography variant="h3" padding={3} alignItems={"center"}>
            Sign-Up
          </Typography>

          <TextField
            type="text"
            variant="outlined"
            placeholder="Name"
            margin="normal"
            //value={signUpData.name}
            onChange={handleChange}
            required
            name="name"
          />

          <TextField
            type="number"
            variant="outlined"
            placeholder="Mobile"
            margin="normal"
            //value={signUpData.name}
            onChange={handleChange}
            required
            name="mobile"
          />

          <TextField
            type="email"
            variant="outlined"
            placeholder="Email"
            margin="normal"
            //value={signInData.email}
            onChange={handleChange}
            required
            name="email"
          />
          <TextField
            type="password"
            variant="outlined"
            placeholder="Password"
            margin="normal"
            //value={signInData.password}
            onChange={handleChange}
            required
            name="password"
          />
          <Button
            variant="contained"
            color="success"
            sx={{ marginTop: 3, borderRadius: 5 }}
            type="submit"
          >
            Create Account
          </Button>
        </Box>
      </form>
    </div>
  );
}

export default Signup;
