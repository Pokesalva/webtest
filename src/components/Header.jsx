import { site } from "../data/content";

export default function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <a href="index.html" className="header__logo">
          {site.name}
        </a>
        <nav>
          <ul className="header__nav">
            {site.nav.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
