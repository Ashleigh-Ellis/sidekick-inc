import { Routes, Route } from 'react-router-dom';
import { Header, Footer } from './components';
import { Home, About } from './pages';
import { ScrollToTop } from './components/ScrollToTop';

/**
 * SideKick Incorporated - Main Application
 * 
 * A multi-page website for a flexible support services business
 * based in Cape Town. Features a comic book theme with a pigeon-inspired
 * color palette (greens, purples, teals, greys, with orange accents).
 */
function App() {
  return (
    <div className="app">
      <ScrollToTop />
      <Header />
      
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
