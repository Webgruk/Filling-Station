import { Box, useTheme } from '@mui/material'
// import React from 'react'
import backgroundImg from '../assets/images/ap-station-1.jpg'

function Body() {
  const theme = useTheme()

  // Use a valid color code for the background color
  const Color = theme.palette.mode === 'light' ? '#ccc' : '#000'

  return (
    <div
      style={{
        background: `url(${backgroundImg})`,
        backgroundSize: 'auto 1450px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100%',
      }}
    >
      <div
        style={{
          height: '100vh',
          opacity: '0.8',
          backgroundColor: `${Color}`,
        }}
      ></div>
    </div>
  )
}

export default Body
