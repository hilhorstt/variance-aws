import React, { useMemo } from 'react';
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';

import translationNl from '../../i18n/nl/translation.json';
import translationEn from '../../i18n/en/translation.json';
import translationNo from '../../i18n/no/translation.json';

const languageMap = {
    'en-US': 'en',
    'no-NO': 'no',
    'no-NB': 'no',
    'nl-NL': 'nl',
    'nl-BE': 'nl',
};

const getLocale = () => {
    if (typeof navigator !== 'undefined' && languageMap[navigator.language]) {
        return languageMap[navigator.language];
    }
    return languageMap['en-US'];
};

export const locale = getLocale();

const defaultLocale = 'nl';

export function I18nProvider({ locale, children }) {
    const i18nInstance = useMemo(() => i18next.createInstance({
        fallbackLng: defaultLocale,
        lng: locale || defaultLocale,
        ignoreJSONStructure: true,
        resources: {
            en: {
                translation: translationEn,
            },
            nl: {
                translation: translationNl,
            },
            no: {
                translation: translationNo,
            },
        },
        debug: process.env.NODE_ENV !== 'production' && !import.meta.env.SSR,
        react: {
            useSuspense: true,
        },
    }, (err) => {
        if (err) console.error('Failed initializing i18n instance', err);
    }), []);

    return (
        <I18nextProvider i18n={i18nInstance}>
            { children }
        </I18nextProvider>
    );
}
