import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Home from './pages/Home';
import About from './pages/About';
import PracticeAreas from './pages/PracticeAreas';
import Contact from './pages/Contact';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClasses = ({ isActive }) =>
  `block px-4 py-2 text-base font-medium ${
    isActive
      ? 'text-blue-700 bg-blue-100 rounded md:bg-transparent md:border-b-2 md:border-blue-700'
      : 'text-blue-900 hover:text-blue-700 hover:bg-blue-50 md:hover:bg-transparent'
  }`;


  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Lock scroll when menu is open (mobile UX)
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menuOpen]);

  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center relative z-50">
      <NavLink to="/" className="text-xl font-bold text-blue-900 font-serif">
        Roy & Sal
      </NavLink>

      {/* Hamburger Button - visible on mobile */}
      <button className="md:hidden text-blue-900" onClick={toggleMenu}>
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Nav Links */}
      <div
        className={`flex flex-col md:flex-row md:gap-4 absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent text-blue-900 font-medium transition-all duration-300 ease-in-out z-50 ${
          menuOpen ? 'block shadow-md' : 'hidden md:flex md:shadow-none'
        }`}
      >
        <NavLink to="/" className={linkClasses} onClick={() => setMenuOpen(false)}>Home</NavLink>
        <NavLink to="/about" className={linkClasses} onClick={() => setMenuOpen(false)}>About</NavLink>
        <NavLink to="/practice-areas" className={linkClasses} onClick={() => setMenuOpen(false)}>Practice Areas</NavLink>
        <NavLink to="/contact" className={linkClasses} onClick={() => setMenuOpen(false)}>Contact</NavLink>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 text-sm mt-12 py-8 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        <div>
          <h4 className="font-semibold mb-2 text-blue-900">Contact Info</h4>
          <p>Email: info@royandsal.com</p>
          <p>Phone: +91 12345 67890</p>
          <p>Address: 123 Legal Ave, New Delhi, India</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2 text-blue-900">Quick Links</h4>
          <ul className="space-y-1">
            <li><NavLink to="/" className="hover:underline">Home</NavLink></li>
            <li><NavLink to="/about" className="hover:underline">About</NavLink></li>
            <li><NavLink to="/practice-areas" className="hover:underline">Practice Areas</NavLink></li>
            <li><NavLink to="/contact" className="hover:underline">Contact</NavLink></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2 text-blue-900">Disclaimer</h4>
          <p>This website is for informational purposes only and does not constitute legal advice.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2 text-blue-900">Follow Us</h4>
          <div className="flex justify-center md:justify-start gap-4">
            <a href="#" className="hover:text-blue-600">LinkedIn</a>
            <a href="#" className="hover:text-blue-600">Twitter</a>
            <a href="#" className="hover:text-blue-600">Instagram</a>
          </div>
        </div>
      </div>
      <div className="text-center mt-6">&copy; {new Date().getFullYear()} Roy & Sal Associates. All rights reserved.</div>
    </footer>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white text-gray-800">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/practice-areas" element={<PracticeAreas />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
