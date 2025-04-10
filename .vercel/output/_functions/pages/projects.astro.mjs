import { c as createComponent, m as maybeRenderHead, b as addAttribute, r as renderTemplate, d as renderComponent } from '../chunks/astro/server_nzPgjIaO.mjs';
import 'kleur/colors';
import { j as json, $ as $$Layout } from '../chunks/cv_BzduYj_9.mjs';
import { $ as $$Titol } from '../chunks/titol_GxKvrr-I.mjs';
import 'clsx';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const $$Projects$1 = createComponent(($$result, $$props, $$slots) => {
  const pageinfo = json.projects;
  function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString("es-ES", {
      day: "numeric",
      month: "short",
      year: "numeric"
    });
  }
  return renderTemplate`${maybeRenderHead()}<div data-astro-cid-lsjgadct> <div class="contenedor" data-astro-cid-lsjgadct> ${pageinfo.map((project) => renderTemplate`<a class="slag-project"${addAttribute(`/projects/${project.slug}`, "href")} data-astro-cid-lsjgadct> <div class="content" data-astro-cid-lsjgadct> <div class="content-inside" data-astro-cid-lsjgadct> <span class="m-0 project-name" data-astro-cid-lsjgadct>${project.name}</span> <span class="m-0 project-date" data-astro-cid-lsjgadct>
Publicado el <time${addAttribute(project.date, "datetime")} data-astro-cid-lsjgadct>${formatDate(project.date)}</time> </span> <span class="m-0 project-description" data-astro-cid-lsjgadct>${project.description}</span> </div> </div> </a>`)} </div> </div> `;
}, "D:/CEFP NURIA/DAW/DAW_0615-DissenyInterf\xEDciesWeb/ASTRO/frangh-portfolio/src/components/projects.astro", void 0);

const $$Projects = createComponent(($$result, $$props, $$slots) => {
  const pageinfo = json.blog_pos[1];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Titol", $$Titol, { "title": pageinfo.entradas[2].title })} ${renderComponent($$result2, "Projects", $$Projects$1, {})} ` })}`;
}, "D:/CEFP NURIA/DAW/DAW_0615-DissenyInterf\xEDciesWeb/ASTRO/frangh-portfolio/src/pages/projects.astro", void 0);

const $$file = "D:/CEFP NURIA/DAW/DAW_0615-DissenyInterfíciesWeb/ASTRO/frangh-portfolio/src/pages/projects.astro";
const $$url = "/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Projects,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
