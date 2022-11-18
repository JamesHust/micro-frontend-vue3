// Utilities
import * as path from "path"
import {defineConfig} from 'vite'

// Plugins
import vue from '@vitejs/plugin-vue'
import federation from "@originjs/vite-plugin-federation"
import vuetify from 'vite-plugin-vuetify'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        vuetify({
            autoImport: true,
        }),
        federation({
            name: 'host-app',
            remotes: {
                remote: "http://127.0.0.1:3001/dist/assets/remoteEntry.js",
            },
            shared: ['vue', 'vue-router']
        })
    ],
    resolve: {
        extensions: [
            '.js',
            '.json',
            '.jsx',
            '.mjs',
            '.ts',
            '.tsx',
            '.vue',
        ],
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },

    server: {
        port: 3000,
    },
})
