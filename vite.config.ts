import path from "path";
import { defineConfig } from "vite";
import { createVuePlugin as vue2 } from "vite-plugin-vue2";
import { VuetifyResolver } from "unplugin-vue-components/resolvers";
import viteComponents from "unplugin-vue-components/vite";

process.env.VITE_APP_VERSION = JSON.stringify(
  process.env.npm_package_version
).replace('"', "");

export default defineConfig({
  plugins: [vue2(), viteComponents({ resolvers: [VuetifyResolver()] })],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "./src/": path.resolve(__dirname, "./src"),
    },
  },
});
