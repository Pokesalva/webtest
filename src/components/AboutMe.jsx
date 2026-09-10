import { about } from "../data/content";

export default function AboutMe() {
  return (
    <section id="sobre-mi" className="section section--dark">
      <div className="container about">
        <div className="about__portrait">[ tu foto ]</div>
        <div>
          <h2>{about.heading}</h2>
          <p>{about.body}</p>
          <p style={{ marginTop: "1.5rem", fontWeight: 500 }}>
            {about.founder} — {about.role}
            <br />
            <span style={{ opacity: 0.7 }}>{about.location}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
