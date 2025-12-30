import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 h-16 transition-all duration-300 ${isScrolled ? 'bg-gradient-to-r from-blue-900 to-indigo-900 backdrop-blur-md shadow-2xl' : 'bg-gradient-to-r from-blue-800 to-indigo-800'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          <Link to="/" className="flex items-center space-x-3">
            <div className="bg-white p-1.5 rounded-lg shadow-lg">
              <div className="bg-gradient-to-r from-blue-700 to-indigo-700 w-10 h-10 rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-sm">AP</span>
              </div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-white tracking-wide">AFFY PHARMA</h1>
              <p className="text-xs text-blue-200 -mt-1">Pharmaceutical Excellence</p>
            </div>
          </Link>

          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <svg className={`w-6 h-6 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>

          <nav className={`md:flex ${isMobileMenuOpen ? 'block absolute top-16 left-0 w-full bg-gradient-to-r from-blue-800 to-indigo-800' : 'hidden'}`}>
            <ul className="flex flex-col md:flex-row md:space-x-1 space-y-2 md:space-y-0 py-4 md:py-0">
              <li>
                <Link 
                  to="/" 
                  className="text-white hover:text-blue-300 transition-colors duration-300 px-4 py-2 rounded-lg hover:bg-blue-700/50 flex items-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="text-white hover:text-blue-300 transition-colors duration-300 px-4 py-2 rounded-lg hover:bg-blue-700/50 flex items-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  to="/products" 
                  className="text-white hover:text-blue-300 transition-colors duration-300 px-4 py-2 rounded-lg hover:bg-blue-700/50 flex items-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Products
                </Link>
              </li>
              <li>
                <Link 
                  to="/infrastructure" 
                  className="text-white hover:text-blue-300 transition-colors duration-300 px-4 py-2 rounded-lg hover:bg-blue-700/50 flex items-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Infrastructure
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-white hover:text-blue-300 transition-colors duration-300 px-4 py-2 rounded-lg hover:bg-blue-700/50 flex items-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}