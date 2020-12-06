import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = require('i18next-resource-store-loader!../i18n/index.js');

const languageMap = {
    'en-US': 'en',
    'no-NO': 'no',
    'no-NB': 'no',
    'nl-NL': 'nl',
    'nl-BE': 'nl',
}

export const setHtmlLangAttribute = (lng) => {
    document.getElementsByTagName("html")[0].setAttribute("lang", lng);
}

const getLocale = () => {
    if (languageMap[navigator.language]) {
        return languageMap[navigator.language];
    }
    return languageMap['en-US']
};

export const locale = localStorage.getItem('locale') || getLocale();

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: locale,
        interpolation: {
            escapeValue: false, // react already safes from xss
        },
    }, () => {
        setHtmlLangAttribute(locale);
    });

export default i18n;
