import { Routes, Route } from 'react-router-dom';
import { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Home from './components/Home/Home';
import Plans from './components/Plans/Plans.jsx';
import Amenities from './components/Amenities/Amenities.jsx';
import { useCinematicAnimations } from './hooks/useCinematicAnimations.js';
import { useLenisScroll } from './hooks/useLenisScroll.js';
import { useRouteScrollTop } from './hooks/useRouteScrollTop.js';
import AppLoader from './components/common/AppLoader.jsx';
import CursorFollower from './components/common/CursorFollower.jsx';

const App = () => {
  const pageRef = useRef(null);
  const { pathname } = useLocation();

  useCinematicAnimations(pageRef, pathname);
  useLenisScroll();
  useRouteScrollTop(pathname);

  return (
    <div ref={pageRef} data-cinematic-page>
      <AppLoader />
      <CursorFollower />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/amenities" element={<Amenities />} />
      </Routes>
    </div>
  )
}

export default App
