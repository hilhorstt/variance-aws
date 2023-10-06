import React from 'react';
import { useTranslation } from 'react-i18next';
import { Route, Routes } from 'react-router-dom';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Home from './components/Home';
import Error from './components/Error';
import TechStack from './components/TechStack';
import getLanguageRoute, { pages } from './services/routing';

function Routing() {
    const { i18n } = useTranslation();
    return (
        <Routes>
            <Route path={getLanguageRoute(pages.HOME, i18n)} index element={<Home />} />
            <Route path={getLanguageRoute(pages.EXPERIENCE, i18n)} element={<Experience />} />
            <Route path={getLanguageRoute(pages.TECH_STACK, i18n)} element={<TechStack />} />
            <Route path={getLanguageRoute(pages.CONTACT, i18n)} element={<Contact />} />
            <Route path="*" element={<Error />} />
        </Routes>
    );
}

export default Routing;
