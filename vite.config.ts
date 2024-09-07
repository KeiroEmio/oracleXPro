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
    target: 'esnext',  // 使用最新的 JavaScript 特性
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: undefined,  // 使所有代码打包到一个文件
      },
    },
  },
  esbuild: {
    target: 'esnext',  // 确保 esbuild 使用最新的 JS 特性
    supported: {
      'top-level-await': true,  // 明确支持 Top-level await
    }
  }
});
