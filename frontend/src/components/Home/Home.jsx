import Hero from './Hero'
import Footer from '../common/Footer.jsx'
import Navbar from '../common/Navbar.jsx'
import Livelife from './Livelife.jsx'
import LuxuryLife from './LuxuryLife.jsx'
import Thought from './Thought.jsx'
import Amenities from './Amenities.jsx'
import Plans from './Plans.jsx'
import CovetedHomes from './CovetedHomes.jsx'
import LuxuryAmenities from './LuxuryAmenities.jsx'

const Home = () => {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Livelife />
      <LuxuryLife />
      <Thought/>
      <Amenities/>
      <Plans />
      <CovetedHomes/>
      <LuxuryAmenities/>
      <Footer />
    </div>
  )
}

export default Home

