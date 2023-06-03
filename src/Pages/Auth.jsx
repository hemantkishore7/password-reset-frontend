import { Box, Button, Link, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

function Auth() {
  const [isSignup, setIsSignup] = useState(false);
  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
  });
  const [signUpData, setSignUpData] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleChange({ currentTarget: TextField }) {
    setSignInData({ ...signInData, [TextField.name]: TextField.value });
  }
  log

  //handleSubmit
  async function handleSubmit(e) {
    e.preventDefault();
    try {
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
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
            {isSignup ? "Sign Up" : "Sign in"}
          </Typography>

          {isSignup && (
            <TextField
              type="text"
              variant="outlined"
              placeholder="Name"
              margin="normal"
              value={signUpData.name}
              onChange={handleChange}
            />
          )}

          <TextField
            type="email"
            variant="outlined"
            placeholder="Email"
            margin="normal"
            value={signInData.email}
            onChange={handleChange}
          />
          <TextField
            type="password"
            variant="outlined"
            placeholder="Password"
            margin="normal"
            value={signInData.password}
            onChange={handleChange}
          />
          <Button
            variant="contained"
            color="secondary"
            sx={{ marginTop: 3, borderRadius: 5 }}
          >
            {isSignup ? "signup" : "login"}
          </Button>
          {!isSignup && (
            <Link href="#" underline="hover" padding={2}>
              Forget Password
            </Link>
          )}
          <Button
            onClick={() => setIsSignup(!isSignup)}
            variant="outlined"
            color="secondary"
            sx={{ marginTop: 3, borderRadius: 5 }}
          >
            Switch to Sign-Up
          </Button>
        </Box>
      </form>
    </div>
  );
}

export default Auth;
