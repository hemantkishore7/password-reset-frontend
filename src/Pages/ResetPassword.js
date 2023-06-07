import { Alert, Box, Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function ResetPassword() {
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [validUrl, setValidUrl] = useState(false);
  const { id, token } = useParams();
  const navigate = useNavigate();

  const verifyUrl = async () => {
    try {
      await axios.get(
        `https://password-reset-9tmp.onrender.com/api/password-reset/${id}/${token}`
      );
      setValidUrl(true);
    } catch (error) {
      setValidUrl(false);
      console.log(error);
    }
  };

  verifyUrl()

  // useEffect(() => verifyUrl(), []);

  console.log(validUrl);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const { data } = await axios.post(`/api/password-reset/${id}/${token}`, {
        password,
      });
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
        <div className="resetpage">
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
                {error && <Alert severity="error">{error}</Alert>}
                {msg && <Alert severity="success">{msg}</Alert>}
              </Box>
              <Button
                variant="contained"
                color="success"
                sx={{ borderRadius: 3 }}
                type="submit"
              >
                Submit
              </Button>
            </Box>
          </form>
        </div>
      ) : (
        <Typography variant="h2" fontWeight={"bold"}>
          404 Page not Found
        </Typography>
      )}
    </>
  );
}

export default ResetPassword;
