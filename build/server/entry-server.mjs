import createEmotionServer from "@emotion/server/create-instance";
import React from "react";
import ReactDOMServer from "react-dom/server";
import PropTypes from "prop-types";
import { initReactI18next, withTranslation, useTranslation } from "react-i18next";
import i18n from "i18next";
import createCache from "@emotion/cache";
const header$3 = {
  languages: "Talen",
  jumpToContact: "Direct naar contact"
};
const splash$2 = {
  header: "Freelance lead front-end ontwikkelaar, toegankelijkheids-auditor en gecertificeerde scrum master"
};
const about$2 = {
  title: "Over Variance",
  body: "<p>Mijn naam is Tim Hilhorst, zzp'er onder de naam Variance Solutions woonachtig in Delft, en welkom op mijn pagina.</p>\n                        <p>Ik streef ernaar ontwerp en technologie te combineren van concept tot realisatie. Als afgestudeerd architect aan de Technische Universiteit van Delft ben ik een oplossingsgerichte ontwikkelaar met een oog voor design, ontwerp en analyse.</p>\n\n<p>In de afgelopen jaren heb ik bij kunnen dragen aan een verscheidenheid aan complexe webapplicaties voor digitale examens waar de nadruk ligt op stabiliteit, performance en webtoegankelijkheid.</p>\n\n<p>Ik geniet van het bespreken en realiseren van UX-concepten, visuele ontwerpen en de nieuwste trends op het gebied van front-end ontwikkeling en webtoegankelijkheid.</p>"
};
const experience$3 = {
  title: "Ervaring",
  body: "",
  today: "Vandaag",
  variance: {
    title: "Freelance senior front-end ontwikkelaar",
    subTitle: "Variance Solutions, Delft",
    body: "<p>Ik draag momenteel bij aan een onderwijs-gerelateerde webapps als lead front-end developer met een focus op React + Redux & NodeJS, testen op toegankelijkheidseisen en het\n    begeleiden van ontwikkelaars bij de opdrachtgever.</p>\n<p>De software voor digitaal toetsen is cloud-based op services van AWS als S3/EC2 en Lambda. Ik draag bij met \n    domeinspecifieke kennis, gecombineerd met kennis en know-how van WCAG standaarden en oog voor gebruikerservaring en design.</p>"
  },
  inspera: {
    title: "Senior front-end ontwikkelaar en scrum master",
    subTitle: "Inspera Assessment, Oslo",
    body: "<p>Front-end developer, scrum master and WCAG promoter, focussing on student and author experience for Inspera's digital examination solution.</p>\n\n                            <p><strong>New tech:</strong><br />\n                                TypeScript/ES6, React, Redux (Saga), SASS + CSS modules, Webpack, Mocha/Jest, Semantic UI</p>\n\n                            <p><strong>Older stack:</strong><br />\n                                React, Backbone, Bootstrap, Underscore, Gulp</p>\n\n                            <p><strong>Ancient stack:</strong><br />\n                                Handlebars, MarionetteJS, Backbone, JQuery, XSLT, Gulp</p>\n\n                            <p><strong>Familiar with AWS cloud services:</strong><br />\n                                S3, EC2, CloudFront, Route 53, Lambda</p>\n\n                            <p><strong>Not entirely proud of, but mentionable:</strong><br />\n                                SQL, Java, TeamCity, JIRA/Confluence</p>"
  },
  cognizant: {
    title: "Scrum Master en junior front-end ontwikkelaar",
    subTitle: "Cognizant, Amsterdam",
    body: "<p>Seconded to the largest financial services provider in the Netherlands (confidentially agreement), I have been part of a team that developed a new fully responsive redesign of the customer facing website. A second team developed a mortgage calculation feature, AngularJS log-in screen and chat functionality within a hybrid app. As developer, I contributed to the team’s front-end development and QA testing work.</p><p>As scrum master, I organized sprint rituals, coached team members, and communicated with product owners, UI/UX designers, business analysts and content managers.</p>\n                            <p><strong>Tech Stack</strong>: AngularJS, BackboneJS, Jasmine, Jenkins, Picoma, Maven, Fitnesse, Selenium</p>"
  }
};
const techStack$3 = {
  title: "Tech stack en tooling"
};
const contact$2 = {
  title: "Contact",
  body: "Neem gerust contact op over freelance front-end opdrachten of vragen over digitale toegankelijkheid!",
  kvk: "KvK registratie"
};
const translationNl = {
  header: header$3,
  splash: splash$2,
  about: about$2,
  experience: experience$3,
  techStack: techStack$3,
  contact: contact$2
};
const header$2 = {
  languages: "Languages",
  jumpToContact: "Jump to contact"
};
const splash$1 = {
  header: "Freelance lead front-end developer, accessibility auditor & certified scrum master"
};
const about$1 = {
  title: "About Variance",
  body: "<p>My name is Tim Hilhorst, freelancer under the name Variance Solutions based in Delft, and welcome to my page.</p>\n                        <p>I aim to combine design, accessibility and front-end technology from specification to realisation. As an architecture graduate of the Technical University of Delft, I have a solution-based approach to solving problems from sketch to detail.</p>\n                        <p>I enjoy building and improving web applications that provide an inclusive experience for all its users. I do so by universal design, accessibility code standards, carrying out WCAG audits and writing readible, reusable code.</p>\n                        <p>I enjoy discussing user experience, visual designs, meeting accessibility standards and the latest technologies in front-end development.</p>"
};
const experience$2 = {
  title: "Experience",
  body: "",
  today: "Today",
  variance: {
    title: "Freelance Senior Front-end Developer",
    subTitle: "Variance Solutions, Delft",
    body: "<p>Currently contributing to educational software as lead front-end developer with a focus on React + Redux & NodeJS, accessibility testing & tools and guiding fellow developers.</p>\n                    <p>The solution is cloud-based running on AWS S3/EC2 and Lambda services. I contribute with domain specific knowledge, combined with knowledge and know-how regarding WCAG standards and an eye for user experience and design.</p>"
  },
  inspera: {
    title: "Senior Front-end developer and Scrum Master",
    subTitle: "Inspera Assessment, Oslo",
    body: "<p>Front-end developer, scrum master and WCAG promoter, focussing on student and author experience for Inspera's digital examination solution.</p>\n\n                            <p><strong>New tech:</strong><br />\n                                TypeScript/ES6, React, Redux (Saga), SASS + CSS modules, Webpack, Mocha/Jest, Semantic UI</p>\n\n                            <p><strong>Older stack:</strong><br />\n                                React, Backbone, Bootstrap, Underscore, Gulp</p>\n\n                            <p><strong>Ancient stack:</strong><br />\n                                Handlebars, MarionetteJS, Backbone, JQuery, XSLT, Gulp</p>\n\n                            <p><strong>Familiar with AWS cloud services:</strong><br />\n                                S3, EC2, CloudFront, Route 53, Lambda</p>\n\n                            <p><strong>Not entirely proud of, but mentionable:</strong><br />\n                                SQL, Java, TeamCity, JIRA/Confluence</p>"
  },
  cognizant: {
    title: "Scrum Master and Junior Front-end Developer",
    subTitle: "Cognizant, Amsterdam",
    body: "<p>Seconded to the largest financial services provider in the Netherlands (confidentially agreement), I have been part of a team that developed a new fully responsive redesign of the customer facing website. A second team developed a mortgage calculation feature, AngularJS log-in screen and chat functionality within a hybrid app. As developer, I contributed to the team’s front-end development and QA testing work.</p><p>As scrum master, I organized sprint rituals, coached team members, and communicated with product owners, UI/UX designers, business analysts and content managers.</p>\n                            <p><strong>Tech Stack</strong>: AngularJS, BackboneJS, Jasmine, Jenkins, Picoma, Maven, Fitnesse, Selenium</p>"
  }
};
const techStack$2 = {
  title: "Tech stack and tooling"
};
const contact$1 = {
  title: "Contact",
  body: "Feel free to contact me about freelance opportunities or web accessibility questions!",
  kvk: "KvK registration"
};
const translationEn = {
  header: header$2,
  splash: splash$1,
  about: about$1,
  experience: experience$2,
  techStack: techStack$2,
  contact: contact$1
};
const header$1 = {
  languages: "Språk",
  jumpToContact: "Hopp til kontakt"
};
const splash = {
  header: "Frilans lead front-end utvikler, tilgjengelighets-auditor og sertifisert scrum master"
};
const about = {
  title: "Om Variance",
  body: "<p> Mitt navn er Tim Hilhorst, grunnlegger av Variance Solutions, og velkommen til selskapssiden min.</p>\n<p> Jeg tar sikte på å kombinere design, tilgjengelighet og front-end teknologi \n    fra spesifikasjon til realisering. Som arkitektutdannet ved Technical University of Delft \n    har jeg en løsningsbasert tilnærming til å løse problemer fra skisse til detalj. </p>\n<p> Jeg liker å bygge og forbedre webapplikasjoner som gir en inkluderende opplevelse for alle brukere. Jeg gjør det ved universell utforming, tilgjengelighetsstandarder for kode, gjennomføring av WCAG audits og skriving av lesbar, gjenbrukbar kode.</p>\n<p> Jeg liker å diskutere brukeropplevelser, visuelle design, møte tilgjengelighetsstandarder og de nyeste teknologiene innen front-end-utvikling.</p>"
};
const experience$1 = {
  title: "Erfaring",
  body: "",
  today: "I dag",
  variance: {
    title: "Frilans senior front-end utvikler",
    subTitle: "Variance Solutions, Delft",
    body: "<p>Currently contributing to educational software as lead front-end developer with a focus on React + Redux & NodeJS, accessibility testing & tools and guiding fellow developers.</p>\n                    <p>The solution is cloud-based running on AWS S3/EC2 and Lambda services. I contribute with domain specific knowledge, combined with knowledge and know-how regarding WCAG standards and an eye for user experience and design.</p>"
  },
  inspera: {
    title: "Senior front-end utvikler og scrum master",
    subTitle: "Inspera Assessment, Oslo",
    body: "<p>Front-end developer, scrum master and WCAG promoter, focussing on student and author experience for Inspera's digital examination solution.</p>\n\n                            <p><strong>New tech:</strong><br />\n                                TypeScript/ES6, React, Redux (Saga), SASS + CSS modules, Webpack, Mocha/Jest, Semantic UI</p>\n\n                            <p><strong>Older stack:</strong><br />\n                                React, Backbone, Bootstrap, Underscore, Gulp</p>\n\n                            <p><strong>Ancient stack:</strong><br />\n                                Handlebars, MarionetteJS, Backbone, JQuery, XSLT, Gulp</p>\n\n                            <p><strong>Familiar with AWS cloud services:</strong><br />\n                                S3, EC2, CloudFront, Route 53, Lambda</p>\n\n                            <p><strong>Not entirely proud of, but mentionable:</strong><br />\n                                SQL, Java, TeamCity, JIRA/Confluence</p>"
  },
  cognizant: {
    title: "Scrum Master og junior front-end utvikler",
    subTitle: "Cognizant, Amsterdam",
    body: "<p>Seconded to the largest financial services provider in the Netherlands (confidentially agreement), I have been part of a team that developed a new fully responsive redesign of the customer facing website. A second team developed a mortgage calculation feature, AngularJS log-in screen and chat functionality within a hybrid app. As developer, I contributed to the team’s front-end development and QA testing work.</p><p>As scrum master, I organized sprint rituals, coached team members, and communicated with product owners, UI/UX designers, business analysts and content managers.</p>\n                            <p><strong>Tech Stack</strong>: AngularJS, BackboneJS, Jasmine, Jenkins, Picoma, Maven, Fitnesse, Selenium</p>"
  }
};
const techStack$1 = {
  title: "Tech stack og tooling"
};
const contact = {
  title: "Kontakt",
  body: "Kontakt meg gjerne om frilansemuligheter eller spørsmål om tilgjengelighet på nettet!",
  kvk: "KvK registrering"
};
const translationNo = {
  header: header$1,
  splash,
  about,
  experience: experience$1,
  techStack: techStack$1,
  contact
};
const languageMap = {
  "en-US": "en",
  "no-NO": "no",
  "no-NB": "no",
  "nl-NL": "nl",
  "nl-BE": "nl"
};
const setHtmlLangAttribute = (lng) => {
  document.getElementsByTagName("html")[0].setAttribute("lang", lng);
};
const getLocale = () => {
  if (languageMap[navigator.language]) {
    return languageMap[navigator.language];
  }
  return languageMap["en-US"];
};

