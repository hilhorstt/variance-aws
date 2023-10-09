import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Routing from '../Routing';
import { I18nProvider } from '../services/i18n';
import Content from './Content';
import Header from './header/Header';
import Global from './Global';

interface AppProps {
    locale: string;
    helmetContext: object;
}

function App({ locale, helmetContext = {} }: AppProps) {
    return (
        <HelmetProvider context={helmetContext}>
            <I18nProvider locale={locale}>
                <Global />
                <Header />
                <Content>
                    <Routing />
                </Content>
            </I18nProvider>
        </HelmetProvider>
    );
}

export default App;
