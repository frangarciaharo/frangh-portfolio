import { c as createComponent, a as createAstro, m as maybeRenderHead, d as renderComponent, r as renderTemplate, b as addAttribute } from '../chunks/astro/server_nzPgjIaO.mjs';
import 'kleur/colors';
import { j as json, $ as $$Layout } from '../chunks/cv_Cw_lepjJ.mjs';
import { $ as $$Button } from '../chunks/button_ChJw5gTa.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro$2 = createAstro();
const $$Presentacion = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Presentacion;
  const pageinfo = json.blog_pos;
  const {
    name = "",
    description = "",
    sumary = pageinfo,
    button = { text: "M\xE1s Informaci\xF3n", link: "/information" }
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section data-astro-cid-oncvlb2t> <div class="informacion-presentacion" data-astro-cid-oncvlb2t> <h1 data-astro-cid-oncvlb2t>${name}</h1> <h2 data-astro-cid-oncvlb2t>${description}</h2> <p class="sumary" data-astro-cid-oncvlb2t>${sumary}</p> ${renderComponent($$result, "Button", $$Button, { "text": button.text, "link": button.link, "data-astro-cid-oncvlb2t": true })} </div> </section> `;
}, "G:/CEFP NURIA/DAW/DAW_0615-DissenyInterf\xEDciesWeb/ASTRO/frangh-portfolio/src/components/Presentacion.astro", void 0);

const $$Astro$1 = createAstro();
const $$ProjectsCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ProjectsCard;
  const pageinfo = json.projects;
  const {
    button = { text: "Ver todos los proyectos", link: "/projects" }
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="container" data-astro-cid-7xnf55ja> <h2 data-astro-cid-7xnf55ja>Proyectos</h2> <div class="contenedor" data-astro-cid-7xnf55ja> ${pageinfo.map((project) => renderTemplate`<a class="slag-project"${addAttribute(`/projects/${project.slug}`, "href")} data-astro-cid-7xnf55ja> <div class="content" data-astro-cid-7xnf55ja> <div class="content-img" data-astro-cid-7xnf55ja> <img${addAttribute(project["image"], "src")}${addAttribute(`Imagen Preview ${project.name}`, "alt")} data-astro-cid-7xnf55ja> </div> <div class="content-inside" data-astro-cid-7xnf55ja> <span class="m-0 project-name" data-astro-cid-7xnf55ja>${project.name}</span> <span class="m-0 project-description" data-astro-cid-7xnf55ja>${project.description}</span> </div> </div> </a>`)} </div> ${renderComponent($$result, "Button", $$Button, { "text": button.text, "link": button.link, "data-astro-cid-7xnf55ja": true })} </div> `;
}, "G:/CEFP NURIA/DAW/DAW_0615-DissenyInterf\xEDciesWeb/ASTRO/frangh-portfolio/src/components/projects-card.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const pageinfo = json;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Presentacion", $$Presentacion, { "name": pageinfo.name, "description": pageinfo.post, "sumary": pageinfo.blog_pos[0].description })} ${renderComponent($$result2, "Projects", $$ProjectsCard, {})} ` })}`;
}, "G:/CEFP NURIA/DAW/DAW_0615-DissenyInterf\xEDciesWeb/ASTRO/frangh-portfolio/src/pages/index.astro", void 0);

const $$file = "G:/CEFP NURIA/DAW/DAW_0615-DissenyInterfíciesWeb/ASTRO/frangh-portfolio/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
