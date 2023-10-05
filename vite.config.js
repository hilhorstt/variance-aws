import { builtinModules } from 'module';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import viteCompression from 'vite-plugin-compression';

export default defineConfig(({ command, mode, ssrBuild }) => {
    const env = loadEnv(mode, process.cwd(), '');
    console.log(`Starting vite config in mode: ${mode}, SSR build: ${ssrBuild ? 'yes' : 'no'}, Command: ${command}`);

    return {
        plugins: [
            react(),
            viteCompression(),
        ],
        server: {
            port: env.NODE_ENV === 'production' ? 8080 : 3000,
            strictPort: true,
            host: 'localhost',
            open: '/',
        },
        ...(mode === 'production' ? {
            build: {
                sourcemap: true,
                rollupOptions: {
                    external: [...builtinModules, ...builtinModules.map((m) => `node:${m}`)],
                },
            },
            ssr: {
                noExternal: true,
            },
        } : {}),
    };
});
