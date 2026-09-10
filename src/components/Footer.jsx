import { site, about } from "../data/content";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <h3 style={{ color: "inherit" }}>{site.name}</h3>
          <p style={{ opacity: 0.7, margin: 0 }}>{about.location}</p>
        </div>
        <div>
          <p style={{ marginBottom: "0.75rem" }}>Contacto</p>
          <button
            className="btn btn--outline"
            onClick={() =>
              alert("Botón placeholder: acá iría tu formulario de contacto real.")
            }
          >
            Escríbeme
          </button>
        </div>
      </div>
    </footer>
  );
}
