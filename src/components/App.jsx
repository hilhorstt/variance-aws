import PropTypes from 'prop-types';
import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Routing from '../Routing';
import { I18nProvider } from '../services/i18n';
import Content from './Content';
import Header from './header/Header';
import Global from './Global';

function App({ locale, helmetContext }) {
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

App.defaultProps = {
    helmetContext: {},
};

App.propTypes = {
    locale: PropTypes.string.isRequired,
    helmetContext: PropTypes.object,
};

export default App;
