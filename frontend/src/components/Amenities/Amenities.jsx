import Hero from './Hero.jsx'
import Footer from '../common/Footer.jsx'
import Navbar from '../common/Navbar.jsx'
import AmenitiesList from './AmenitiesList.jsx'
import TvLounge from './TvLounge.jsx'
import Fitness from './Fitness.jsx'
import Childcare from './Childcare.jsx'
import Communityhall from './Communityhall.jsx'

const Amenities = () => {
  return (
    <div className="">
      <Navbar />
      <Hero/>
      <AmenitiesList />
      <TvLounge />
      <Fitness/>
      <Childcare />
      <Communityhall />
      <Footer />
    </div>
  )
}

export default Amenities

