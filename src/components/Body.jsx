import { Box, Button, Typography, useTheme } from '@mui/material'
// import React from 'react'
import backgroundimg1 from '../assets/images/stat-doodle.jpg'
import icon1 from '../assets/images/business-icons/Renewable-energy.png'
import iconOne from '../assets/images/business-icons/Renewable-energy-Yellow.png'
import icon2 from '../assets/images/business-icons/AP-Air.png'
import iconTwo from '../assets/images/business-icons/AP-Air-Yellow.png'
import icon3 from '../assets/images/business-icons/Products.png'
import iconThree from '../assets/images/business-icons/Products-Yellow.png'
import icon4 from '../assets/images/business-icons/Lubricants.png'
import iconFour from '../assets/images/business-icons/Lubricants-Yellow.png'
import icon5 from '../assets/images/business-icons/Makg-n-Distrbtn.png'
import iconFive from '../assets/images/business-icons/Makg-n-Distrbtn-Yellow.png'

import textImage from '../assets/images/gallery-img/gallery-1.jpg'

import './body.css'
import { useState } from 'react'
import Footer from './Footer'
function Body() {
  const theme = useTheme()
  const [isHovered1, setIsHovered1] = useState(false)
  const [isHovered2, setIsHovered2] = useState(false)
  const [isHovered3, setIsHovered3] = useState(false)
  const [isHovered4, setIsHovered4] = useState(false)
  const [isHovered5, setIsHovered5] = useState(false)

  const [currentIcon, setCurrentIcon] = useState('Products')

  const [active, setActive] = useState('list1')
  const [mouseEnter, setMouseEnter] = useState(false)

  const handleMouseOut1 = () => {
    setIsHovered1(false)
  }

  const handleMouseEnter1 = () => {
    setIsHovered1(true)
  }

  const handleMouseOut2 = () => {
    setIsHovered2(false)
  }

  const handleMouseEnter2 = () => {
    setIsHovered2(true)
  }

  const handleMouseOut3 = () => {
    setIsHovered3(false)
  }

  const handleMouseEnter3 = () => {
    setIsHovered3(true)
  }

  const handleMouseOut4 = () => {
    setIsHovered4(false)
  }

  const handleMouseEnter4 = () => {
    setIsHovered4(true)
  }
  const handleMouseOut5 = () => {
    setIsHovered5(false)
  }

  const handleMouseEnter5 = () => {
    setIsHovered5(true)
  }

  // Use a valid color code for the background color
  const Color =
    theme.palette.mode === 'light' ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.8)'
  const Color2 =
    theme.palette.mode === 'light' ? 'rgba(255,255,255,0.9)' : 'rgba(0,0,0,0.9)'
  const green = theme.palette.primary.main

  const iconI = isHovered1 ? iconOne : icon1
  const iconII = isHovered2 ? iconTwo : icon2
  const iconIII = isHovered3 ? iconThree : icon3
  const iconIV = isHovered4 ? iconFour : icon4
  const iconV = isHovered5 ? iconFive : icon5

  return (
    <div>
      {/* first section */}
      <div className="mainDiv">
        <div
          style={{
            backgroundColor: `${Color}`,
          }}
        >
          <div className="container">
            <div className="welcomeTxt">
              <Typography variant="h1" sx={{ textAlign: 'center' }}>
                Welcome to Ardova Plc
              </Typography>
              <Typography variant="h5" sx={{ textAlign: 'center' }}>
                Our 20,000 MT LPG Storage facility will be largest in West
                Africa, providing Nigerians with cleaner alternative sources
                that meet their basic needs.
              </Typography>
            </div>

            <div className="flexItems">
              <div
                style={{
                  backgroundColor: 'black',
                }}
              >
                <Typography variant="h1">About us</Typography>
                <Typography
                  variant="h5"
                  sx={{ lineHeight: '1.8rem', marginTop: '2rem' }}
                >
                  Ardova Plc is a leading indigenous player in the downstream
                  Oil, Gas, and integrated Energy sector. With a network of over
                  450 stations spread across the six geographical zones of
                  Nigeria, the company specializes in the procurement and
                  distribution of Premium Motor Spirit (PMS), Dual Purpose
                  Kerosene (DPK), Diesel (AGO) and Liquefied Natural Gas (LPG).
                </Typography>
              </div>
              <div
                style={{
                  backgroundColor: 'orange',
                }}
              >
                <Typography variant="h1">Energy Business</Typography>
                <Typography
                  variant="h5"
                  sx={{ lineHeight: '1.8rem', marginTop: '2rem' }}
                >
                  Ardova Plc is committed to delivering renewable energy
                  solutions across various sectors. We operate a distribution
                  model that combines solar and waste to energy biofuel
                  solutions to provide Nigerians with affordable energy sources
                  to meet their basic lighting needs.
                </Typography>
              </div>
              <div
                style={{
                  backgroundColor: 'forestgreen',
                }}
              >
                <Typography variant="h1">Other Business</Typography>
                <Typography
                  variant="h5"
                  sx={{ lineHeight: '1.8rem', marginTop: '2rem' }}
                >
                  Ardova is also a leading supplier of Aviation fuel to local
                  and international Airlines providing aircraft refueling
                  services through our aviation-joint hydrant in Lagos and our
                  joint aviation depot in Abuja, Port Harcourt and Kano. Through
                  our partnership with Shell, we also distribute a range of
                  high-quality lubricants for automotive and industrial
                  lubricant needs.
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* second section */}

      <div style={{ background: `url(${backgroundimg1})` }}>
        <div
          style={{
            backgroundColor: `${Color2}`,
            // height: '100vh',
            backgroundSize: 'contain',
          }}
        >
          <div className="discover">
            <Typography
              sx={{ color: `${green}`, fontWeight: 'bold', fontSize: '3rem' }}
            >
              Discover Our Businesses
            </Typography>
          </div>
          <div className="icons">
            <Box
              onClick={() => setCurrentIcon('Energy')}
              component="img"
              src={iconI}
              className="box"
              onMouseEnter={handleMouseEnter1}
              onMouseOut={handleMouseOut1}
            />
            <Box
              onClick={() => setCurrentIcon('Ap')}
              component="img"
              src={iconII}
              onMouseEnter={handleMouseEnter2}
              onMouseOut={handleMouseOut2}
              className="box"
            />
            <Box
              onClick={() => setCurrentIcon('Products')}
              component="img"
              src={iconIII}
              onMouseEnter={handleMouseEnter3}
              onMouseOut={handleMouseOut3}
              className="box"
            />
            <Box
              onClick={() => setCurrentIcon('Lubricants')}
              component="img"
              src={iconIV}
              onMouseEnter={handleMouseEnter4}
              onMouseOut={handleMouseOut4}
              className="box"
            />
            <Box
              onClick={() => setCurrentIcon('Fuel')}
              component="img"
              src={iconV}
              onMouseEnter={handleMouseEnter5}
              onMouseOut={handleMouseOut5}
              className="box"
            />
          </div>
          <div className="discover2">
            <Typography
              variant="h1"
              sx={{ color: `${green}`, fontWeight: 'bold' }}
            >
              {currentIcon === 'Products' ? 'Products' : null}
              {currentIcon === 'Ap' ? 'AP Air' : null}
              {currentIcon === 'Energy' ? 'Renewable Energy' : null}
              {currentIcon === 'Fuel' ? 'Fuel and Retail Marketing' : null}
              {currentIcon === 'Lubricants' ? 'Lubricants' : null}
            </Typography>
          </div>
          <div
            style={{
              width: '70%',
              margin: '4rem auto',
              textAlign: 'center',
              fontWeight: 'bold',
            }}
          >
            <Typography sx={{ fontSize: '20px' }}>
              {currentIcon === 'Products'
                ? 'Ardova Plc is a Nigerian indigenous and integrated energy company that distributes petroleum products. We procure and distribute petrol (PMS), diesel (AGO), kerosene (DPK), and liquefied petroleum gas (LPG) in Nigeria through a network of over 500 retail outlets and significant storage facilities in Apapa, Lagos, and Onne, Rivers State.'
                : null}
              {currentIcon === 'Ap'
                ? "As one of Nigeria's leading suppliers of aviation fuel for local international airlines, we provide aircraft refueling services through our aviation joint user hydrants in Ikeja, Lagos and joint aviation depots in Abuja, Port Harcourt, and Kano."
                : null}
              {currentIcon === 'Energy'
                ? 'We are championing LPG use as a cleaner fuel for cooking, transportation, and power generation through significant investments like our 20,000 MT coastal storage facility at Ijora and the deployment of LPG skid tanks across our extensive network of retail stations around the country.'
                : null}
              {currentIcon === 'Fuel'
                ? 'We procure and distribute petrol, diesel, kerosene, and liquefied petroleum gas through our extensive network of over 450 retail stations in Nigeria, as well as significant storage facilities in Apapa, Lagos, and Onne, Rivers States.'
                : null}
              {currentIcon === 'Lubricants'
                ? "Ardova Plc produces and distributes a wide range of high-quality lubricants brands to satisfy various automotive and industrial lubrication needs. Super V and Visco 2000 are two of our branded automotive engine oils that have long been the preferred engine oils in Nigeria.As the sole distributor of Shell lubricants for Nigeria's automotive and industrial sectors, our customers also benefit from a broader selection of the best-in-class oils"
                : null}
            </Typography>
          </div>

          <div
            style={{
              width: 'fit-content',
              margin: 'auto',
              paddingBottom: '4rem',
            }}
          >
            <Button
              sx={{
                background: `${green}`,
                color: 'white',
                padding: '1rem',
                fontSize: '1rem',
                '&:hover': {
                  background: 'dodgerblue',
                },
              }}
            >
              Discover More
            </Button>
          </div>
        </div>
      </div>

      {/* Third section */}

      <div className="container2">
        <div className="left">
          <div className="sub">
            <div style={{ width: 'fit-content' }}>
              <Typography
                sx={{ fontSize: '2.8rem', fontWeight: 'bold', color: 'white' }}
              >
                Our Subsidiaris
              </Typography>
            </div>
            <div style={{ width: 'fit-content' }}>
              <ul className="listItem" style={{ color: 'white' }}>
                <li className={active === 'list1' ? 'active1' : 'list1'}>
                  <span className="span1" onClick={() => setActive('list1')}>
                    Ardova PLC
                  </span>
                </li>
                <li className={active === 'list2' ? 'active2' : 'list2'}>
                  <span className="span2" onClick={() => setActive('list2')}>
                    Enyo Retail and Supply
                  </span>
                </li>
                <li className={active === 'list3' ? 'active3' : 'list3'}>
                  <span className="span3" onClick={() => setActive('list3')}>
                    Axles and CartagC
                  </span>
                </li>
                <li className={active === 'list4' ? 'active4' : 'list4'}>
                  <span className="span4" onClick={() => setActive('list4')}>
                    AP Renewable
                  </span>
                </li>
                <li className={active === 'list5' ? 'active5' : 'list5'}>
                  <span className="span5" onClick={() => setActive('list5')}>
                    AP LPG
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="right">
          {active === 'list1' ? (
            <div
              style={{
                background: 'rgba(140, 172, 93,0.9)',
                height: '100%',
                display: 'flex',
                gap: '3rem',
                flexDirection: 'column',
                justifyContent: 'space-around',
                padding: '2rem 2rem',
              }}
            >
              <div className="title">
                <span>Ardova PLC</span>
              </div>
              <div style={{ fontSize: '1.2rem' }}>
                Ardova Plc is a Nigerian leading indigenous and integrated
                energy company involved in the distribution of petroleum
                products. With an extensive network of over 450 retail outlets
                in Nigeria and significant storage facilities in Apapa, Lagos
                and Onne, Rivers State, we procure and distribute petrol (PMS),
                diesel (AGO), kerosene (DPK) and liquefied petroleum gas (LPG).
              </div>
              <div>
                <Button
                  sx={{
                    background: 'green',
                    color: 'white',
                    '&:hover': {
                      background: 'dodgerblue',
                    },
                  }}
                >
                  Read More
                </Button>
              </div>
            </div>
          ) : null}
          {active === 'list2' ? (
            <div
              style={{
                background: 'rgba(98, 98, 244,0.9)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '5rem 2rem',
              }}
            >
              <div className="title">
                <span>Enyo Retail & Supply</span>
              </div>
              <div style={{ fontSize: '1.2rem' }}>
                Enyo Retail and Supply Limited was established in 2017 as a
                customer-focused, technology driven fuels retailing company,
                intent on providing best-in-class retail experiences, whilst
                leveraging complimentary brands and optimizing return to
                investors.
              </div>
              <div>
                <Button
                  sx={{
                    background: 'green',
                    color: 'white',
                    '&:hover': {
                      background: 'dodgerblue',
                    },
                  }}
                >
                  Read More
                </Button>
              </div>
            </div>
          ) : null}
          {active === 'list3' ? (
            <div
              style={{
                background: 'rgba(255, 165, 0,0.9)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '5rem 2rem',
              }}
            >
              <div className="title">
                <span>Axles & Cartage</span>
              </div>
              <div style={{ fontSize: '1.2rem' }}>
                Axles and Cartage Limited is a fully owned subsidiary of Ardova
                Plc, which was incorporated in March 2020 and began its
                operations in July 2020. The company is a downstream energy
                transportation company, focused on distribution, administration,
                and oversight of energy products.
              </div>
              <div>
                <Button
                  sx={{
                    background: 'green',
                    color: 'white',
                    '&:hover': {
                      background: 'dodgerblue',
                    },
                  }}
                >
                  Read More
                </Button>
              </div>
            </div>
          ) : null}
          {active === 'list4' ? (
            <div
              style={{
                background: 'rgba(159, 159, 7,0.9)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '5rem 2rem',
              }}
            >
              <div className="title">
                <span>AP renewables</span>
              </div>
              <div style={{ fontSize: '1.2rem' }}>
                AP Renewables is a subsidiary of Ardova Plc which creates
                distribution models that combine solar and waste to energy
                bio-fuel solutions. Our mission is to provide Nigerians with
                affordable alternative energy sources that meet their basic
                lighting needs.
              </div>
              <div>
                <Button
                  sx={{
                    background: 'green',
                    color: 'white',
                    '&:hover': {
                      background: 'dodgerblue',
                    },
                  }}
                >
                  Read More
                </Button>
              </div>
            </div>
          ) : null}
          {active === 'list5' ? (
            <div
              style={{
                background: 'rgba(140, 172, 93,0.9)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '5rem 2rem',
              }}
            >
              <div className="title">
                <span>AP LP</span>
              </div>
              <div style={{ fontSize: '1.2rem' }}>
                AP LPG is a subsidiary of Ardova Plc which is committed to
                increasing domestic consumption of LPG, through a plethora of
                promotional activities that include trading, storing, process,
                and marketing LPG in Nigeria.
              </div>
              <div>
                <Button
                  sx={{
                    background: 'green',
                    color: 'white',
                    '&:hover': {
                      background: 'dodgerblue',
                    },
                  }}
                >
                  Read More
                </Button>
              </div>
            </div>
          ) : null}
        </div>
      </div>

      {/* fouth section */}
      <div className="container4">
        <div
          style={{
            height: ' 100%',
            background: `${Color}`,
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '30px',
          }}
        >
          <div className="outterDiv">
            <div className="innerImg">
              <div className="dark" onMouseEnter={() => setMouseEnter(true)}>
                <div>
                  <Typography sx={{ fontSize: '.8rem' }}>
                    LATEST NEWS
                  </Typography>
                  <Typography sx={{ fontSize: '1.5rem', marginTop: '20px' }}>
                    Ardova Bond Insuance
                  </Typography>
                </div>
                <div>
                  <p className="truncate">
                    LAGOS, NIGERIA – 16 November 2021 – Ardova Plc (“Ardova” or
                    the “Company”) is pleased to announce the successful
                    completion of a N25.3 billion Series 1 (Tranche A and
                    Tranche B) Fixed Rate Senior Unsecured Bond Issue (“the
                    “Bond Issue”) under its N60 billion Debt Issuance Programme.
                    The Bond Issue is the largest local currency bond issuance
                    by an indigenous oil and gas company in the history of the
                    Nigerian debt capital markets
                  </p>
                  <Typography variant="h5" sx={{ paddingTop: '10px' }}>
                    Nov, 2021
                  </Typography>
                </div>
                <div
                  className={mouseEnter ? 'visible' : 'readMore'}
                  onMouseLeave={() => setMouseEnter(false)}
                >
                  <Button sx={{ color: 'black', background: 'lightgrey' }}>
                    Read More
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="outterDiv2">
            <div className="textContainer">
              <div>
                <Typography sx={{ fontSize: '.8rem', color: 'green' }}>
                  Recent Invent
                </Typography>
                <Typography
                  sx={{ fontSize: '1.5rem', marginTop: '20px', color: 'green' }}
                >
                  Arden & Newton/Ardova Global Award: A win for Nigeria
                </Typography>
              </div>
              <div>
                <p className="truncate" style={{ color: 'green' }}>
                  LAGOS, NIGERIA – 16 November 2021 – Ardova Plc (“Ardova” or
                  the “Company”) is pleased to announce the successful
                  completion of a N25.3 billion Series 1 (Tranche A and Tranche
                  B) Fixed Rate Senior Unsecured Bond Issue (“the “Bond Issue”)
                  under its N60 billion Debt Issuance Programme. The Bond Issue
                  is the largest local currency bond issuance by an indigenous
                  oil and gas company in the history of the Nigerian debt
                  capital markets
                </p>
                <Typography
                  variant="h5"
                  sx={{ paddingTop: '10px', color: 'green' }}
                >
                  Nov, 2021
                </Typography>
              </div>
            </div>
            <div className="image">
              <img src={textImage} alt="" className="textImage" />
            </div>
          </div>
        </div>
      </div>

      {/* fifth section */}

      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Body
