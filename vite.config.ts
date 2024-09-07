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
    target: 'esnext',  // 保持使用最新的 ES 标准
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
    minify: 'esbuild', // 使用 esbuild 进行最小化
  },
  esbuild: {
    target: 'esnext'  // 让 esbuild 也使用 esnext 进行构建
  }
});
