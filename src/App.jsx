import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
// import { useMemo } from 'react';
import React from 'react'
import { themeSettings } from './theme'
import { useSelector } from 'react-redux'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  const mode = useSelector((state) => state.mode)
  const theme = React.useMemo(() => createTheme(themeSettings(mode)), [mode])

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Home />} />
        {/* <Route path="/" element={<Footer />} /> */}
      </Route>,
    ),
  )

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
