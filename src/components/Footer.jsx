import { Button, IconButton, TextField, Typography } from '@mui/material'
import './footer.css'
const Footer = () => {
  return (
    <div>
      <div className="footPrint">
        <div className="footerText">
          <Typography sx={{ fontSize: '2rem' }}> Our FootPrint</Typography>
          <Typography sx={{ fontSize: '1rem' }}>
            With extensive experience operating in the Oil, Gas, and Energy
            sector, we remain an industry leader in the energy value chain. The
            company is well-structured with partners in various areas of
            expertise in delivering energy needs across the globe
          </Typography>
        </div>
        <div className="footerBtn">
          <Button
            sx={{ color: 'black', background: 'white', fontSize: '.9rem' }}
          >
            Learn More &gt;
          </Button>
        </div>
      </div>
      <div className="contactContainer">
        <div className="contactLinks">
          <div>
            <form action="">
              <div>
                <Typography sx={{ fontSize: '1.2rem', fontWeight: '500' }}>
                  Join our mailing list
                </Typography>
                <TextField label="Email address" sx={{ margin: '40px 0' }} />
                <div>
                  <Button
                    sx={{
                      padding: '1rem 2rem',
                      background: 'orange',
                      fontSize: '1.2rem',
                    }}
                  >
                    Submit
                  </Button>
                </div>
              </div>
            </form>
          </div>
          <div>
            <Typography sx={{ fontSize: '1.2rem', fontWeight: '500' }}>
              Quick links
            </Typography>
            <ul>
              <li>FAQ</li>
              <li>CSR</li>
              <li>Careers</li>
              <li>Gallery</li>
              <li>Privacy</li>
            </ul>
          </div>
          <div>
            <Typography sx={{ fontSize: '1.2rem', fontWeight: '500' }}>
              Company
            </Typography>
            <ul>
              <li>About Us</li>
              <li>Our Products</li>
              <li>Products</li>
              <li>Our Corperative Governance</li>
              <li>Enyo Retail & Supply</li>
            </ul>
          </div>
          <div>
            <Typography sx={{ fontSize: '1.2rem', fontWeight: '500' }}>
              Contacts
            </Typography>
            <ul>
              <li>
                <IconButton></IconButton>+234 954 4584 034
              </li>
              <li>
                <IconButton></IconButton>info@ardovaplc.com
              </li>
              <li>
                <IconButton></IconButton>lagos,Nigera
              </li>
            </ul>
          </div>
          <div>
            <Typography sx={{ fontSize: '1.2rem', fontWeight: '500' }}>
              Follow Us
            </Typography>
            <div></div>
          </div>
        </div>
        <div>Copyright © 2022 Ardova Plc. All rights reserved.</div>
      </div>
    </div>
  )
}

export default Footer
