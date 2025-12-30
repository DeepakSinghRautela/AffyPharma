import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 text-white py-16 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="bg-white p-1.5 rounded-lg">
                <div className="bg-gradient-to-r from-blue-700 to-indigo-700 w-10 h-10 rounded-md flex items-center justify-center">
                  <span className="text-white font-bold text-sm">AP</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold">AFFY PHARMA</h3>
                <p className="text-xs text-blue-300">Pharmaceutical Excellence</p>
              </div>
            </div>
            <p className="text-blue-200 max-w-xs">
              Leading manufacturer of high-quality pharmaceutical products since 2008, committed to excellence in manufacturing and patient safety.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-blue-800 hover:bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors text-sm" aria-label="LinkedIn">
                in
              </a>
              <a href="#" className="bg-blue-800 hover:bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors text-sm" aria-label="Twitter">
                tw
              </a>
              <a href="#" className="bg-blue-800 hover:bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors text-sm" aria-label="Facebook">
                fb
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 text-blue-300 border-b border-blue-700 pb-2">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-blue-100 hover:text-white transition-colors duration-300 flex items-center group">
                <span className="mr-2 group-hover:translate-x-1 transition-transform">→</span> Home
              </Link></li>
              <li><Link to="/about" className="text-blue-100 hover:text-white transition-colors duration-300 flex items-center group">
                <span className="mr-2 group-hover:translate-x-1 transition-transform">→</span> About Us
              </Link></li>
              <li><Link to="/products" className="text-blue-100 hover:text-white transition-colors duration-300 flex items-center group">
                <span className="mr-2 group-hover:translate-x-1 transition-transform">→</span> Products
              </Link></li>
              <li><Link to="/infrastructure" className="text-blue-100 hover:text-white transition-colors duration-300 flex items-center group">
                <span className="mr-2 group-hover:translate-x-1 transition-transform">→</span> Infrastructure
              </Link></li>
              <li><Link to="/contact" className="text-blue-100 hover:text-white transition-colors duration-300 flex items-center group">
                <span className="mr-2 group-hover:translate-x-1 transition-transform">→</span> Contact
              </Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 text-blue-300 border-b border-blue-700 pb-2">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-300 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <span className="text-blue-100">+91-XXX-XXX-XXXX</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-300 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <span className="text-blue-100">info@affypharma.com</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-300 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span className="text-blue-100">Gujarat, India</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 text-blue-300 border-b border-blue-700 pb-2">Newsletter</h4>
            <p className="text-blue-200 mb-4">Subscribe to our newsletter for the latest updates.</p>
            <form className="flex flex-col space-y-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-2 rounded-lg bg-blue-800/50 border border-blue-700 text-white placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button 
                type="submit"
                className="bg-gradient-to-r from-blue-700 to-indigo-700 hover:from-blue-600 hover:to-indigo-600 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-blue-700 mt-12 pt-8 text-center">
          <p className="text-blue-300 text-sm">
            &copy; {currentYear} Affy Pharma. All Rights Reserved. | 
            <Link to="/privacy" className="mx-2 text-blue-200 hover:text-white transition-colors">Privacy Policy</Link> | 
            <Link to="/terms" className="mx-2 text-blue-200 hover:text-white transition-colors">Terms of Service</Link>
          </p>
          <p className="text-blue-400 text-xs mt-2">ISO 9001:2015 Certified | WHO-GMP Compliant</p>
        </div>
      </div>
    </footer>
  );
}