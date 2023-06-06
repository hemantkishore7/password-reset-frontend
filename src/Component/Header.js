import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'

import React from 'react'
import { useNavigate } from 'react-router-dom'

function Header() {
  const navigate = useNavigate();

  function handleSignOut(){
   localStorage.removeItem("token")
   //window.location.reload();
   navigate("/")
  }
  return (
    <Box display={"flex"}> 
    <AppBar >
   <Toolbar>
   <Typography variant='h5' fontWeight={"bold"} textAlign="center" margin={"auto"}>
    HOME
   </Typography>
     <Button variant='text' color='inherit' onClick={handleSignOut}>Logout</Button>
   </Toolbar>
    </AppBar>
    </Box>
  )
}

export default Header