export default defineNuxtConfig({
  modules: ["@vite-pwa/nuxt"],
  pwa: {
    registerType: "autoUpdate",
    manifest: {
      name: "My PWA",
      short_name: "MyPWA",
      start_url: "/",
      display: "standalone",
      background_color: "#ffffff",
      theme_color: "#4a90e2",
      icons: [
        {
          src: "/icon.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
    },
  },
});
