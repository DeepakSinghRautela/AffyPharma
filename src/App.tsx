import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.tsx"
import Footer from "./components/Footer/Footer.tsx"

import Home from "./pages/Home.tsx";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails.tsx";
import Infrastructure from "./pages/Infrastructure.tsx";
import About from "./pages/About";
import Contact from "./pages/Contact";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/infrastructure" element={<Infrastructure />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
