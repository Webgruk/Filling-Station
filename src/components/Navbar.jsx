import {
  Box,
  useMediaQuery,
  useTheme,
  // Typography,
  List,
  ListItemButton,
  ListItemText,
  ListItem,
  Divider,
  IconButton,
} from '@mui/material'
import FlexBetween from '../utils/FlexBetween'

import logo from '../assets/images/ardova-logo.png'
import { useState } from 'react'
import ModeNightIcon from '@mui/icons-material/ModeNight'
import WbSunnyIcon from '@mui/icons-material/WbSunny'
import { useDispatch } from 'react-redux'
import { setMode } from '../States/index'
import './navbar.css'

import MenuIcon from '@mui/icons-material/Menu'
import Sidebar from './Sidebar'
import { Link } from 'react-router-dom'

function Navbar() {
  const dispatch = useDispatch()
  const theme = useTheme()

  const isMobileScreen = useMediaQuery('(min-width:1115px')
  const [open, setOpen] = useState(false)
  const [visible, setVisible] = useState('')

  const toggleSidebar = () => {
    setOpen(true)
  }

  const dark = theme.palette.background.alt
  const mode = theme.palette.mode
  return (
    <div>
      <FlexBetween
        padding="0.5rem 6%"
        backgroundColor={dark}
        style={{ opacity: 0.8 }}
        position="fixed"
        width="100vw"
        fontSize="2rem"
        zIndex="100"
      >
        <Box component="img" src={logo} height="3.7rem" />

        {isMobileScreen && (
          <Box>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div
                className="nav-link"
                onMouseEnter={() => setVisible('tab1')}
                onMouseLeave={() => setVisible('')}
              >
                <Link
                  to="/"
                  style={{
                    padding: '0rem 2rem',
                    textDecoration: 'none',
                    color: mode === 'light' ? 'black' : 'white',
                    fontSize: '1.5rem',
                  }}
                >
                  Home
                </Link>
                {/* {visible === 'tab1' ? (
                  <div className="dropdown">
                    <List sx={{ background: `${dark}` }}>
                      <ListItem disablePadding>
                        <ListItemButton>
                          <ListItemText primary="List item 1" />
                        </ListItemButton>
                      </ListItem>
                      <Divider />
                      <ListItem>
                        <ListItemText
                          primary="List item 2"
                          secondary="Secondary text"
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="List item 3" />
                      </ListItem>
                    </List>
                  </div>
                ) : null} */}
              </div>
              <div
                className="nav-link"
                onMouseEnter={() => setVisible('tab2')}
                onMouseLeave={() => setVisible('')}
              >
                <Link
                  to="/product"
                  style={{
                    padding: '0rem 2rem',
                    textDecoration: 'none',
                    color: mode === 'light' ? 'black' : 'white',

                    fontSize: '1.5rem',
                  }}
                >
                  Product
                </Link>
                {visible === 'tab2' ? (
                  <div className="dropdown">
                    <List sx={{ background: `${dark}`, width: '200px' }}>
                      <ListItem>
                        <ListItemButton>
                          <ListItemText primary="Ap lubricants" />
                        </ListItemButton>
                      </ListItem>
                      <Divider />
                      <ListItem>
                        <ListItemButton>
                          <ListItemText primary="shell lubricants" />
                        </ListItemButton>
                      </ListItem>
                      <Divider />
                      <ListItem>
                        <ListItemButton>
                          <ListItemText primary="Liquified Petrol Gas" />
                        </ListItemButton>
                      </ListItem>
                      <Divider />
                      <ListItem>
                        <ListItemButton>
                          <ListItemText primary="Renewable Energy" />
                        </ListItemButton>
                      </ListItem>
                      <Divider />
                      <ListItem>
                        <ListItemButton>
                          <ListItemText primary="Air Ap (Aviation)" />
                        </ListItemButton>
                      </ListItem>
                    </List>
                  </div>
                ) : null}
              </div>
            </div>
          </Box>
        )}
        {isMobileScreen ? (
          <Box>
            <IconButton onClick={() => dispatch(setMode())}>
              {theme.palette.mode === 'light' ? (
                <ModeNightIcon sx={{ color: '#111', fontSize: '25px' }} />
              ) : (
                <WbSunnyIcon sx={{ color: { dark }, fontSize: '25px' }} />
              )}
            </IconButton>
          </Box>
        ) : (
          <div>
            <IconButton onClick={toggleSidebar}>
              <MenuIcon fontSize="large" />
            </IconButton>

            <Sidebar open={open} setOpen={setOpen} />
          </div>
        )}
      </FlexBetween>
    </div>
  )
}

export default Navbar
