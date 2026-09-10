// page-home.js
import { site, nav, hero, intro, about } from "./content.js";
import {
  renderHeader,
  renderHero,
  renderIntro,
  renderFooter,
  bindPlaceholderActions,
} from "./render.js";

document.getElementById("header").innerHTML = renderHeader(nav, site.name, "index.html");
document.getElementById("main").innerHTML = renderHero(hero) + renderIntro(intro);
document.getElementById("footer").innerHTML = renderFooter(site, about);

bindPlaceholderActions();
