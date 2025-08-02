import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import Home from './pages/Home';
import About from './pages/About';
import PracticeAreas from './pages/PracticeAreas';
import Contact from './pages/Contact';
import logo from './assets/logo.png';
import { Facebook, Twitter, Instagram } from 'lucide-react';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    return document.documentElement.classList.contains('dark');
  });

  const linkClasses = ({ isActive }) =>
    `block px-4 py-2 text-base font-medium ${
      isActive
        ? 'text-blue-700 bg-blue-100 rounded md:bg-transparent md:border-b-2 md:border-blue-700 dark:text-gray-300 dark:bg-blue-900/30 md:dark:bg-transparent md:dark:border-blue-300'
        : 'text-blue-900 hover:text-blue-700 hover:bg-blue-50 md:hover:bg-transparent dark:text-white dark:hover:text-blue-300 dark:hover:bg-gray-800'
    }`;

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
    setIsDark(!isDark);
  };

  // Lock scroll when menu is open (mobile UX)
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menuOpen]);

  return (
    <nav className="bg-white dark:bg-[#121212] shadow-md py-4 px-6 flex justify-between items-center relative z-50">
      {/* Logo */}
      <NavLink to="/" className="text-xl font-bold text-blue-900 dark:text-white font-serif">
        <img src={logo} alt="Roy Sal Legal Logo" className="h-12 w-auto" />
      </NavLink>

      {/* Right section (toggle + menu) */}
      <div className="flex items-center gap-4">
        {/* Dark mode toggle */}
        {/* <button
          onClick={toggleDarkMode}
          className="text-blue-900 dark:text-white hover:text-blue-600 dark:hover:text-white"
          title="Toggle Dark Mode"
        >
          {isDark ? <Sun size={22} /> : <Moon size={22} />}
        </button> */}

        {/* Hamburger for mobile */}
        <button className="md:hidden text-blue-900 dark:text-gray-100" onClick={toggleMenu}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Nav Links */}
      <div
        className={`flex flex-col md:flex-row md:gap-4 absolute md:static top-16 left-0 w-full md:w-auto bg-white dark:bg-[#121212] text-blue-900 dark:text-white font-medium transition-all duration-300 ease-in-out z-50 ${
          menuOpen ? 'block shadow-md' : 'hidden md:flex md:shadow-none'
        }`}
      >
        <NavLink to="/" className={linkClasses} onClick={() => setMenuOpen(false)}>
          Home
        </NavLink>
        <NavLink to="/about" className={linkClasses} onClick={() => setMenuOpen(false)}>
          About
        </NavLink>
        <NavLink to="/practice-areas" className={linkClasses} onClick={() => setMenuOpen(false)}>
          Practice Areas
        </NavLink>
        <NavLink to="/contact" className={linkClasses} onClick={() => setMenuOpen(false)}>
          Contact
        </NavLink>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm py-8 px-4 transition-colors duration-300">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        <div>
          <h4 className="font-semibold mb-2 text-blue-900 dark:text-white">Contact Info</h4>
          <p>Email: contactroyandsal@gmail.com</p>
          <p>Phone: +91 91066 50461</p>
          <p>Address: E-36, Park Near Hush Puppies, Lajpat Nagar-2, New Delhi - 110024</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2 text-blue-900 dark:text-white">Quick Links</h4>
          <ul className="space-y-1">
            <li><NavLink to="/" className="hover:underline">Home</NavLink></li>
            <li><NavLink to="/about" className="hover:underline">About</NavLink></li>
            <li><NavLink to="/practice-areas" className="hover:underline">Practice Areas</NavLink></li>
            <li><NavLink to="/contact" className="hover:underline">Contact</NavLink></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2 text-blue-900 dark:text-white">Disclaimer</h4>
          <p>This website is for informational purposes only and does not constitute legal advice.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2 text-blue-900 dark:text-white">Follow Us</h4>
          <div className="flex justify-center md:justify-start gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
              <Facebook size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
              <Twitter size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mt-6">&copy; {new Date().getFullYear()} Roy & Sal Associates. All rights reserved.</div>
    </footer>
  );
}

export default function App() {
  return (
    <Router  basename="/roysalLegal">
      <div className="min-h-screen flex flex-col bg-white dark:bg-[#121212] text-gray-800 dark:text-gray-100 transition-colors duration-300">
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
