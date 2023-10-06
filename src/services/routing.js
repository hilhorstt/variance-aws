export const pages = {
    HOME: 'HOME',
    EXPERIENCE: 'EXPERIENCE',
    TECH_STACK: 'TECH_STACK',
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
    [pages.CONTACT]: {
        nl: '/contact',
        en: '/contact',
        no: '/kontakt',
    },
};

export function getTargetLangPathname(path, locale, targetLocale) {
    const match = Object.keys(pages).find((key) => routes[key][locale] === path);
    return routes[match][targetLocale];
}

function getLanguageRoute(page, i18n) {
    return routes[page][i18n.language];
}

export default getLanguageRoute;
