import { Link } from "react-router-dom";
import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">AFFY PHARMA</div>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
        <Link to="/infrastructure">Infrastructure</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}
