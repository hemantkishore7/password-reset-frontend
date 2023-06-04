import { Box, Typography } from '@mui/material'
import React from 'react'
import Header from '../Component/Header'

function Home() {
  return (
    <>
    
    <Header/>
    <Box width={100} height={100} display={"flex"} flexDirection={"column"} alignItems={"center"} margin={"auto"} marginTop={5}>
     <Typography>Welcome Back, User</Typography>
    </Box>
      
    </>
  )
}

export default Home