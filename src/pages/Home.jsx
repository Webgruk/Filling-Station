import { Box, useMediaQuery } from '@mui/material'
import Navbar from '../components/Navbar'

import adBanner1 from '../assets/images/main-slides/ad-banner-1.jpg'
import adBanner2 from '../assets/images/main-slides/ad-banner-2.jpg'
import adBanner3 from '../assets/images/main-slides/ad-banner-3.jpg'
import adBanner6 from '../assets/images/main-slides/ad-banner-6.png'
import adBanner5 from '../assets/images/main-slides/ad-banner-5.jpg'

import adBannerSm1 from '../assets/images/main-slides/ad-banner-1-xs.png'
import adBannerSm2 from '../assets/images/main-slides/ad-banner-2-xs.png'
import adBannerSm3 from '../assets/images/main-slides/ad-banner-3-xs.jpg'
import adBannerSm4 from '../assets/images/main-slides/ad-banner-4-xs.png'
import adBannerSm5 from '../assets/images/main-slides/ad-banner-5-xs.png'

import { useEffect, useState } from 'react'
import Body from '../components/Body'

const Home = () => {
  const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState(0)
  const [currentBackgroundIndex2, setCurrentBackgroundIndex2] = useState(0)

  const banners = [adBanner1, adBanner2, adBanner3, adBanner6, adBanner5]
  const bannersSm = [
    adBannerSm1,
    adBannerSm2,
    adBannerSm3,
    adBannerSm4,
    adBannerSm5,
  ]
  useEffect(() => {
    const interval = setInterval(changeBackground, 5000) // Change background every 5 seconds

    return () => {
      clearInterval(interval)
    }
  }, [])

  const changeBackground = () => {
    setCurrentBackgroundIndex((prevIndex) => (prevIndex + 1) % banners.length)
    setCurrentBackgroundIndex2(
      (prevIndex) => (prevIndex + 1) % bannersSm.length,
    )
  }

  const isMobileScreen = useMediaQuery('(min-width:1115px)')

  const currentBackground = banners[currentBackgroundIndex]
  const currentBackground2 = bannersSm[currentBackgroundIndex2]
  return (
    <div>
      <Navbar />
      {isMobileScreen ? (
        <Box
          height="100vh"
          sx={{
            background: `url(${currentBackground})`,
            backgroundSize: 'cover',

            height: '100vh',
          }}
        ></Box>
      ) : (
        <Box
          height="100vh"
          sx={{
            background: `url(${currentBackground2})`,
            backgroundSize: 'cover',

            height: '100vh',
          }}
        ></Box>
      )}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          position: 'absolute',
          bottom: '20px',
        }}
      >
        {banners.map((banner, index) => (
          <div
            key={index}
            style={{
              padding: '5px',
              margin: '0 5px',
              borderRadius: '50%',
              border: '2px solid #444',
              backgroundColor:
                index === currentBackgroundIndex ? 'lime' : '#444',
            }}
            onClick={() => setCurrentBackgroundIndex(index)}
          ></div>
        ))}
      </Box>
      <Body />
    </div>
  )
}

export default Home
