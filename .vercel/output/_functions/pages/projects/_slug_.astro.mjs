import { c as createComponent, a as createAstro, d as renderComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_nzPgjIaO.mjs';
import 'kleur/colors';
import { j as json, $ as $$Layout } from '../../chunks/cv_Cw_lepjJ.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const paths = json.projects.map((project) => ({
    params: { slug: project.slug }
    //EL ID SERA PARA ACCEDER AL SLUG DE CADA UNO DE LOS PROJECTOS
  }));
  return paths;
}
const $$slug = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const project = json.projects.find((project2) => project2.slug == slug);
  if (!project) {
    throw new Error("Proyecto no encontrado");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-ovxcmftc": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="contenedor" data-astro-cid-ovxcmftc> <div class="name-project" data-astro-cid-ovxcmftc> <h1 data-astro-cid-ovxcmftc>${project.name}</h1> </div> <div class="info-project" data-astro-cid-ovxcmftc> <img${addAttribute(project.image, "src")}${addAttribute(`Imagen Preview ${project.name}`, "alt")} data-astro-cid-ovxcmftc> <div class="info-project-inside" data-astro-cid-ovxcmftc> <p data-astro-cid-ovxcmftc>${project.description}</p> <p data-astro-cid-ovxcmftc>${project.date}</p> </div> <div class="demo-container" data-astro-cid-ovxcmftc> <a${addAttribute(project.url, "href")} data-astro-cid-ovxcmftc>Demo ${project.name}</a> </div> </div> </div> ` })} `;
}, "G:/CEFP NURIA/DAW/DAW_0615-DissenyInterf\xEDciesWeb/ASTRO/frangh-portfolio/src/pages/projects/[slug].astro", void 0);

const $$file = "G:/CEFP NURIA/DAW/DAW_0615-DissenyInterfíciesWeb/ASTRO/frangh-portfolio/src/pages/projects/[slug].astro";
const $$url = "/projects/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$slug,
    file: $$file,
    getStaticPaths,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
