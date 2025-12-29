import { useParams } from "react-router-dom";
import { products } from "../data/products";

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);

  if (!product) return <p>Product not found</p>;

  return (
    <div style={{ padding: "40px" }}>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p><b>Strength:</b> {product.strength}</p>
      <p><b>Packing:</b> {product.packing}</p>
    </div>
  );
}
