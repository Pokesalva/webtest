// page-sobre-mi.js
import { site, nav, about, socials } from "./content.js";
import {
  renderHeader,
  renderAboutMe,
  renderSocials,
  renderFooter,
  bindPlaceholderActions,
} from "./render.js";

document.getElementById("header").innerHTML = renderHeader(nav, site.name, "sobre-mi.html");
document.getElementById("main").innerHTML = renderAboutMe(about) + renderSocials(socials);
document.getElementById("footer").innerHTML = renderFooter(site, about);

bindPlaceholderActions();
