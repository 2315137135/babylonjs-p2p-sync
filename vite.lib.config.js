import {defineConfig} from 'vite'
import path from "path";
import dts from "vite-plugin-dts"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [dts()],
    build: {
        lib: {
            entry: path.resolve(__dirname, 'lib/main.ts'),
            name: 'p2p-sync',
            fileName: (format) => `index.${format}.js`
        },
        outDir: "dist/lib",

        rollupOptions: {}
    }
})
