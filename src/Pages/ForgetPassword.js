import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";

function ForgetPassword() {
  return (
    <div>
      <form>
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
            ":hover":{
                boxShadow:"10px 10px 20px #ccc"
            }
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
            type="text"
            variant="outlined"
            margin="normal"
          />
          <Button variant="contained" color="success">
            Send Mail
          </Button>
        </Box>
      </form>
    </div>
  );
}

export default ForgetPassword;
