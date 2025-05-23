export default defineNuxtConfig({
  modules: ["@vite-pwa/nuxt", "@nuxtjs/color-mode", "@nuxtjs/tailwindcss"],

  // PWA module config
  pwa: {
    registerType: "autoUpdate",
    includeAssets: [
      "favicon.ico",
      "apple-touch-icon.png",
      "icons/icon-512x512.png",
    ],
    manifest: {
      name: "My Nuxt PWA",
      short_name: "NuxtPWA",
      lang: "en",
      start_url: "/",
      display: "standalone",
      background_color: "#ffffff",
      theme_color: "#4a90e2",
      icons: [
        {
          src: "/icons/icon-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "/icons/icon-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
    },
    workbox: {
      navigateFallback: "/",
      globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
    },
  },
});
