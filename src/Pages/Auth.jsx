import { Alert, Box, Button, Link, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Auth() {
  // const [isSignup, setIsSignup] = useState(false);
  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");

  const navigate = useNavigate();

  function handleChange(e) {
    setSignInData((precState) => ({
      ...precState,
      [e.target.name]: e.target.value,
    }));
  }
  console.log("handlechange ", signInData);

  //For Sign in
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/signin", signInData);
      localStorage.setItem("token", data.data);
      setMsg(data.message);
      navigate("/home");
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
  }
  console.log(msg);
  

  

  return (
    <div className="loginpage">
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
            Sign In
          </Typography>

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
          <Box>
            {msg && <Alert severity="success">{msg}</Alert>}
            {error && <Alert severity="error">{error}</Alert>}
          </Box>
          <Button
            variant="outlined"
            sx={{ marginTop: 3, borderRadius: 5 }}
            type="submit"
          >
            Sign In
          </Button>

          <Typography marginTop={2}> If you don't have account,&nbsp;
          <Link
            href="/signup"
            underline="hover"
            
            color={"brown"}
          >
            create account
          </Link></Typography>

          <Link
            href="/forget"
            underline="hover"
            marginTop={2}
            color={"brown"}
          >
            Forget Password
          </Link>
        </Box>
      </form>
    </div>
  );
}

export default Auth;
