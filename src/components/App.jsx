import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Route, Routes } from 'react-router-dom';
import { I18nProvider } from '../services/i18n';
import Contact from './Contact';
import Content from './Content';
import Experience from './Experience';
import Header from './header/Header';
import Home from './Home';
import Global from './Global';
import TechStack from './TechStack';

function App({ locale, helmetContext }) {
    return (
        <HelmetProvider context={helmetContext}>
            <I18nProvider locale={locale}>
                <Global />
                <Header />
                <Content>
                    <Routes>
                        <Route path="/" index element={<Home />} />
                        <Route path="/ervaring" element={<Experience />} />
                        <Route path="/tech-stack" element={<TechStack />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </Content>
            </I18nProvider>
        </HelmetProvider>
    );
}

export default App;
