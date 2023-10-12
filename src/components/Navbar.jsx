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
  Tabs,
  Tab,
  IconButton,
  Menu,
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
function Navbar() {
  const dispatch = useDispatch()
  const theme = useTheme()

  const isMobileScreen = useMediaQuery('(min-width:1115px')
  const [open, setOpen] = useState(false)

  const [value, setValue] = useState('home')
  const [tab1, setTab1] = useState(null)
  const [tab2, setTab2] = useState(null)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const handleTab1 = (e) => {
    setTab1(e.currentTarget)
  }

  const closeTab1 = () => {
    setTab1(null)
  }

  const handleTab2 = (e) => {
    setTab2(e.currentTarget)
  }
  const closeTab2 = () => {
    setTab2(null)
  }

  const toggleSidebar = () => {
    setOpen(true)
  }
  const dark = theme.palette.background.alt
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
            <Tabs
              value={value}
              onChange={handleChange}
              textColor="primary"
              indicatorColor="primary"
              aria-label="secondary tabs example"
              sx={{ fontSize: '5rem' }}
            >
              <Tab
                value="home"
                label="Home"
                // size="large"
                // aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleTab1}
                color="inherit"
              />

              <Tab
                value="products"
                label="Our Products"
                aria-controls="tab2"
                aria-haspopup="true"
                onClick={handleTab2}
                color="inherit"
              />

              <Tab value="investor" label="Investor Relation" />
              <Tab value="governance" label="Governance" />
              <Tab value="careers" label="Careers" />
              <Tab value="media" label="Media" />
              <Tab value="about" label="About Us" />
              <Tab value="contact" label="Contact Us" />
            </Tabs>
            <div
              style={{
                position: 'absolute',
                display: 'flex',
                alignItems: 'center',
                width: '60%',
              }}
            >
              {/* ///////////////////////////////////1 */}
              <Menu
                id="menu-appbar"
                anchorEl={tab1}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(tab1)}
                onClose={closeTab1}
              >
                <List>
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
              </Menu>

              {/* ///////////////////////////////////2 */}
              <Menu
                id="tab2"
                anchorEl={tab2}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(tab2)}
                onClose={closeTab2}
              >
                <List>
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
              </Menu>

              {/* /////////////////////////////////// 3*/}
              {/* <Box
                sx={{
                  width: '100px',
                  display: 'block',
                  zIndex: 1000,
                  borderRadius: '10px',
                  backgroundColor: `${dark}`,

                  marginLeft: '50px',
                }}
              >
                <List>
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
              </Box> */}

              {/* ///////////////////////////////////5 */}

              {/* <Box
                sx={{
                  width: '100px',
                  bgcolor: '#efefef',
                  display: 'block',
                  zIndex: 1000,
                  borderRadius: '10px',
                  backgroundColor: `${dark}`,

                  marginLeft: '30px',
                }}
              >
                <List>
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
              </Box>
              <Box
                sx={{
                  width: '100px',
                  bgcolor: '#efefef',
                  display: 'block',
                  backgroundColor: `${dark}`,

                  zIndex: 1000,
                  borderRadius: '10px',
                  left: '100px',
                }}
              >
                <List>
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
              </Box> */}

              {/* ///////////////////////////////////6 */}

              {/* <Box
                sx={{
                  width: '100px',
                  bgcolor: '#efefef',
                  display: 'block',
                  backgroundColor: `${dark}`,

                  zIndex: 1000,
                  borderRadius: '10px',

                  left: '100px',
                }}
              >
                <List>
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
              </Box> */}
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
