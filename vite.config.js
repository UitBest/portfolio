import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import vuetify from 'vite-plugin-vuetify';

export default defineConfig({
    server: {
        host: true,
        port: 1683,
        https: process.env.NODE_ENV === 'production',
        hmr: {
            host: process.env.HMR_HOST || '192.168.1.18',
        },
    },
    resolve: {
        alias: {
            '@': '/resources',
        },
    },
    build: {
        chunkSizeWarningLimit: 1024,
    },
    plugins: [laravel(['resources/css/app.css', 'resources/js/app.js']), vue(), vuetify()],
});
