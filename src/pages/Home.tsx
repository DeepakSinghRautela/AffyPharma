import Hero from "../components/Hero/Hero";

export default function Home() {
  const handleContactClick = () => {
    window.location.hash = 'contact';
  };

  return (
    <div className="pt-16">
      <Hero 
        title="Welcome to Affy Pharma" 
        subtitle="Leading manufacturer of high-quality injectable and pharmaceutical products"
        image="/images/home.jpg"
        ctaText="Contact Us"
        ctaAction={handleContactClick}
      />
      
      {/* Features Section */}
      <div className="py-16 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Affy Pharma</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are committed to delivering high-quality pharmaceutical products with the highest standards of safety and efficacy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center border border-blue-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quality Assurance</h3>
              <p className="text-gray-600">
                ISO certified manufacturing processes ensuring the highest quality standards for all our pharmaceutical products.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg text-center border border-blue-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">
                Continuous research and development to bring innovative pharmaceutical solutions to the market.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg text-center border border-blue-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Safety First</h3>
              <p className="text-gray-600">
                Patient safety is our top priority, with rigorous testing and quality control at every stage of production.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Products Overview */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Pharmaceutical Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We manufacture a wide range of high-quality pharmaceutical products to meet diverse healthcare needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Injectables</h3>
              <p className="text-gray-700 mb-4">High-quality sterile injectable solutions manufactured under strict GMP standards.</p>
              <div className="w-12 h-12 bg-blue-200 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
                </svg>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Tablets & Capsules</h3>
              <p className="text-gray-700 mb-4">Precision-manufactured solid dosage forms with consistent quality and efficacy.</p>
              <div className="w-12 h-12 bg-blue-200 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                </svg>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Syrups</h3>
              <p className="text-gray-700 mb-4">Palatable liquid formulations designed for easy administration and patient compliance.</p>
              <div className="w-12 h-12 bg-blue-200 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
                </svg>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Topical Solutions</h3>
              <p className="text-gray-700 mb-4">Specialized formulations for external application with enhanced bioavailability.</p>
              <div className="w-12 h-12 bg-blue-200 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM7 3H5a2 2 0 00-2 2v12a4 4 0 004 4h2a2 2 0 002-2V5a2 2 0 00-2-2z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">Ready to Partner With Us?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join us in our mission to deliver high-quality pharmaceutical products that make a difference in people's lives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleContactClick}
              className="bg-white text-blue-800 hover:bg-blue-50 font-bold py-3 px-8 rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Contact Us
            </button>
            <a 
              href="/products" 
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-800 font-bold py-3 px-8 rounded-full transition-colors duration-300"
            >
              View Our Products
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}