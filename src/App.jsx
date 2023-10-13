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
import Products from './pages/Products'

function App() {
  const mode = useSelector((state) => state.mode)
  const theme = React.useMemo(() => createTheme(themeSettings(mode)), [mode])

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Products />} />
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
