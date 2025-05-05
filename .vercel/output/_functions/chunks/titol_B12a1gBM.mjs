import { c as createComponent, a as createAstro, m as maybeRenderHead, r as renderTemplate } from './astro/server_nzPgjIaO.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                           */

const $$Astro = createAstro();
const $$Titol = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Titol;
  const { title = "", description = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div id="container" data-astro-cid-rnussiw3> <div class="titulo" data-astro-cid-rnussiw3> <h1 data-astro-cid-rnussiw3>${title}</h1> </div> <div class="descripcion" data-astro-cid-rnussiw3> <p data-astro-cid-rnussiw3>${description}</p> </div> </div> `;
}, "G:/CEFP NURIA/DAW/DAW_0615-DissenyInterf\xEDciesWeb/ASTRO/frangh-portfolio/src/components/titol.astro", void 0);

export { $$Titol as $ };
