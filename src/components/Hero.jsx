import { hero } from "../data/content";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero__content">
        <p className="eyebrow">{hero.eyebrow}</p>
        <h1>{hero.title}</h1>
        <p>{hero.body}</p>
        <button
          className="btn btn--primary"
          onClick={() => alert("Acá conectarías esto a un formulario de contacto o mailto.")}
        >
          {hero.ctaLabel}
        </button>
      </div>
    </section>
  );
}
