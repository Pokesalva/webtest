import { intro } from "../data/content";

export default function Intro() {
  return (
    <section className="section">
      <div className="container intro">
        <div className="intro__image">[ tu foto acá ]</div>
        <div>
          <h2>{intro.heading}</h2>
          <p>{intro.body}</p>
        </div>
      </div>
    </section>
  );
}
