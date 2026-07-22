// src/App.jsx
import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import About from './pages/About'
import Contact from './pages/Contact'
import Packages from './pages/Packages'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Nav />
      <main>
        <Routes>
          <Route path="/"             element={<Home />} />
          <Route path="/products"     element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/packages"     element={<Packages />} />
          <Route path="/about"        element={<About />} />
          <Route path="/contact"      element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <a 
        href="https://wa.me/919502708546?text=Hi%20Sree%20Meenakshi%20Fabricators!%20I'm%20interested%20in%20your%20services."
        className="whatsapp-float" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <svg className="whatsapp-icon" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.012 2c-5.506 0-9.988 4.482-9.988 9.988 0 1.76.457 3.479 1.328 4.989L2 22l5.176-1.358c1.45.791 3.082 1.206 4.832 1.206 5.506 0 9.992-4.486 9.992-9.992 0-5.506-4.486-9.988-9.988-9.988zm0 18.294c-1.545 0-3.055-.417-4.373-1.206l-.313-.186-3.253.853.868-3.17-.204-.325c-.868-1.385-1.327-2.998-1.327-4.664 0-4.673 3.805-8.477 8.477-8.477 4.673 0 8.482 3.804 8.482 8.477.001 4.674-3.805 8.478-8.477 8.478zm4.646-6.353c-.255-.127-1.507-.743-1.74-.828-.233-.085-.403-.127-.573.127-.17.255-.658.828-.806.998-.148.17-.297.191-.552.064-.255-.127-1.077-.397-2.051-1.267-.758-.676-1.27-1.512-1.419-1.767-.148-.255-.016-.393.111-.519.115-.113.255-.297.382-.446.127-.148.17-.255.255-.425.085-.17.042-.319-.021-.446-.064-.127-.573-1.38-.785-1.89-.208-.5-.436-.433-.573-.44h-.488c-.17 0-.446.064-.679.319-.233.255-.892.871-.892 2.124s.913 2.463 1.04 2.633c.127.17 1.797 2.744 4.353 3.847.608.262 1.082.419 1.452.537.61.194 1.165.167 1.604.101.488-.073 1.507-.616 1.719-1.21.213-.595.213-1.104.148-1.21-.063-.106-.233-.17-.488-.297z" />
        </svg>
      </a>
    </>
  )
}
