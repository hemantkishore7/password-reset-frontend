import { Box, Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function ResetPassword() {
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [validUrl, setValidUrl] = useState(false);
  const param = useParams();
  const navigate = useNavigate();

  const url = `https://password-reset-9tmp.onrender.com/api/password-reset/${param.id}/${param.token}`;

  useEffect(() => {
    const verifyUrl = async () => {
      try {
        await axios.get(url);
        setValidUrl(true);
      } catch (error) {
        setValidUrl(false);
      }
      verifyUrl();
    };
  }, [param, url]);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const { data } = await axios.post(`/api/password-reset/${param.id}/${param.token}`, { password });
      setMsg(data.message);
      setError("");
      navigate("/");
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
  return (
    <>
    {validUrl ? (
    <div>
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
            Reset Password
          </Typography>
          <TextField
            placeholder="Enter New Password"
            type="password"
            variant="outlined"
            margin="normal"
            name="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <Box
            display={"flex"}
            flexDirection={"column"}
            margin={2}
            textAlign={"center"}
          >
            {error && <Typography color={"red"}>{error}</Typography>}
            {msg && <Typography color={"green"}>{msg}</Typography>}
          </Box>
          <Button variant="contained" color="success" sx={{ borderRadius: 3 }}>
            Submit
          </Button>
        </Box>
      </form>
    </div>
    ) : (<h1>404 Not Found</h1> 
    )}
    </>
  );
}

export default ResetPassword;