let localeFromLocalStorage;
if (typeof localStorage !== 'undefined') {
  localeFromLocalStorage = localStorage.getItem("locale");
}

const locale = localeFromLocalStorage || getLocale();
i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: translationEn
    },
    nl: {
      translation: translationNl
    },
    no: {
      translation: translationNo
    }
  },
  lng: locale,
  interpolation: {
    escapeValue: false
    // react already safes from xss
  }
}, () => {
  setHtmlLangAttribute(locale);
});
const shortcut = "_shortcut_5wavz_13";
const active = "_active_5wavz_37";
const section = "_section_5wavz_41";
const title = "_title_5wavz_45";
const welcome = "_welcome_5wavz_62";
const experience = "_experience_5wavz_66";
const techStack = "_techStack_5wavz_70";
const body = "_body_5wavz_73";
const centered = "_centered_5wavz_86";
const profilePhoto = "_profilePhoto_5wavz_89";
const logo$1 = "_logo_5wavz_125";
const navBar = "_navBar_5wavz_134";
const languagePicker = "_languagePicker_5wavz_172";
const experienceBlock = "_experienceBlock_5wavz_185";
const header = "_header_5wavz_185";
const lineLeft = "_lineLeft_5wavz_189";
const lineRight = "_lineRight_5wavz_189";
const date = "_date_5wavz_193";
const experienceBody = "_experienceBody_5wavz_200";
const left = "_left_5wavz_206";
const right = "_right_5wavz_234";
const techStackContainer = "_techStackContainer_5wavz_256";
const techStackTitle = "_techStackTitle_5wavz_261";
const list = "_list_5wavz_268";
const level1 = "_level1_5wavz_291";
const level2 = "_level2_5wavz_295";
const level3 = "_level3_5wavz_298";
const styles = {
  shortcut,
  active,
  section,
  title,
  welcome,
  experience,
  techStack,
  body,
  centered,
  profilePhoto,
  logo: logo$1,
  navBar,
  languagePicker,
  experienceBlock,
  header,
  lineLeft,
  lineRight,
  date,
  experienceBody,
  left,
  right,
  techStackContainer,
  techStackTitle,
  list,
  level1,
  level2,
  level3
};
class Header extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentLanguage: locale
    };
    this.changeLanguage = this.changeLanguage.bind(this);
  }
  changeLanguage(event) {
    const lng = event.target.dataset.lang;
    if (typeof localStorage !== 'undefined') localStorage.setItem("locale", lng);
    i18n.changeLanguage(lng);
    setHtmlLangAttribute(lng);
    this.setState({
      currentLanguage: lng
    });
  }
  renderLangButtons() {
    const { currentLanguage } = this.state;
    const languages = [
      {
        description: "Nederlands",
        langCode: "nl",
        title: "NL"
      },
      {
        description: "English",
        langCode: "en",
        title: "EN"
      },
      {
        description: "Norsk",
        langCode: "no",
        title: "NO"
      }
    ];
    return languages.map((lang) => {
      const isCurrent = currentLanguage === lang.langCode;
      return /* @__PURE__ */ React.createElement("li", { key: `${lang.langCode}_button` }, /* @__PURE__ */ React.createElement(
        "button",
        {
          type: "button",
          onClick: this.changeLanguage,
          "aria-label": lang.description,
          className: isCurrent ? styles.active : "",
          "aria-current": isCurrent,
          "data-lang": lang.langCode
        },
        lang.title
      ));
    });
  }
  render() {
    const { t } = this.props;
    return /* @__PURE__ */ React.createElement("header", null, /* @__PURE__ */ React.createElement("a", { href: "#contact", className: styles.shortcut }, t("header.jumpToContact")), /* @__PURE__ */ React.createElement("nav", { className: styles.navBar }, /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", { href: "#personal-note" }, t("about.title"))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", { href: "#experience" }, t("experience.title"))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", { href: "#tech-stack" }, t("techStack.title"))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", { href: "#contact" }, t("contact.title")))), /* @__PURE__ */ React.createElement("ul", { className: styles.languagePicker, "aria-label": t("header.languages") }, this.renderLangButtons())));
  }
}
Header.propTypes = {
  t: PropTypes.func.isRequired
};
const Header$1 = withTranslation()(Header);
function Project({ projectKey, startDate }) {
  const { t } = useTranslation();
  const captionKey = `experience.${projectKey}.`;
  return /* @__PURE__ */ React.createElement("article", { className: styles.experienceBlock }, /* @__PURE__ */ React.createElement("div", { className: styles.experienceBody }, /* @__PURE__ */ React.createElement("div", { className: styles.left }, /* @__PURE__ */ React.createElement("h3", null, t(`${captionKey}title`)), /* @__PURE__ */ React.createElement("h4", null, t(`${captionKey}subTitle`))), /* @__PURE__ */ React.createElement("div", { className: styles.right, dangerouslySetInnerHTML: { __html: t(`${captionKey}body`) } })), /* @__PURE__ */ React.createElement("div", { className: styles.header }, /* @__PURE__ */ React.createElement("div", { className: styles.lineLeft }), /* @__PURE__ */ React.createElement("div", { className: styles.date }, startDate), /* @__PURE__ */ React.createElement("div", { className: styles.lineRight })));
}
Project.propTypes = {
  projectKey: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired
};
function Experience() {
  const { t } = useTranslation();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: styles.experienceBlock }, /* @__PURE__ */ React.createElement("div", { className: styles.header }, /* @__PURE__ */ React.createElement("div", { className: styles.lineLeft }), /* @__PURE__ */ React.createElement("div", { className: styles.date }, t("experience.today")), /* @__PURE__ */ React.createElement("div", { className: styles.lineRight }))), /* @__PURE__ */ React.createElement(Project, { projectKey: "variance", startDate: "09 / 2019" }), /* @__PURE__ */ React.createElement(Project, { projectKey: "inspera", startDate: "11 / 2015" }), /* @__PURE__ */ React.createElement(Project, { projectKey: "cognizant", startDate: "08 / 2013" }));
}
const Experience$1 = withTranslation()(Experience);
function TechStack() {
  const { t } = useTranslation();
  return /* @__PURE__ */ React.createElement("div", { className: styles.techStackContainer }, /* @__PURE__ */ React.createElement("div", { className: styles.techStackTitle }, /* @__PURE__ */ React.createElement("h2", { id: "tech-stack" }, t("techStack.title"))), /* @__PURE__ */ React.createElement("div", { className: styles.list }, /* @__PURE__ */ React.createElement("h3", null, "Languages, frameworks, libraries"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", { className: styles.level1 }, "React, ES6/Typescript, Redux (thunk & sagas)"), /* @__PURE__ */ React.createElement("li", { className: styles.level1 }, "CSS3, SASS, CSS modules"), /* @__PURE__ */ React.createElement("li", { className: styles.level1 }, "Material UI, Semantic UI"), /* @__PURE__ */ React.createElement("li", { className: styles.level2 }, "NodeJS"), /* @__PURE__ */ React.createElement("li", { className: styles.level3 }, "Backbone, Bootstrap, underscoreJS"), /* @__PURE__ */ React.createElement("li", { className: styles.level3 }, "Handlebars, Marionette, JQuery"), /* @__PURE__ */ React.createElement("li", { className: styles.level3 }, "Java, SQL, XSLT"))), /* @__PURE__ */ React.createElement("div", { className: styles.list }, /* @__PURE__ */ React.createElement("h3", null, "Compilers, services & testing"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", { className: styles.level1 }, "Webpack, Gulp"), /* @__PURE__ */ React.createElement("li", { className: styles.level1 }, "Jest, Mocha"), /* @__PURE__ */ React.createElement("li", { className: styles.level2 }, "Lighthouse, Accessibility Insights"), /* @__PURE__ */ React.createElement("li", { className: styles.level2 }, "Puppeteer, BrowserStack, Percy, XCode, Postman"), /* @__PURE__ */ React.createElement("li", { className: styles.level2 }, "EC2/S3, Lambda, Beanstalk, Route53 (AWS)"), /* @__PURE__ */ React.createElement("li", { className: styles.level3 }, "TeamCity, Github Actions"))), /* @__PURE__ */ React.createElement("div", { className: styles.list }, /* @__PURE__ */ React.createElement("h3", null, "IDE & Design"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", { className: styles.level1 }, "IntelliJ, WebStorm, Sublime, SQLDeveloper"), /* @__PURE__ */ React.createElement("li", { className: styles.level2 }, "Photoshop, Illustrator, InDesign, Premiere"))), /* @__PURE__ */ React.createElement("div", { className: styles.list }, /* @__PURE__ */ React.createElement("h3", null, "Agile, planning & process"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", { className: styles.level1 }, "Certified Scrum Master"), /* @__PURE__ */ React.createElement("li", { className: styles.level1 }, "JIRA, Confluence"), /* @__PURE__ */ React.createElement("li", { className: styles.level2 }, "Product team"), /* @__PURE__ */ React.createElement("li", { className: styles.level2 }, "Backlog prioritisation"))));
}
const logo = "/assets/variance-solutions-logo-e978600b.svg";
const me = "/assets/tim-hilhorst-2785c151.jpg";
function Body() {
  const { t } = useTranslation();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("section", { className: `${styles.section} ${styles.welcome}` }, /* @__PURE__ */ React.createElement("div", { className: styles.body }, /* @__PURE__ */ React.createElement("div", { className: styles.logo }, /* @__PURE__ */ React.createElement("img", { src: logo, alt: "Variance Solutions logo" }))), /* @__PURE__ */ React.createElement("div", { className: styles.title }, /* @__PURE__ */ React.createElement("h1", null, t("splash.header")))), /* @__PURE__ */ React.createElement("section", { className: styles.section }, /* @__PURE__ */ React.createElement("div", { className: styles.body }, /* @__PURE__ */ React.createElement("h2", { id: "personal-note" }, t("about.title")), /* @__PURE__ */ React.createElement("img", { className: styles.profilePhoto, src: me, alt: "Tim Hilhorst" }), /* @__PURE__ */ React.createElement("div", { dangerouslySetInnerHTML: { __html: t("about.body") } }))), /* @__PURE__ */ React.createElement("section", { className: `${styles.section} ${styles.experience}` }, /* @__PURE__ */ React.createElement("div", { className: styles.body }, /* @__PURE__ */ React.createElement("h2", { className: styles.centered, id: "experience" }, t("experience.title"))), /* @__PURE__ */ React.createElement(Experience$1, null)), /* @__PURE__ */ React.createElement("section", { className: `${styles.section} ${styles.techStack}` }, /* @__PURE__ */ React.createElement(TechStack, null)), /* @__PURE__ */ React.createElement("footer", { className: `${styles.section} ${styles.welcome}` }, /* @__PURE__ */ React.createElement("div", { className: styles.body }, /* @__PURE__ */ React.createElement("h2", { id: "contact" }, t("contact.title")), /* @__PURE__ */ React.createElement("p", null, t("contact.body")), /* @__PURE__ */ React.createElement("strong", null, "E-mail:"), " ", /* @__PURE__ */ React.createElement("a", { href: "mailto:tim@variancesolutions.nl" }, "tim@variancesolutions.nl"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("strong", null, "LinkedIn:"), " ", /* @__PURE__ */ React.createElement("a", { href: "https://www.linkedin.com/company/variancesolutions" }, "Variance Solutions"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("strong", null, t("contact.kvk"), ":"), " ", /* @__PURE__ */ React.createElement("a", { href: "https://www.kvk.nl/orderstraat/product-kiezen/?kvknummer=757668090000&origq=variance" }, "75766809"))));
}
function AppContainer() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Header$1, null), /* @__PURE__ */ React.createElement(Body, null));
}
function createEmotionCache() {
  return createCache({
    key: "css"
  });
}
async function render() {
  const emotionCache = createEmotionCache();
  const {
    extractCriticalToChunks,
    constructStyleTagsFromChunks
  } = createEmotionServer(emotionCache);
  async function renderApp() {
    const helmetContext = {};
    const html = ReactDOMServer.renderToString(
      /* @__PURE__ */ React.createElement(AppContainer, null)
    );
    const emotionChunks = extractCriticalToChunks(html);
    const css = constructStyleTagsFromChunks(emotionChunks);
    return [html, css, helmetContext == null ? void 0 : helmetContext.helmet];
  }
  try {
    const [html, css, helmetContext] = await renderApp();
    return [html, css, helmetContext];
  } catch (err) {
    console.error("Critical error", err);
    const [html, css, helmetContext] = await renderApp();
    return [html, css, helmetContext];
  }
}
export {
  render as default
};
