import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command, mode, ssrBuild }) => {
    const env = loadEnv(mode, process.cwd(), '');

    console.log(`Starting vite config in mode: ${mode}, SSR build: ${ssrBuild ? 'yes' : 'no'}, Command: ${command}`);

    return {
        plugins: [
            react(),
        ],
        server: {
            port: 3000,
            strictPort: true,
            host: 'localhost',
            open: '/',
            proxy: {
                '/api': {
                    target: env.PAG_PROXY_URL,
                    pathRewrite: { '^/api': '' },
                    changeOrigin: true,
                },
            },
        },
        ...(mode === 'production' ? {
            build: {
                sourcemap: true,
            },
        } : {}),
    };
});
