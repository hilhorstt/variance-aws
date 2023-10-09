import React, { useMemo } from 'react';
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';

import translationNl from '../../i18n/nl/translation.json';
import translationEn from '../../i18n/en/translation.json';
import translationNo from '../../i18n/no/translation.json';

const defaultLocale = 'nl';

interface I18nextProviderProps {
    locale: string;
    children: React.ReactNode;
}


export function I18nProvider({ locale, children }: I18nextProviderProps) {
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
    }, (err: Error) => {
        if (err) console.error('Failed initializing i18n instance', err);
    }), []);

    return (
        <I18nextProvider i18n={i18nInstance}>
            { children }
        </I18nextProvider>
    );
}
