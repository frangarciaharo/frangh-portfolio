import { c as createComponent, a as createAstro, b as addAttribute, e as renderHead, f as renderSlot, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_nzPgjIaO.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                               */
import { $ as $$Button } from '../chunks/button_uZNf_L8i.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Layout404 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout404;
  return renderTemplate`<html lang="es" data-astro-cid-sulf7shm> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Fran García - ERROR 404</title>${renderHead()}</head> <body data-astro-cid-sulf7shm> <div class="contenedor" data-astro-cid-sulf7shm> ${renderSlot($$result, $$slots["default"])} </div> </body></html>`;
}, "D:/CEFP NURIA/DAW/DAW_0615-DissenyInterf\xEDciesWeb/ASTRO/frangh-portfolio/src/layouts/Layout404.astro", void 0);

const Numero4 = new Proxy({"src":"/_astro/4.D3LLl5t3.png","width":980,"height":980,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/CEFP NURIA/DAW/DAW_0615-DissenyInterfíciesWeb/ASTRO/frangh-portfolio/public/assets/404/4.png";
							}
							
							return target[name];
						}
					});

const Homer = new Proxy({"src":"/_astro/homer.DznkitxP.png","width":360,"height":534,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/CEFP NURIA/DAW/DAW_0615-DissenyInterfíciesWeb/ASTRO/frangh-portfolio/public/assets/404/homer.png";
							}
							
							return target[name];
						}
					});

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout404", $$Layout404, { "data-astro-cid-zetdm5md": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="contenedor-404" data-astro-cid-zetdm5md> <div class="error-images" data-astro-cid-zetdm5md> <img class="error-img"${addAttribute(Numero4.src, "src")} alt="Number 4" data-astro-cid-zetdm5md> <img class="error-img-homer"${addAttribute(Homer.src, "src")} alt="Homer Simpson" data-astro-cid-zetdm5md> <img class="error-img"${addAttribute(Numero4.src, "src")} alt="Number 4" data-astro-cid-zetdm5md> </div> <h2 data-astro-cid-zetdm5md>"La página que estás buscando no está disponible. Puede que haya sido eliminada, movida, o nunca haya existido."</h2> </div> ${renderComponent($$result2, "Button", $$Button, { "text": "Ir al inicio", "link": "/", "data-astro-cid-zetdm5md": true })} ` })} `;
}, "D:/CEFP NURIA/DAW/DAW_0615-DissenyInterf\xEDciesWeb/ASTRO/frangh-portfolio/src/pages/404.astro", void 0);

const $$file = "D:/CEFP NURIA/DAW/DAW_0615-DissenyInterfíciesWeb/ASTRO/frangh-portfolio/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$404,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
