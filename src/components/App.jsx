import { Global, css } from '@emotion/react';
import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { I18nProvider } from '../services/i18n';
import Header from './Header';
import Body from './Body';

function App({ locale, helmetContext }) {
    return (
        <HelmetProvider context={helmetContext}>
            <I18nProvider locale={locale}>
                <Global
                    styles={css`
                      body {
                        font-family: 'Arial', sans-serif;
                        margin: 0;
                        padding: 0;
                        color: #353535;
                      }
                      h1, h2, h3, h4, h5, h6 {
                        font-family: 'Roboto Slab', serif;
                      }
                      a {
                          color: rgb(21, 98, 81);
                      }
                    `}
                />
                <Header />
                <Body />
            </I18nProvider>
        </HelmetProvider>
    );
}

export default App;
