// render.js
// Cada función arma el HTML de una sección como string.
// No hay librerías: esto ES la "modularización" — un módulo JS por
// responsabilidad, importado donde se necesite.

export function renderHeader(navItems, siteName, activeHref) {
  const links = navItems
    .map(
      (item) => `
        <li>
          <a href="${item.href}" ${item.href === activeHref ? 'aria-current="page"' : ""}>
            ${item.label}
          </a>
        </li>`
    )
    .join("");

  return `
    <header class="header">
      <div class="container header__inner">
        <a href="index.html" class="header__logo">${siteName}</a>
        <nav>
          <ul class="header__nav">${links}</ul>
        </nav>
      </div>
    </header>
  `;
}

export function renderHero(hero) {
  return `
    <section id="top" class="hero">
      <div class="container hero__content">
        <p class="eyebrow">${hero.eyebrow}</p>
        <h1>${hero.title}</h1>
        <p>${hero.body}</p>
        <button class="btn btn--primary" data-action="contact-placeholder">
          ${hero.ctaLabel}
        </button>
      </div>
    </section>
  `;
}

export function renderIntro(intro) {
  return `
    <section class="section">
      <div class="container intro">
        <div class="intro__image">[ tu foto acá ]</div>
        <div>
          <h2>${intro.heading}</h2>
          <p>${intro.body}</p>
        </div>
      </div>
    </section>
  `;
}

export function renderShopGrid(items) {
  const cards = items
    .map(
      (item) => `
      <article class="product-card">
        <div class="product-card__image">[ foto de ${item.name} ]</div>
        <div class="product-card__body">
          <h3>${item.name}</h3>
          <span class="product-card__price">${item.price}</span>
          <p>${item.description}</p>
          <button class="btn btn--outline" data-action="add-to-cart-placeholder" data-item="${item.id}">
            Agregar al carro
          </button>
        </div>
      </article>`
    )
    .join("");

  return `
    <section class="section">
      <div class="container">
        <p class="eyebrow">Tienda</p>
        <h2>Piezas disponibles</h2>
        <div class="shop-grid">${cards}</div>
      </div>
    </section>
  `;
}

export function renderAboutMe(about) {
  return `
    <section class="section section--dark">
      <div class="container about">
        <div class="about__portrait">[ tu foto ]</div>
        <div>
          <h2>${about.heading}</h2>
          <p>${about.body}</p>
          <p class="about__signature">
            ${about.founder} — ${about.role}<br />
            <span class="about__location">${about.location}</span>
          </p>
        </div>
      </div>
    </section>
  `;
}

export function renderSocials(socials) {
  return `
    <section class="section">
      <div class="container align-center">
        <h2>Sígueme</h2>
        <ul class="socials__list justify-center">
          <li><a href="${socials.instagram}" target="_blank" rel="noreferrer">Instagram</a></li>
          <li><a href="${socials.youtube}" target="_blank" rel="noreferrer">YouTube</a></li>
          <li><a href="${socials.tiktok}" target="_blank" rel="noreferrer">TikTok</a></li>
        </ul>
      </div>
    </section>
  `;
}

export function renderFooter(site, about, socials) {
  return `
    <footer class="footer">
      <div class="container footer__inner">
        <div>
          <h3>${site.name}</h3>
          <p class="footer__location">${about.location}</p>
        </div>
        <div>
          <p>Contacto</p>
          <a href="${socials.contacto}" class="btn btn--outline" target="_blank" rel="noreferrer">
            Escríbeme
          </a>
        </div>
      </div>
    </footer>
  `;
}

// Conecta los botones placeholder (agregar al carro, cotizar, contacto).
// Reemplaza esta función cuando tengas backend, mailto, WhatsApp, Stripe, etc.
export function bindPlaceholderActions(root = document) {
  root.querySelectorAll('[data-action="contact-placeholder"]').forEach((btn) => {
    btn.addEventListener("click", () => {
      window.open("${socials.contacto}", "_blank");
    });
  });

  root.querySelectorAll('[data-action="add-to-cart-placeholder"]').forEach((btn) => {
    btn.addEventListener("click", () => {
      alert("Botón placeholder: acá iría el flujo de compra/pago (Stripe, WhatsApp, mail, etc.).");
    });
  });
}
