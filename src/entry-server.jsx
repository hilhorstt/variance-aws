import { CacheProvider } from '@emotion/react';
import createEmotionServer from '@emotion/server/create-instance';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './components/App';
import createEmotionCache from './createEmotionCache';

export async function render(req) {
    const emotionCache = createEmotionCache();
    const {
        extractCriticalToChunks,
        constructStyleTagsFromChunks,
    } = createEmotionServer(emotionCache);

    // The application context to pass the URL

    async function renderApp() {
        const helmetContext = {};

        const html = renderToString(
            <CacheProvider value={emotionCache}>
                <StaticRouter location={req.url}>
                    <App
                        locale={req.subdomains?.[1] || 'nl'}
                        helmetContext={helmetContext}
                    />
                </StaticRouter>
            </CacheProvider>,
        );
        // Grab the CSS from emotion
        const chunks = extractCriticalToChunks(html);
        const css = constructStyleTagsFromChunks(chunks);
        return [html, css, helmetContext?.helmet];
    }

    try {
        const [html, css, helmetContext] = await renderApp();
        return [html, css, helmetContext];
    } catch (err) {
        console.error('Critical error', err);
        const [html, css, helmetContext] = await renderApp();
        return [html, css, helmetContext];
    }
}
