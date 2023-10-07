import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Drawer,
  IconButton,
  Typography,
} from '@mui/material'
import ModeNightIcon from '@mui/icons-material/ModeNight'
import WbSunnyIcon from '@mui/icons-material/WbSunny'
import logo from '../assets/images/ardova-logo.png'
import ExpandMore from '@mui/icons-material/ExpandMore'
import { useDispatch } from 'react-redux'
import { useTheme } from '@emotion/react'
import { setMode } from '../States/index'
import { useState } from 'react'

function Sidebar({ open, setOpen }) {
  const dispatch = useDispatch()
  const theme = useTheme()
  const dark = theme.palette.background.alt
  const green = theme.palette.primary.main

  const [expanded, setExpanded] = useState(false)
  const listItem = ['Home', 'Contact Us', 'Career', 'Our Product']

  const handleChange = (expanded, panel) => {
    setExpanded(expanded ? panel : false)
  }
  return (
    <div>
      <Drawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
        transitionDuration={1300}
      >
        <Box
          p={2}
          role="presentation "
          width="330px"
          textAlign="center"
          sx={{ bgcolor: `${dark} `, height: '100vh' }}
        >
          <Box>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItem: 'center',
              }}
            >
              <div>
                <Box component="img" src={logo} height="3.7rem" />
              </div>
              <div>
                <IconButton onClick={() => dispatch(setMode())}>
                  {theme.palette.mode === 'light' ? (
                    <ModeNightIcon sx={{ color: '#111', fontSize: '25px' }} />
                  ) : (
                    <WbSunnyIcon sx={{ color: { dark }, fontSize: '25px' }} />
                  )}
                </IconButton>
              </div>
            </div>
            <div style={{ height: 'auto', margin: '2rem 0' }}>
              <div>
                <ul
                  style={{
                    textDecoration: 'none',
                    listStyle: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    backgroundColor: `${dark}`,
                    alignItems: 'start',
                    padding: '0.8rem',
                  }}
                >
                  {listItem.map((item, index) => {
                    return (
                      <li key={index} style={{ margin: '15px 2px' }}>
                        <Typography variant="h6"> {item}</Typography>
                      </li>
                    )
                  })}
                </ul>
              </div>
              <div>
                <Accordion
                  disableGutters
                  sx={{ boxShadow: 'none' }}
                  expanded={expanded === 'panel1'}
                  onChange={(event, isExpanded) =>
                    handleChange(isExpanded, 'panel1')
                  }
                >
                  <AccordionSummary
                    id="panel1-header"
                    aria-controls="panel1-content"
                    sx={{
                      backgroundColor: `${dark}`,
                    }}
                    expandIcon={<ExpandMore />}
                  >
                    <Typography variant="h6">Our Products</Typography>
                  </AccordionSummary>
                  <AccordionDetails
                    sx={{
                      backgroundColor: `${dark}`,
                    }}
                  >
                    <Typography>lslsl</Typography>
                  </AccordionDetails>
                </Accordion>

                {/* //////////////////////2 */}
                <Accordion
                  sx={{ boxShadow: 'none' }}
                  disableGutters
                  expanded={expanded === 'panel2'}
                  onChange={(event, isExpanded) =>
                    handleChange(isExpanded, 'panel2')
                  }
                >
                  <AccordionSummary
                    squre
                    id="panel2-header"
                    aria-controls="panel2-content"
                    sx={{
                      backgroundColor: `${dark}`,
                    }}
                    expandIcon={<ExpandMore />}
                  >
                    <Typography variant="h6">About Us</Typography>
                  </AccordionSummary>
                  <AccordionDetails
                    sx={{
                      backgroundColor: `${dark}`,
                    }}
                  >
                    eeels
                  </AccordionDetails>
                </Accordion>

                {/* /////////////////////////3 */}
                <Accordion
                  sx={{ boxShadow: 'none' }}
                  square={true}
                  disableGutters
                  expanded={expanded === 'panel3'}
                  onChange={(event, isExpanded) =>
                    handleChange(isExpanded, 'panel3')
                  }
                >
                  <AccordionSummary
                    id="panel3-header"
                    aria-controls="panel3-content"
                    sx={{
                      backgroundColor: `${dark}`,
                    }}
                    expandIcon={<ExpandMore />}
                  >
                    <Typography variant="h6">Investor Relation</Typography>
                  </AccordionSummary>
                  <AccordionDetails
                    sx={{
                      backgroundColor: `${dark}`,
                    }}
                  >
                    investo content
                  </AccordionDetails>
                </Accordion>

                {/* /////////////////////////4 */}
                <Accordion
                  sx={{ boxShadow: 'none' }}
                  disableGutters
                  expanded={expanded === 'panel4'}
                  onChange={(event, isExpanded) =>
                    handleChange(isExpanded, 'panel4')
                  }
                >
                  <AccordionSummary
                    id="panel4-header"
                    aria-controls="panel4-content"
                    sx={{
                      backgroundColor: `${dark}`,
                    }}
                    expandIcon={<ExpandMore />}
                  >
                    <Typography variant="h6">Governance</Typography>
                  </AccordionSummary>
                  <AccordionDetails
                    sx={{
                      backgroundColor: `${dark}`,
                    }}
                  >
                    governance conte t
                  </AccordionDetails>
                </Accordion>

                {/* ///////////////5 */}
                <Accordion
                  sx={{ boxShadow: 'none' }}
                  disableGutters
                  expanded={expanded === 'panel5'}
                  onChange={(event, isExpanded) =>
                    handleChange(isExpanded, 'panel5')
                  }
                >
                  <AccordionSummary
                    id="panel5-header"
                    aria-controls="panel5-content"
                    sx={{
                      backgroundColor: `${dark}`,
                    }}
                    expandIcon={<ExpandMore />}
                  >
                    <Typography variant="h6">lslss</Typography>
                  </AccordionSummary>
                  <AccordionDetails
                    sx={{
                      backgroundColor: `${dark}`,
                    }}
                  >
                    eeels
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>
          </Box>
          <div style={{}}>
            <Box sx={{ marginTop: '1.5rem' }}>
              <Typography>info@adovaplc.com</Typography>
            </Box>
            <Box sx={{ marginTop: '1.5rem', color: `${green}` }}>
              <Typography>2022 Ardova Plc. All right reserved</Typography>
            </Box>
          </div>
        </Box>
      </Drawer>
    </div>
  )
}

export default Sidebar
