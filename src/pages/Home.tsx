import Hero from "../components/Hero/Hero";

export default function Home() {
  return (
    <>
      <Hero title="Welcome to Affy Pharma" image="/images/home.jpg" />
      <div style={{ padding: "40px", textAlign: "center" }}>
        <h2>Quality Pharmaceutical Manufacturing</h2>
        <p>
          We specialize in high quality injectable and pharmaceutical products.
        </p>
      </div>
    </>
  );
}
