import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'

import React from 'react'

function Header() {
  return (
    <Box display={"flex"}> 
    <AppBar component="fixed">
   <Toolbar>
   <Typography variant='h5' fontWeight={"bold"} textAlign="center" margin={"auto"}>
    HOME
   </Typography>
     <Button variant='text' color='inherit' >Logout</Button>
   </Toolbar>
    </AppBar>
    </Box>
  )
}

export default Header