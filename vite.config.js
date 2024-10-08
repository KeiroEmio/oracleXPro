import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            crypto: "empty-module",
            assert: "empty-module",
            http: "empty-module",
            https: "empty-module",
            os: "empty-module",
            url: "empty-module",
            zlib: "empty-module",
            stream: "empty-module",
            _stream_duplex: "empty-module",
            _stream_passthrough: "empty-module",
            _stream_readable: "empty-module",
            _stream_writable: "empty-module",
            _stream_transform: "empty-module",
        },
    },
    define: {
        global: "globalThis",
    },
    build: {
        target: "esnext", // 支持现代浏览器和 Top-level await
        outDir: "build",
    },
});
//# sourceMappingURL=vite.config.js.map