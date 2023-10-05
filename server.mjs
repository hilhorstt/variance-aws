import express from 'express';
import { fileURLToPath } from 'node:url';
import path from 'path';
import cors from 'cors';
import fs from 'node:fs';
import cookieParser from 'cookie-parser';

const PORT = process.env.PORT || 3000;

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const resolve = (p) => path.resolve(__dirname, p);

async function createServer() {
    const app = express();
    app.use(cors());
    app.use(cookieParser());
    const isProduction = process.env.NODE_ENV === 'production';

    const indexProd = isProduction ? fs.readFileSync(resolve('build/client/index.html'), 'utf-8') : '';

    let vite;
    if(!isProduction) {
        // Create a vite server on development
        vite = await (await import('vite')).createServer({
            root: process.cwd(),
            server: {
                middlewareMode: true,
            },
            appType: 'custom',
        });
        app.use(vite.middlewares);
    } else {
        app.use(express.static(resolve('build/client'), {
            index: false,
        }));
    }

    async function doRender(req, res) {
        let template;
        let render;

        try {
            if (!isProduction) {
                template = fs.readFileSync(resolve('index.html'), 'utf-8');
                template = await vite.transformIndexHtml(req.originalUrl, template);
                render = (await vite.ssrLoadModule('./src/entry-server.jsx')).render;
            } else {
                template = indexProd;
                render = (await import('./build/server/entry-server.mjs')).render;
            }

            const [appHtml, emotionCss, helmet] = await render(req);

            const html = template
                .replace(`<!--ssr-outlet-->`, appHtml)
                .replace(`<!--ssr-css-->`, emotionCss)
                .replace(`<!--ssr-helmet-->`, helmet ? `
					      ${helmet.title.toString()}
					      ${helmet.meta.toString()}
					      ${helmet.link.toString()}
					      ${helmet.script.toString()}
				    ` : '');

            res.status(200)
                .set({ 'Content-Type': 'text/html' })
                .end(html);
        } catch (e) {
            console.error('Critical error', e);
            res.status(500).send('Critical error')
        }
    }

    app.get('*', doRender);

    const port = isProduction ? PORT : vite.config.server.port;
    app.listen(port, '0.0.0.0', () => {
        console.log(`Started ${isProduction ? 'production' : 'development'} SSR on: http://localhost:${port}`);
    });
}

await createServer();
