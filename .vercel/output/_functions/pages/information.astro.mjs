import { c as createComponent, m as maybeRenderHead, b as addAttribute, r as renderTemplate, a as createAstro, d as renderComponent } from '../chunks/astro/server_nzPgjIaO.mjs';
import 'kleur/colors';
import { j as json, $ as $$Layout } from '../chunks/cv_Cw_lepjJ.mjs';
import { $ as $$Titol } from '../chunks/titol_B12a1gBM.mjs';
import 'clsx';
/* empty css                                       */
export { renderers } from '../renderers.mjs';

const $$Skills = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section data-astro-cid-4aoyh525> <h2 data-astro-cid-4aoyh525>Habilidades</h2> <div class="skills-container" data-astro-cid-4aoyh525> <div class="skills-frontend" data-astro-cid-4aoyh525> <h3 class="skills-title" data-astro-cid-4aoyh525>Frontend</h3> <div class="skills-frontend-inside" data-astro-cid-4aoyh525> ${Object.entries(json.skills.frontend).map(([key, value]) => {
    return renderTemplate`<div class="inside-skills-container" data-astro-cid-4aoyh525> <p data-astro-cid-4aoyh525>${key}</p> <img${addAttribute(value, "src")} data-astro-cid-4aoyh525> </div>`;
  })} </div> </div> <div class="skills-backend" data-astro-cid-4aoyh525> <h3 class="skills-title" data-astro-cid-4aoyh525>Backend</h3> <div class="skills-backend-inside" data-astro-cid-4aoyh525> ${Object.entries(json.skills.backend).map(([key, value]) => {
    return renderTemplate`<div class="inside-skills-container" data-astro-cid-4aoyh525> <p data-astro-cid-4aoyh525>${key}</p> <img${addAttribute(value, "src")} data-astro-cid-4aoyh525> </div>`;
  })} </div> </div> </div> </section> `;
}, "G:/CEFP NURIA/DAW/DAW_0615-DissenyInterf\xEDciesWeb/ASTRO/frangh-portfolio/src/components/skills.astro", void 0);

const $$ExperienceCard = createComponent(($$result, $$props, $$slots) => {
  const pageinfo = json.experience;
  return renderTemplate`${maybeRenderHead()}<div data-astro-cid-3u3o4gmf> <h2 data-astro-cid-3u3o4gmf>Experiencia</h2> <div class="contenedor" data-astro-cid-3u3o4gmf> ${pageinfo.map((exp) => renderTemplate`<div class="contenedor-content" data-astro-cid-3u3o4gmf> <div class="content" data-astro-cid-3u3o4gmf> <div class="content-img" data-astro-cid-3u3o4gmf> <img${addAttribute(exp["company-img"], "src")}${addAttribute(`Logo ${exp.company}`, "alt")} data-astro-cid-3u3o4gmf> </div> <div class="content-inside" data-astro-cid-3u3o4gmf> <span class="m-0 company" data-astro-cid-3u3o4gmf>${exp.company}</span> <span class="m-0 position" data-astro-cid-3u3o4gmf>${exp.position}</span> <span class="duration" data-astro-cid-3u3o4gmf>${exp.duration}</span> </div> </div> </div>`)} </div> </div> `;
}, "G:/CEFP NURIA/DAW/DAW_0615-DissenyInterf\xEDciesWeb/ASTRO/frangh-portfolio/src/components/experience-card.astro", void 0);

const $$Education = createComponent(($$result, $$props, $$slots) => {
  const eduinfo = json.education;
  return renderTemplate`${maybeRenderHead()}<div data-astro-cid-ttaxsxpe> <h2 data-astro-cid-ttaxsxpe>Formación</h2> <div class="contenedor" data-astro-cid-ttaxsxpe> ${eduinfo.map((edu) => renderTemplate`<div class="contenedor-content" data-astro-cid-ttaxsxpe> <div class="content" data-astro-cid-ttaxsxpe> <div class="content-img" data-astro-cid-ttaxsxpe> <img${addAttribute(edu.img, "src")}${addAttribute(edu.institution, "alt")} data-astro-cid-ttaxsxpe> </div> <div class="content-inside" data-astro-cid-ttaxsxpe> <span class="m-0 company" data-astro-cid-ttaxsxpe>${edu.institution}</span> <span class="m-0 position" data-astro-cid-ttaxsxpe>${edu.degree}</span> <span class="duration" data-astro-cid-ttaxsxpe>${edu.year}</span> </div> </div> </div>`)} </div> </div> `;
}, "G:/CEFP NURIA/DAW/DAW_0615-DissenyInterf\xEDciesWeb/ASTRO/frangh-portfolio/src/components/education.astro", void 0);

const $$Lenguaje = createComponent(($$result, $$props, $$slots) => {
  const lenguajeinfo = json.languages;
  return renderTemplate`${maybeRenderHead()}<div data-astro-cid-zzmotijc> <h2 data-astro-cid-zzmotijc>Idiomas</h2> <div class="lenguajes" data-astro-cid-zzmotijc> <div class="lenguajes-content" data-astro-cid-zzmotijc> ${lenguajeinfo.map((lenguaje) => renderTemplate`<div class="lenguaje-inside" data-astro-cid-zzmotijc>  <img${addAttribute(lenguaje.img, "src")}${addAttribute(lenguaje.language, "alt")} data-astro-cid-zzmotijc> <p data-astro-cid-zzmotijc>${lenguaje.level}</p> </div>`)} </div> </div> </div> `;
}, "G:/CEFP NURIA/DAW/DAW_0615-DissenyInterf\xEDciesWeb/ASTRO/frangh-portfolio/src/components/lenguaje.astro", void 0);

const $$Astro = createAstro();
const $$Information = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Information;
  const pageinfo = json.blog_pos[1];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Titol", $$Titol, { "title": pageinfo.entradas[0].title, "description": pageinfo.entradas[0].summary })} ${renderComponent($$result2, "Lenguaje", $$Lenguaje, {})} ${renderComponent($$result2, "Skills", $$Skills, {})} ${renderComponent($$result2, "Education", $$Education, {})} ${renderComponent($$result2, "Experience", $$ExperienceCard, {})} ` })}`;
}, "G:/CEFP NURIA/DAW/DAW_0615-DissenyInterf\xEDciesWeb/ASTRO/frangh-portfolio/src/pages/information.astro", void 0);

const $$file = "G:/CEFP NURIA/DAW/DAW_0615-DissenyInterfíciesWeb/ASTRO/frangh-portfolio/src/pages/information.astro";
const $$url = "/information";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Information,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
