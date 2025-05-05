import { c as createComponent, m as maybeRenderHead, b as addAttribute, r as renderTemplate, d as renderComponent } from '../chunks/astro/server_nzPgjIaO.mjs';
import 'kleur/colors';
import { j as json, $ as $$Layout } from '../chunks/cv_Cw_lepjJ.mjs';
import 'clsx';
/* empty css                                   */
import { $ as $$Titol } from '../chunks/titol_B12a1gBM.mjs';
export { renderers } from '../renderers.mjs';

const $$Contact$1 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section data-astro-cid-4jmlleyw> <div class="contact-container" data-astro-cid-4jmlleyw> ${Object.entries(json.contact).map(([key, value]) => {
    let name = "";
    name = key.charAt(0).toUpperCase() + key.slice(1);
    let show = "";
    switch (key) {
      case "linkedin":
        show = "in/frangarciaharo";
        break;
      case "github":
        show = "git/frangh";
        break;
      default:
        show = value;
        break;
    }
    return renderTemplate`<div class="inside-contact-container" data-astro-cid-4jmlleyw> <p data-astro-cid-4jmlleyw>${name}:</p> <a${addAttribute(value, "href")} target="_blank" data-astro-cid-4jmlleyw>${show}</a> </div>`;
  })} </div> </section> `;
}, "G:/CEFP NURIA/DAW/DAW_0615-DissenyInterf\xEDciesWeb/ASTRO/frangh-portfolio/src/components/contact.astro", void 0);

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const pageinfo = json.blog_pos[1];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Titol", $$Titol, { "title": pageinfo.entradas[2].title, "description": pageinfo.entradas[2].summary })} ${renderComponent($$result2, "Contacto", $$Contact$1, {})} ` })}`;
}, "G:/CEFP NURIA/DAW/DAW_0615-DissenyInterf\xEDciesWeb/ASTRO/frangh-portfolio/src/pages/contact.astro", void 0);

const $$file = "G:/CEFP NURIA/DAW/DAW_0615-DissenyInterfíciesWeb/ASTRO/frangh-portfolio/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Contact,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
