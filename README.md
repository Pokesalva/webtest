# Taller Roble — sitio estático (HTML + CSS + JS puro)

Sin frameworks, sin build, sin `node_modules`, sin `.env`, sin nada oculto.
Todo lo que ves en este repo es exactamente lo que se sube al navegador.
Es 100% seguro subirlo público a GitHub Pages tal cual está.

## Estructura

```
index.html          <- página de inicio (¡ábrela con un servidor, ver abajo!)
tienda.html         <- página de tienda
sobre-mi.html        <- página sobre mí
css/
  styles.css         <- todos los estilos del sitio
js/
  content.js         <- TODO el texto, precios y links vive acá (público)
  render.js           <- funciones que arman el HTML de cada sección
  page-home.js         <- combina header + hero + intro para index.html
  page-tienda.js        <- combina header + grid de tienda para tienda.html
  page-sobre-mi.js       <- combina header + about + socials para sobre-mi.html
```

### Cómo está modularizado (sin librerías)

- `js/content.js` exporta los datos (nombre del sitio, textos, precios, links).
- `js/render.js` exporta una función por sección (`renderHeader`,
  `renderHero`, `renderShopGrid`, etc.) que devuelve un string de HTML.
- Cada página tiene su propio script (`page-home.js`, `page-tienda.js`,
  `page-sobre-mi.js`) que importa lo que necesita de esos dos módulos y
  rellena los contenedores `#header`, `#main`, `#footer` de su `.html`.

Esto es "módulos JS nativos" (`import`/`export` de ES Modules) — no hay
build, ni bundler, ni dependencias. El navegador entiende `type="module"`
directamente.

### Editar contenido

Todo el texto, precios y links de redes sociales se edita en un solo lugar:
`js/content.js`. No necesitas tocar el HTML ni el `render.js` para cambiar
textos.

### Agregar una página nueva

1. Copia `tienda.html` como plantilla y cámbiale el `<title>` y el
   `<script type="module" src="js/page-tienda.js">` por tu propio archivo.
2. Crea `js/page-mi-pagina.js` (copia el patrón de los otros `page-*.js`).
3. Si quieres una sección nueva (no reciclada), agrega una función
   `renderMiSeccion(...)` en `js/render.js`.
4. Agrega el link en el array `nav` de `js/content.js` para que salga en
   el menú de todas las páginas.

### Poner tus imágenes

Los bloques `[ tu foto acá ]` son placeholders de texto dentro de
`js/render.js`. Para usar una imagen real:

1. Crea una carpeta `img/` y pon ahí tus fotos (ej: `img/hero.jpg`).
2. En `render.js`, cambia el `<div class="intro__image">...</div>` (o el
   que corresponda) por `<img src="img/hero.jpg" alt="..." />`.

### Botones placeholder

"Agregar al carro", "Cotizar un proyecto" y "Escríbeme" solo muestran una
alerta por ahora (ver `bindPlaceholderActions` en `render.js`). Reemplaza esa
función cuando conectes un mailto, WhatsApp, Formspree, Stripe, etc.

## Ver el sitio en tu computador

**Importante:** como usamos `import`/`export` (ES Modules) y no hay build,
los navegadores bloquean estos módulos si abres el `.html` directo con doble
clic (protocolo `file://`). Necesitas levantar un servidor local simple —
no requiere instalar nada con `npm`:

**Opción A — Python (viene instalado en Mac/Linux, y en Windows si
instalaste Python):**
```bash
cd woodcraft-static
python3 -m http.server 8000
```
Abre `http://localhost:8000/` en el navegador.

**Opción B — Node, sin instalar nada permanente:**
```bash
cd woodcraft-static
npx serve
```

**Opción C — VS Code:**
Instala la extensión "Live Server" y haz clic derecho en `index.html` →
"Open with Live Server".

## Publicar en GitHub Pages

1. Crea el repo y sube el contenido de esta carpeta a la rama `main`:
   ```bash
   git init
   git add .
   git commit -m "sitio estático"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/TU_REPO.git
   git push -u origin main
   ```
2. En GitHub → **Settings → Pages**, en "Source" elige la rama `main` y
   la carpeta `/ (root)`.
3. En un par de minutos tu sitio queda en:
   `https://TU_USUARIO.github.io/TU_REPO/`

No hay paso de build: GitHub Pages sirve estos archivos tal cual. Como los
links entre páginas (`index.html`, `tienda.html`, etc.) son relativos, van
a funcionar sin importar si el repo queda en la raíz de tu usuario o en un
subpath (`/TU_REPO/`).

## Nada sensible, por diseño

- No hay `.env`, ni claves de API, ni tokens en ningún archivo.
- `js/content.js` está pensado para ser 100% público — es literalmente el
  texto de tu página, nada más.
- Los botones de pago/formulario son solo `alert()` hasta que decidas a qué
  servicio conectarlos (y ese servicio nunca debería requerir que guardes
  una clave secreta en este repo estático — para eso existen servicios como
  Stripe Checkout links, Formspree, o un backend aparte).
