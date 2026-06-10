import Hero from './Hero.jsx'
import Footer from '../common/Footer.jsx'
import Navbar from '../common/Navbar.jsx'
import Upgrade from './Upgrade.jsx'
import BanquetHall from './BanquetHall.jsx'
import ActivityAmenities from './ActivityAmenities.jsx'
import KidsAmenities from './KidsAmenities.jsx'

const Amenities = () => {
  return (
    <div className="">
      <Navbar />
      <Hero/>
      <Upgrade/>
      <BanquetHall/>
      <ActivityAmenities/>
      <KidsAmenities/>
      <Footer />
    </div>
  )
}

export default Amenities

