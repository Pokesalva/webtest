// page-tienda.js
import { site, nav, shopItems, about } from "./content.js";
import {
  renderHeader,
  renderShopGrid,
  renderFooter,
  bindPlaceholderActions,
} from "./render.js";

document.getElementById("header").innerHTML = renderHeader(nav, site.name, "tienda.html");
document.getElementById("main").innerHTML = renderShopGrid(shopItems);
document.getElementById("footer").innerHTML = renderFooter(site, about);

bindPlaceholderActions();
