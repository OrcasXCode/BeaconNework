import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: [".mjs", ".js", ".jsx", ".json"],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "lottie-vendor": ["lottie-react"],
          "animation-vendor": ["framer-motion"],
          "ui-vendor": ["react-router-dom", "react-hot-toast"],
        },
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split(".");
          let extType = info[info.length - 1];
          if (/\.(mp4|webm|ogg|mp3|wav|flac|aac)$/.test(assetInfo.name)) {
            extType = "media";
          } else if (
            /\.(png|jpe?g|svg|gif|tiff|bmp|ico)$/.test(assetInfo.name)
          ) {
            extType = "images";
          }
          return `assets/${extType}/[name]-[hash][extname]`;
        },
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
      },
    },
    assetsInlineLimit: 4096, // 4kb - inline small assets as base64
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
  optimizeDeps: {
    include: ["lottie-react", "framer-motion", "react-router-dom"],
  },
});
