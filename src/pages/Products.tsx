import Hero from "../components/Hero/Hero";
import { products } from "../data/products";
import { Link } from "react-router-dom";
import "./Products.scss";

export default function Products() {
  return (
    <>
      <Hero title="Products" image="/images/products.jpg" />
      <div className="product-grid">
        {products.map(p => (
          <Link to={`/products/${p.id}`} key={p.id} className="card">
            <img src={p.image} alt={p.name} />
            <h3>{p.name}</h3>
          </Link>
        ))}
      </div>
    </>
  );
}
