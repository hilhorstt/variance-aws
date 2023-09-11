import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import createEmotionServer from "@emotion/server/create-instance";
import React, { useMemo } from "react";
import ReactDOMServer from "react-dom/server";
import i18next from "i18next";
import { I18nextProvider, withTranslation, useTranslation } from "react-i18next";
import PropTypes from "prop-types";
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
const setHtmlLangAttribute = (lng) => {
  if (typeof document !== "undefined")
    document.getElementsByTagName("html")[0].setAttribute("lang", lng);
};
const defaultLocale = "nl";
function I18nProvider({ locale: locale2, children }) {
  console.log(locale2);
  const i18nInstance = useMemo(() => i18next.createInstance({
    fallbackLng: defaultLocale,
    lng: locale2 || defaultLocale,
    ignoreJSONStructure: true,
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
    debug: process.env.NODE_ENV !== "production" && false,
    react: {
      useSuspense: true
    }
  }, (err) => {
    if (err)
      console.error("Failed initializing i18n instance", err);
  }), []);
  return /* @__PURE__ */ jsx(I18nextProvider, { i18n: i18nInstance, children });
}
function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    const date2 = /* @__PURE__ */ new Date();
    date2.setTime(date2.getTime() + days * 24 * 60 * 60 * 1e3);
    expires = `; expires=${date2.toUTCString()}`;
  }
  document.cookie = `${name}=${value || ""}${expires}; path=/`;
}
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
    this.changeLanguage = this.changeLanguage.bind(this);
  }
  changeLanguage(event) {
    const { i18n } = this.props;
    const lng = event.target.dataset.lang;
    setCookie("locale", lng);
    i18n.changeLanguage(lng);
    setHtmlLangAttribute(lng);
  }
  renderLangButtons() {
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
      const { i18n } = this.props;
      const isCurrent = i18n.language === lang.langCode;
      return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          onClick: this.changeLanguage,
          "aria-label": lang.description,
          className: isCurrent ? styles.active : "",
          "aria-current": isCurrent,
          "data-lang": lang.langCode,
          children: lang.title
        }
      ) }, `${lang.langCode}_button`);
    });
  }
  render() {
    const { t } = this.props;
    return /* @__PURE__ */ jsxs("header", { children: [
      /* @__PURE__ */ jsx("a", { href: "#contact", className: styles.shortcut, children: t("header.jumpToContact") }),
      /* @__PURE__ */ jsxs("nav", { className: styles.navBar, children: [
        /* @__PURE__ */ jsxs("ul", { children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#personal-note", children: t("about.title") }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#experience", children: t("experience.title") }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#tech-stack", children: t("techStack.title") }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#contact", children: t("contact.title") }) })
        ] }),
        /* @__PURE__ */ jsx("ul", { className: styles.languagePicker, "aria-label": t("header.languages"), children: this.renderLangButtons() })
      ] })
    ] });
  }
}
Header.propTypes = {
  t: PropTypes.func.isRequired,
  i18n: PropTypes.object.isRequired
};
const Header$1 = withTranslation()(Header);
function Project({ projectKey, startDate }) {
  const { t } = useTranslation();
  const captionKey = `experience.${projectKey}.`;
  return /* @__PURE__ */ jsxs("article", { className: styles.experienceBlock, children: [
    /* @__PURE__ */ jsxs("div", { className: styles.experienceBody, children: [
      /* @__PURE__ */ jsxs("div", { className: styles.left, children: [
        /* @__PURE__ */ jsx("h3", { children: t(`${captionKey}title`) }),
        /* @__PURE__ */ jsx("h4", { children: t(`${captionKey}subTitle`) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: styles.right, dangerouslySetInnerHTML: { __html: t(`${captionKey}body`) } })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: styles.header, children: [
      /* @__PURE__ */ jsx("div", { className: styles.lineLeft }),
      /* @__PURE__ */ jsx("div", { className: styles.date, children: startDate }),
      /* @__PURE__ */ jsx("div", { className: styles.lineRight })
    ] })
  ] });
}
Project.propTypes = {
  projectKey: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired
};
function Experience() {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: styles.experienceBlock, children: /* @__PURE__ */ jsxs("div", { className: styles.header, children: [
      /* @__PURE__ */ jsx("div", { className: styles.lineLeft }),
      /* @__PURE__ */ jsx("div", { className: styles.date, children: t("experience.today") }),
      /* @__PURE__ */ jsx("div", { className: styles.lineRight })
    ] }) }),
    /* @__PURE__ */ jsx(Project, { projectKey: "variance", startDate: "09 / 2019" }),
    /* @__PURE__ */ jsx(Project, { projectKey: "inspera", startDate: "11 / 2015" }),
    /* @__PURE__ */ jsx(Project, { projectKey: "cognizant", startDate: "08 / 2013" })
  ] });
}
const Experience$1 = withTranslation()(Experience);
function TechStack() {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxs("div", { className: styles.techStackContainer, children: [
    /* @__PURE__ */ jsx("div", { className: styles.techStackTitle, children: /* @__PURE__ */ jsx("h2", { id: "tech-stack", children: t("techStack.title") }) }),
    /* @__PURE__ */ jsxs("div", { className: styles.list, children: [
      /* @__PURE__ */ jsx("h3", { children: "Languages, frameworks, libraries" }),
      /* @__PURE__ */ jsxs("ul", { children: [
        /* @__PURE__ */ jsx("li", { className: styles.level1, children: "React, ES6/Typescript, Redux (thunk & sagas)" }),
        /* @__PURE__ */ jsx("li", { className: styles.level1, children: "CSS3, SASS, CSS modules" }),
        /* @__PURE__ */ jsx("li", { className: styles.level1, children: "Material UI, Semantic UI" }),
        /* @__PURE__ */ jsx("li", { className: styles.level2, children: "NodeJS" }),
        /* @__PURE__ */ jsx("li", { className: styles.level3, children: "Backbone, Bootstrap, underscoreJS" }),
        /* @__PURE__ */ jsx("li", { className: styles.level3, children: "Handlebars, Marionette, JQuery" }),
        /* @__PURE__ */ jsx("li", { className: styles.level3, children: "Java, SQL, XSLT" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: styles.list, children: [
      /* @__PURE__ */ jsx("h3", { children: "Compilers, services & testing" }),
      /* @__PURE__ */ jsxs("ul", { children: [
        /* @__PURE__ */ jsx("li", { className: styles.level1, children: "Webpack, Gulp" }),
        /* @__PURE__ */ jsx("li", { className: styles.level1, children: "Jest, Mocha" }),
        /* @__PURE__ */ jsx("li", { className: styles.level2, children: "Lighthouse, Accessibility Insights" }),
        /* @__PURE__ */ jsx("li", { className: styles.level2, children: "Puppeteer, BrowserStack, Percy, XCode, Postman" }),
        /* @__PURE__ */ jsx("li", { className: styles.level2, children: "EC2/S3, Lambda, Beanstalk, Route53 (AWS)" }),
        /* @__PURE__ */ jsx("li", { className: styles.level3, children: "TeamCity, Github Actions" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: styles.list, children: [
      /* @__PURE__ */ jsx("h3", { children: "IDE & Design" }),
      /* @__PURE__ */ jsxs("ul", { children: [
        /* @__PURE__ */ jsx("li", { className: styles.level1, children: "IntelliJ, WebStorm, Sublime, SQLDeveloper" }),
        /* @__PURE__ */ jsx("li", { className: styles.level2, children: "Photoshop, Illustrator, InDesign, Premiere" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: styles.list, children: [
      /* @__PURE__ */ jsx("h3", { children: "Agile, planning & process" }),
      /* @__PURE__ */ jsxs("ul", { children: [
        /* @__PURE__ */ jsx("li", { className: styles.level1, children: "Certified Scrum Master" }),
        /* @__PURE__ */ jsx("li", { className: styles.level1, children: "JIRA, Confluence" }),
        /* @__PURE__ */ jsx("li", { className: styles.level2, children: "Product team" }),
        /* @__PURE__ */ jsx("li", { className: styles.level2, children: "Backlog prioritisation" })
      ] })
    ] })
  ] });
}
const logo = "/assets/variance-solutions-logo-e978600b.svg";
const me = "/assets/tim-hilhorst-2785c151.jpg";
function Body() {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("section", { className: `${styles.section} ${styles.welcome}`, children: [
      /* @__PURE__ */ jsx("div", { className: styles.body, children: /* @__PURE__ */ jsx("div", { className: styles.logo, children: /* @__PURE__ */ jsx("img", { src: logo, alt: "Variance Solutions logo" }) }) }),
      /* @__PURE__ */ jsx("div", { className: styles.title, children: /* @__PURE__ */ jsx("h1", { children: t("splash.header") }) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: styles.section, children: /* @__PURE__ */ jsxs("div", { className: styles.body, children: [
      /* @__PURE__ */ jsx("h2", { id: "personal-note", children: t("about.title") }),
      /* @__PURE__ */ jsx("img", { className: styles.profilePhoto, src: me, alt: "Tim Hilhorst" }),
      /* @__PURE__ */ jsx("div", { dangerouslySetInnerHTML: { __html: t("about.body") } })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: `${styles.section} ${styles.experience}`, children: [
      /* @__PURE__ */ jsx("div", { className: styles.body, children: /* @__PURE__ */ jsx("h2", { className: styles.centered, id: "experience", children: t("experience.title") }) }),
      /* @__PURE__ */ jsx(Experience$1, {})
    ] }),
    /* @__PURE__ */ jsx("section", { className: `${styles.section} ${styles.techStack}`, children: /* @__PURE__ */ jsx(TechStack, {}) }),
    /* @__PURE__ */ jsx("footer", { className: `${styles.section} ${styles.welcome}`, children: /* @__PURE__ */ jsxs("div", { className: styles.body, children: [
      /* @__PURE__ */ jsx("h2", { id: "contact", children: t("contact.title") }),
      /* @__PURE__ */ jsx("p", { children: t("contact.body") }),
      /* @__PURE__ */ jsx("strong", { children: "E-mail:" }),
      " ",
      /* @__PURE__ */ jsx("a", { href: "mailto:tim@variancesolutions.nl", children: "tim@variancesolutions.nl" }),
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx("strong", { children: "LinkedIn:" }),
      " ",
      /* @__PURE__ */ jsx("a", { href: "https://www.linkedin.com/company/variancesolutions", children: "Variance Solutions" }),
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsxs("strong", { children: [
        t("contact.kvk"),
        ":"
      ] }),
      " ",
      /* @__PURE__ */ jsx("a", { href: "https://www.kvk.nl/orderstraat/product-kiezen/?kvknummer=757668090000&origq=variance", children: "75766809" })
    ] }) })
  ] });
}
function App({ locale }) {
  return /* @__PURE__ */ jsxs(I18nProvider, { locale, children: [
    /* @__PURE__ */ jsx(Header$1, {}),
    /* @__PURE__ */ jsx(Body, {})
  ] });
}
function createEmotionCache() {
  return createCache({
    key: "css"
  });
}
async function render(req) {
  const emotionCache = createEmotionCache();
  const {
    extractCriticalToChunks,
    constructStyleTagsFromChunks
  } = createEmotionServer(emotionCache);
  async function renderApp() {
    var _a;
    const helmetContext = {};
    const html = ReactDOMServer.renderToString(
      /* @__PURE__ */ jsx(App, { locale: (_a = req.cookies) == null ? void 0 : _a.locale })
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
  render
};
//# sourceMappingURL=entry-server.mjs.map
