import { Alert, Box, Button, Link, TextField, Typography } from "@mui/material";

import axios from "axios";
import React, { useState } from "react";

function ForgetPassword() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post("/api/password-reset", { email });
      setMsg(data.message);
      setError("");
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
        setMsg("");
      }
    }
  };

  console.log(msg);
  return (
    <div className="forgotpage">
      <form onSubmit={handleSubmit}>
        <Box
          display="flex"
          flexDirection={"column"}
          maxWidth={400}
          alignItems={"center"}
          justifyContent={"center"}
          margin={"auto"}
          marginTop={5}
          padding={3}
          borderRadius={5}
          boxShadow={"10px 10px 10px #ccc"}
          sx={{
            ":hover": {
              boxShadow: "10px 10px 20px #ccc",
            },
          }}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            textAlign="center"
            margin="auto"
          >
            Forget Password
          </Typography>
          <TextField
            placeholder="Enter valid e-mail"
            type="email"
            variant="outlined"
            margin="normal"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Box
            display={"flex"}
            flexDirection={"column"}
            margin={2}
            textAlign={"center"}
          >
            {
              error && <Alert  severity="error">{error}</Alert>
            }
            {
              msg && <Alert severity="success">{msg}</Alert>
            }
          </Box>
          <Button variant="contained" color="success" type="submit">
            Send Mail 
          </Button>
          <Link
            href="/"
            underline="hover" padding={2}
             color={"blanchedalmond"}
          >
            Back to Login
          </Link>
        </Box>
      </form>
    </div>
  );
}

export default ForgetPassword;
