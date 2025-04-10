import { c as createComponent, a as createAstro, m as maybeRenderHead, b as addAttribute, r as renderTemplate } from './astro/server_nzPgjIaO.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Astro = createAstro();
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Button;
  const { text = "TEXT", link = "LINK" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(link, "href")} class="boton" data-astro-cid-2veov33h> ${text} <span class="material-symbols-outlined" data-astro-cid-2veov33h>trending_flat</span> <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=trending_flat"> </a> `;
}, "D:/CEFP NURIA/DAW/DAW_0615-DissenyInterf\xEDciesWeb/ASTRO/frangh-portfolio/src/components/button.astro", void 0);

export { $$Button as $ };
