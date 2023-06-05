import { Box, Typography } from '@mui/material'
import React from 'react'
import Header from '../Component/Header'

function Home() {
  return (
    <>
   
    <Header/>
    <Box width={"100%"} height={"100%"} marginTop={8}>
     <Typography variant='h3' textAlign={"center"}>Welcome Back, User</Typography>
    </Box>
  
    </>
  )
}

export default Home