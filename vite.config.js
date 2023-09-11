import { builtinModules } from 'module';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command, mode, ssrBuild }) => {
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
