import React from 'react';
import { CacheProvider } from '@emotion/react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App';
import createEmotionCache from './createEmotionCache';

const emotionCache = createEmotionCache();

const container = document.getElementById('root');
const arr = window.location.hostname.split('.');
let locale = arr[0];
if (arr.length === 3) {
    if (locale === 'www') {
        locale = 'nl';
    }
} else {
    locale = 'nl';
}

function render(finalContainer, nodes) {
    const isSSR = import.meta.env.MODE !== 'nossr';
    if (isSSR) {
        hydrateRoot(finalContainer, nodes);
    } else {
        createRoot(finalContainer).render(nodes);
    }
}

render(
    container, (
        <CacheProvider value={emotionCache}>
            <BrowserRouter>
                <App locale={locale} />
            </BrowserRouter>
        </CacheProvider>
    ),
);
