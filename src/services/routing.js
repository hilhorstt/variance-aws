export const pages = {
    HOME: 'HOME',
    EXPERIENCE: 'EXPERIENCE',
    TECH_STACK: 'TECH_STACK',
    ACCESSIBILITY: 'ACCESSIBILITY',
    CONTACT: 'CONTACT',
};

const routes = {
    [pages.HOME]: {
        nl: '/',
        en: '/',
        no: '/',
    },
    [pages.EXPERIENCE]: {
        nl: '/ervaring',
        en: '/experience',
        no: '/erfaring',
    },
    [pages.TECH_STACK]: {
        nl: '/tech-stack',
        en: '/tech-stack',
        no: '/tech-stack',
    },
    [pages.ACCESSIBILITY]: {
        nl: '/digitale-toegankelijkheid',
        en: '/web-accessibility',
        no: '/universell-utforming',
    },
    [pages.CONTACT]: {
        nl: '/contact',
        en: '/contact',
        no: '/kontakt',
    },
};

export function getTargetLangPathname(path, locale, targetLocale) {
    const match = Object.keys(pages).find((key) => routes[key][locale] === path) || pages.HOME;
    return routes[match][targetLocale];
}

function getLanguageRoute(page, i18n) {
    return routes[page][i18n.language];
}

export default getLanguageRoute;
