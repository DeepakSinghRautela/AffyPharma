import "./Hero.scss";

interface HeroProps {
  title: string;
  image: string;
}

export default function Hero({ title, image }: HeroProps) {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${image})` }}
    >
      <h1>{title}</h1>
      <span className="scroll">↓</span>
    </section>
  );
}
