import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { SmoothScroll } from './components/SmoothScroll';
import { Navbar } from './components/Navbar';
import { GrainOverlay } from './components/GrainOverlay';
import { CustomCursor } from './components/CustomCursor';
import { Home } from './pages/Home';
import { ArtistDetails } from './pages/ArtistDetails';
import { ArtistsPage } from './pages/ArtistsPage';
import { AnimatePresence } from 'framer-motion';
import { PageTransition } from './components/PageTransition';
import { BookingProvider } from './context/BookingContext';

// Sub-component to handle location-based transitions and scroll reset
const AppContent = () => {
  const location = useLocation();
  
  return (
    <main className="relative min-h-screen bg-[#050505] selection:bg-accent selection:text-white text-white">
      <CustomCursor />
      <SmoothScroll />
      <GrainOverlay />
      <Navbar />
      
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/artists" element={<PageTransition><ArtistsPage /></PageTransition>} />
          <Route path="/artists/:id" element={<PageTransition><ArtistDetails /></PageTransition>} />
        </Routes>
      </AnimatePresence>
    </main>
  );
};

function App() {
  return (
    <Router>
      <BookingProvider>
        <AppContent />
      </BookingProvider>
    </Router>
  );
}

export default App;
