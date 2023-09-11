import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { I18nProvider } from '../services/i18n';
import Header from './Header';
import Body from './Body';

function App({ locale, helmetContext }) {
    return (
        <HelmetProvider context={helmetContext}>
            <I18nProvider locale={locale}>
                <Header />
                <Body />
            </I18nProvider>
        </HelmetProvider>
    );
}

export default App;
