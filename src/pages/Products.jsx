import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Button, Typography } from '@mui/material'
import './product.css'
import lube from '../assets/images/ap-lubes.jpg'
import tank from '../assets/images/air-ap.png'
import gallon from '../assets/images/shell-lubes.jpg'
import station from '../assets/images/ap-station-2.jpg'
import { motion } from 'framer-motion'
function Products() {
  return (
    <div>
      {/* //navbar */}
      <Navbar />
      <div>
        {/* first section */}
        <div className="backgroud">
          <div className="darks">
            <Typography
              sx={{ fontSize: '3rem', fontWeight: '700', color: 'white' }}
            >
              Our Products
            </Typography>
          </div>
        </div>

        {/* secondSection */}
        <div className="textSection">
          <Typography sx={{ fontSize: '1.1rem' }}>
            Ardova Plc is a Nigerian indigenous and integrated energy company
            that distributes petroleum products. We procure and distribute
            petrol (PMS), diesel (AGO), kerosene (DPK), and liquefied petroleum
            gas (LPG) in Nigeria through a network of over 500 retail outlets
            and significant storage facilities in Apapa, Lagos, and Onne, Rivers
            State.
          </Typography>
          <Typography sx={{ fontSize: '1.1rem' }}>
            From our oil blending plant in Apapa, Lagos, we also manufacture and
            distribute a wide range of high-quality lubricants. Among these
            lubricants are Super V, Visco 2000, and Diesel Motor Oil. We are
            also Nigeria&apos;s sole authorized distributor of Shell-branded
            lubricants.
          </Typography>
          <Typography sx={{ fontSize: '1.1rem' }}>
            As one of Nigeria&apos;s leading suppliers of aviation fuel for
            local and international airlines, we provide aircraft refuelling
            services through our aviation joint user hydrants in Ikeja, Lagos
            and joint aviation depots in Abuja, Port-Harcourt, and Kano. In
            addition to our strategic retail and commercial network, we are
            committed to delivering renewable energy solutions to customers
            through our solar brand, AP Renewables.
          </Typography>
        </div>

        {/* third section */}
        <div className="flexItemss">
          <div className="flexColumn">
            <Typography variant="h1"> AP Lubricants</Typography>
            <Typography variant="h5">
              Ardova Plc produces and distributes a wide range of high-quality
              lubricants brands to satisfy various automotive and industrial
              lubrication needs. Super V and Visco 2000 are two of our branded
              automotive engine oils that have long been the preferred engine
              oils in Nigeria.
            </Typography>
            <Typography variant="h5">
              As the sole distributor of Shell lubricants for Nigeria&apos;s
              automotive and industrial sectors, our customers also benefit from
              a broader selection of the best-in-class oils.
            </Typography>
            <div
              style={{
                width: 'fit-content',
              }}
            >
              <Button sx={{ color: 'white', background: 'green' }}>
                Read More
              </Button>
            </div>
          </div>
          <div>
            <img src={lube} alt="" className="image" />
          </div>
        </div>

        {/* fouth section */}
        <div className="even">
          <div className="flexItem2">
            <div>
              <img src={tank} alt="" className="image2" />
            </div>
            <div className="flexColumn2">
              <Typography variant="h1"> AP Lubricants</Typography>
              <Typography variant="h5">
                Ardova Plc produces and distributes a wide range of high-quality
                lubricants brands to satisfy various automotive and industrial
                lubrication needs. Super V and Visco 2000 are two of our branded
                automotive engine oils that have long been the preferred engine
                oils in Nigeria.
              </Typography>
            </div>
          </div>
        </div>

        {/* fifth section */}
        <div className="flexItemss">
          <div className="flexColumn">
            <Typography variant="h1"> AP Lubricants</Typography>
            <Typography variant="h5">
              Ardova Plc produces and distributes a wide range of high-quality
              lubricants brands to satisfy various automotive and industrial
              lubrication needs. Super V and Visco 2000 are two of our branded
              automotive engine oils that have long been the preferred engine
              oils in Nigeria.
            </Typography>
            <Typography variant="h5">
              As the sole distributor of Shell lubricants for Nigeria&apos;s
              automotive and industrial sectors, our customers also benefit from
              a broader selection of the best-in-class oils.
            </Typography>
            <div
              style={{
                width: 'fit-content',
              }}
            >
              <Button sx={{ color: 'white', background: 'green' }}>
                Read More
              </Button>
            </div>
          </div>
          <div>
            <img src={gallon} alt="" className="image" />
          </div>
        </div>

        {/* sixth section */}
        <div className="even">
          <div className="flexItem2">
            <div>
              <img src={station} alt="" className="image2" />
            </div>
            <div className="flexColumn2">
              <Typography variant="h1"> AP Lubricants</Typography>
              <Typography variant="h5">
                Ardova Plc produces and distributes a wide range of high-quality
                lubricants brands to satisfy various automotive and industrial
                lubrication needs. Super V and Visco 2000 are two of our branded
                automotive engine oils that have long been the preferred engine
                oils in Nigeria.
              </Typography>
            </div>
          </div>
        </div>

        {/* seveth section */}
        <div className="flexItemss">
          <div className="flexColumn">
            <Typography variant="h1"> AP Lubricants</Typography>
            <Typography variant="h5">
              Ardova Plc produces and distributes a wide range of high-quality
              lubricants brands to satisfy various automotive and industrial
              lubrication needs. Super V and Visco 2000 are two of our branded
              automotive engine oils that have long been the preferred engine
              oils in Nigeria.
            </Typography>
            <Typography variant="h5">
              As the sole distributor of Shell lubricants for Nigeria&apos;s
              automotive and industrial sectors, our customers also benefit from
              a broader selection of the best-in-class oils.
            </Typography>
            <div
              style={{
                width: 'fit-content',
              }}
            >
              <Button sx={{ color: 'white', background: 'green' }}>
                Read More
              </Button>
            </div>
          </div>
          <div>
            <img src={lube} alt="" className="image" />
          </div>
        </div>

        {/* eighth section */}
        <div className="even">
          <div className="flexItem2">
            <div>
              <img src={station} alt="" className="image2" />
            </div>
            <div className="flexColumn2">
              <Typography variant="h1"> AP Lubricants</Typography>
              <Typography variant="h5">
                Ardova Plc produces and distributes a wide range of high-quality
                lubricants brands to satisfy various automotive and industrial
                lubrication needs. Super V and Visco 2000 are two of our branded
                automotive engine oils that have long been the preferred engine
                oils in Nigeria.
              </Typography>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 1 }}
      >
        <Footer />
      </motion.div>
    </div>
  )
}

export default Products
