# Woodcraft Site (plantilla)

Sitio estático **multi-página** hecho con Vite + React: cada página es un
`.html` real e independiente (se recarga al navegar entre ellas, como un
sitio clásico), organizado por secciones/componentes reutilizables.
Todos los botones que normalmente dispararían pagos o formularios (agregar al
carro, cotizar, escribirme) son placeholders con un `alert()` — reemplázalos
cuando tengas backend, mailto, WhatsApp, Formspree, Stripe, etc.

## Páginas

| Página          | Archivo         | Entry JS               |
|-----------------|-----------------|-------------------------|
| Inicio          | `index.html`    | `src/main-home.jsx`     |
| Tienda          | `tienda.html`   | `src/main-tienda.jsx`   |
| Sobre mí        | `sobre-mi.html` | `src/main-sobre-mi.jsx` |

## Estructura

```
index.html
tienda.html
sobre-mi.html
src/
  data/content.js     <- TODO tu texto y links vive acá
  components/
    Header.jsx
    Hero.jsx
    Intro.jsx
    ShopPreview.jsx
    AboutMe.jsx
    Socials.jsx
    Footer.jsx
  pages/
    HomePage.jsx       <- arma Hero + Intro
    ShopPage.jsx        <- arma ShopPreview
    AboutPage.jsx       <- arma AboutMe + Socials
  main-home.jsx         <- monta HomePage en index.html
  main-tienda.jsx       <- monta ShopPage en tienda.html
  main-sobre-mi.jsx     <- monta AboutPage en sobre-mi.html
  index.css             <- paleta, tipografía, todos los estilos
```

### Agregar una página nueva

1. Crea `mi-pagina.html` en la raíz (copia el patrón de `tienda.html`).
2. Crea `src/main-mi-pagina.jsx` que monte un componente de página.
3. Crea `src/pages/MiPagina.jsx` combinando los componentes que necesites.
4. Agrégala en `vite.config.js`, dentro de `build.rollupOptions.input`.
5. Agrégala al array `nav` en `src/data/content.js` si quieres que salga en el menú.

### Sobre los links

Todos los `href` entre páginas son **relativos** (`tienda.html`, no
`/tienda.html`). Esto es a propósito: como el sitio se publica bajo un
subpath en GitHub Pages (`base: "/tu-repo/"`), un link absoluto se rompería.
Si mueves páginas a subcarpetas, ajusta los links en consecuencia.

### Navegar entre páginas en desarrollo

Con `npm run dev` corriendo, entra directo a:
- `http://localhost:5173/` (Inicio)
- `http://localhost:5173/tienda.html`
- `http://localhost:5173/sobre-mi.html`

O simplemente haz clic en el menú del header — funciona igual en dev y en producción.

Para editar textos, precios o links de redes sociales, solo toca
`src/data/content.js`. Para cambiar colores/fuentes, toca las variables
`:root` al inicio de `src/index.css`.

## Desarrollo local

```bash
npm install
npm run dev
```

Abre lo que te indique la terminal (usualmente http://localhost:5173).

## Poner tus imágenes

Las cajas con `[ tu foto acá ]` son placeholders. Para usar tus fotos:

1. Ponlas en `public/` (ej: `public/hero.jpg`).
2. En el componente correspondiente, reemplaza el `<div className="...">[ texto ]</div>`
   por `<img src="/hero.jpg" alt="..." />`.

## Publicar en GitHub Pages

### Opción A — con el paquete `gh-pages` (incluido en package.json)

1. Crea el repo en GitHub y súbelo:
   ```bash
   git init
   git add .
   git commit -m "primer commit"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/TU_REPO.git
   git push -u origin main
   ```
2. En `vite.config.js`, cambia `base: "/mi-repo/"` por
   `base: "/TU_REPO/"` (el nombre exacto del repositorio).
3. Publica:
   ```bash
   npm run deploy
   ```
   Esto compila el sitio y lo sube a una rama `gh-pages`.
4. En GitHub → Settings → Pages, elige la rama `gh-pages` como fuente.
5. Tu sitio quedará en `https://TU_USUARIO.github.io/TU_REPO/`.

### Opción B — con GitHub Actions (sin comandos manuales cada vez)

Si prefieres que se publique solo con cada `git push`, avísame y te dejo el
archivo `.github/workflows/deploy.yml` correspondiente.

### Si vas a usar `usuario.github.io` como repo (dominio raíz)

En ese caso, en `vite.config.js` deja `base: "/"` en vez de `/TU_REPO/`.
