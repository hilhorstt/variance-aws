import createEmotionServer from '@emotion/server/create-instance';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
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

        const html = ReactDOMServer.renderToString(
            <App locale={req.cookies?.locale} />,
        );
        // Grab the CSS from emotion
        const emotionChunks = extractCriticalToChunks(html);
        const css = constructStyleTagsFromChunks(emotionChunks);
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
