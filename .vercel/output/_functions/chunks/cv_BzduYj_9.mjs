import { c as createComponent, m as maybeRenderHead, r as renderTemplate, a as createAstro, b as addAttribute, e as renderHead, d as renderComponent, f as renderSlot } from './astro/server_nzPgjIaO.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                           */

const $$Navegacion = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header data-astro-cid-hxf7jpfn> <div class="header-inside" data-astro-cid-hxf7jpfn> <a class="logo" href="/" data-astro-cid-hxf7jpfn> <span data-astro-cid-hxf7jpfn>FGH</span> </a> <nav data-astro-cid-hxf7jpfn> <a href="/information" data-astro-cid-hxf7jpfn>Información</a> <a href="/contact" data-astro-cid-hxf7jpfn>Contacto</a> </nav> </div> </header> `;
}, "D:/CEFP NURIA/DAW/DAW_0615-DissenyInterf\xEDciesWeb/ASTRO/frangh-portfolio/src/components/Navegacion.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer data-astro-cid-sz7xmlte> <div class="footer-inside" data-astro-cid-sz7xmlte> <p data-astro-cid-sz7xmlte>© 2010 - 2025 / Fran García</p> <a href="#" data-astro-cid-sz7xmlte>View Source</a> </div> </footer> `;
}, "D:/CEFP NURIA/DAW/DAW_0615-DissenyInterf\xEDciesWeb/ASTRO/frangh-portfolio/src/components/Footer.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="es" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Fran García - DAW Student</title>${renderHead()}</head> <body data-astro-cid-sckkx6r4> <div class="contenedor" data-astro-cid-sckkx6r4> ${renderComponent($$result, "Navegacion", $$Navegacion, { "data-astro-cid-sckkx6r4": true })} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-sckkx6r4": true })} </div> </body></html>`;
}, "D:/CEFP NURIA/DAW/DAW_0615-DissenyInterf\xEDciesWeb/ASTRO/frangh-portfolio/src/layouts/Layout.astro", void 0);

const name = "Fran García Haro";
const post = "Desarrollador Web";
const contact = {"email":"frangaha06@gmail.com","phone":"+34 686 231 428","location":"Viladecans, Catalunya","website":"https://frangarciaharo.netlify.app","linkedin":"https://es.linkedin.com/in/frangarciaharo","github":"https://github.com/frangarciaharo"};
const education = [{"img":"/assets/logos/cefp-nuria.webp","degree":"FP Desarrollo de Aplicaciones Web","institution":"Centro de Estudios de FP Núria","year":"2024 - Ahora"},{"img":"/assets/logos/cefp-nuria.webp","degree":"FP Sistemas Microinformáticos y Redes","institution":"Centro de Estudios de FP Núria","year":"2022 - 2024"},{"img":"/assets/logos/escolagoar-logo.webp","degree":"Educacion Secundaria Obligatoria","institution":"Escola Goar","year":"2018 - 2021"}];
const skills = {"frontend":{"HTML5":"/assets/skills/html5.svg","CSS3":"/assets/skills/CSS3.svg","TailWindCSS":"/assets/skills/Tailwind.svg","JavaScript":"/assets/skills/JS.svg","Astro":"/assets/skills/astro.svg","WordPress":"/assets/skills/Wordpress.svg"},"backend":{"PHP":"/assets/skills/PHP.svg","SQL":"/assets/skills/SQL.svg","MySQL Workbench":"/assets/skills/workbench.svg"}};
const languages = [{"img":"/assets/logos/esp.svg","language":"Español","level":"Nativo"},{"img":"/assets/logos/cat.svg","language":"Català","level":"Alto"},{"img":"/assets/logos/eng.svg","language":"Anglès","level":"Básico"}];
const blog_pos = [{"description":"Soy un apasionado estudiante del ciclo superior de Desarrollo de Aplicaciones Web (DAW) que busca transformar ideas en soluciones digitales. Aunque aún no cuento con experiencia profesional en el sector, estoy comprometido con aprender y dominar las últimas tecnologías para el desarrollo de aplicaciones web. "},{"entradas":[{"title":"Información","summary":"Hola, soy Francisco García Haro, aunque todo el mundo me llama Fran. Tengo 18 años y actualmente estoy cursando el ciclo formativo de Desarrollo de Aplicaciones Web (DAW). Desde que empecé a interesarme por la tecnología, supe que quería dedicarme a crear soluciones digitales que pudieran facilitar la vida de las personas o ayudar a mejorar procesos.Me considero una persona proactiva, con muchas ganas de aprender y superarme cada día.Disfruto enfrentándome a nuevos retos y buscando formas de resolver problemas de manera creativa y eficiente.Aunque todavía no tengo experiencia profesional en el sector, estoy constantemente trabajando en pequeños proyectos y prácticas para seguir desarrollando mis habilidades técnicas. Además de lo técnico, valoro mucho el trabajo en equipo y la comunicación, ya que creo que son fundamentales en cualquier entorno de desarrollo.Mi objetivo es seguir formándome, adquirir experiencia en el mundo real y aportar todo lo que esté en mi mano a los proyectos en los que participe.Estoy abierto a nuevas oportunidades que me permitan crecer, aprender de profesionales del sector y dar mis primeros pasos en el mundo laboral de la programación y el desarrollo web.","date":"15-02-2024"},{"title":"Contacto","summary":"Si desea ponerse en contacto conmigo, puede comunicarse conmigo utilizando los siguientes métodos. Tenga en cuenta que actualmente estoy disponible para proyectos independientes.","date":"NULL"},{"title":"Proyectos Profesional","summary":"Si deseas ponerte en contacto conmigo para colaborar, realizar alguna consulta o simplemente conectar, no dudes en escribirme por correo electrónico. Estaré encantado de atender cualquier propuesta o conversación relacionada con el desarrollo web.","date":"NULL"}]}];
const experience = [{"company":"Escola Goar","position":"Servicio Técnico","company-img":"/assets/logos/escolagoar-logo.webp","location":"Barcelona, Catalunya","duration":"Octubre 2023 → Marzo 2024","responsibilities":["Reparar y solucionar incidencias en el centro"]},{"company":"MoonPay","position":"Senior Front-End Engineer","company-img":"/assets/experience-companys/moonpay-logo.webp","location":"Barcelona, Catalunya","duration":"Abril 2022 → Agosto 2024","responsibilities":["Creación de componentes UI reutilizables con React y TailwindCSS.","Optimización de la carga de páginas con técnicas de lazy loading y code splitting.","Implementación de pruebas unitarias y e2e con Jest y Cypress."]},{"company":"Monzo","position":"Web Engineer / Product Designer","company-img":"/assets/experience-companys/monzo-logo.webp","location":"Gavà, Catalunya","duration":"Mayo 2019 → Noviembre 2021","responsibilities":["Diseño e implementación de componentes interactivos con Vue.js.","Colaboración en el desarrollo de funciones backend con Node.js.","Mejora de la UX/UI con enfoque en la facilidad de uso y accesibilidad.","Integración de APIs y mejora de la seguridad de las aplicaciones."]}];
const projects = [{"id":"1","slug":"taskmanager-app","name":"TaskManager App","description":"Aplicación de gestión de tareas con React y Firebase.","url":"https://taskmanager.dev","image":"/assets/projects/TaskManagerApp.jpeg","date":"2024-12-31"},{"id":"2","slug":"ecommerce-platform","name":"E-commerce Platform","description":"Plataforma de comercio electrónico desarrollada con Vue.js y Node.js.","url":"https://ecommerce.example.com","image":"/assets/projects/E-commercePlatform.jpeg","date":"2024-12-31"},{"id":"3","slug":"blog-cms","name":"Blog CMS","description":"Sistema de gestión de contenidos para blogs con Astro y Markdown.","url":"https://blogcms.dev","image":"/assets/projects/seo.jpeg","date":"2024-12-31"},{"id":"4","slug":"fitness-tracker","name":"Fitness Tracker","description":"Aplicación para monitorizar entrenamientos y progreso físico.","url":"https://fitnesstracker.dev","image":"/assets/projects/fitness-app.jpeg","date":"2024-12-31"}];
const json = {
  name,
  post,
  contact,
  education,
  skills,
  languages,
  blog_pos,
  experience,
  projects,
};

export { $$Layout as $, json as j };
