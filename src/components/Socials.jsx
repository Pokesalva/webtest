import { socials } from "../data/content";

export default function Socials() {
  return (
    <section className="section">
      <div className="container" style={{ textAlign: "center" }}>
        <h2>Sígueme</h2>
        <ul className="socials__list" style={{ justifyContent: "center" }}>
          <li>
            <a href={socials.instagram} target="_blank" rel="noreferrer">
              Instagram
            </a>
          </li>
          <li>
            <a href={socials.youtube} target="_blank" rel="noreferrer">
              YouTube
            </a>
          </li>
          <li>
            <a href={socials.tiktok} target="_blank" rel="noreferrer">
              TikTok
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
