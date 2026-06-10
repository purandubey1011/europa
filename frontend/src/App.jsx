import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Plans from './components/Plans/Plans.jsx';
import Amenities from './components/Amenities/Amenities.jsx';

const App = () => {
  return (
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/plans" element={<Plans />} />
      <Route path="/amenities" element={<Amenities />} />
    </Routes>
  )
}

export default App
