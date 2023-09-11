import React from 'react';
import { CacheProvider } from '@emotion/react';
import { createRoot, hydrateRoot } from 'react-dom/client';

import App from './components/App';
import createEmotionCache from './createEmotionCache';
import { getCookie } from './services/cookies';

const emotionCache = createEmotionCache();

const container = document.getElementById('root');

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
            <App locale={getCookie('locale') || 'nl'} />
        </CacheProvider>
    ),
);
