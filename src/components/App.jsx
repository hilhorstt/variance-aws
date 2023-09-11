import React from 'react';
import { I18nProvider } from '../services/i18n';
import Header from './Header';
import Body from './Body';

function App({ locale }) {
    return (
        <I18nProvider locale={locale}>
            <Header />
            <Body />
        </I18nProvider>
    );
}

export default App;
