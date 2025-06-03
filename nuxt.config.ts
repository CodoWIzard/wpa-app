export default defineNuxtConfig({
  ssr: false,

  modules: ["@vite-pwa/nuxt", "@nuxtjs/color-mode", "@nuxtjs/tailwindcss"],

  nitro: {
    prerender: {
      routes: ["/"], // Make sure / is pre-rendered
    },
  },

  pwa: {
    registerType: "autoUpdate",
    includeAssets: [
      "favicon.ico",
      "apple-touch-icon.png",
      "icons/icon-512x512.png",
      "offline.html", // Add offline page to be cached
    ],
    manifest: {
      name: "My Nuxt PWA",
      short_name: "NuxtPWA",
      lang: "en",
      start_url: "/",
      display: "standalone",
      background_color: "#ffffff",
      theme_color: "#000000",
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
      navigateFallback: "/offline.html", // Fallback if page isn't cached
      globPatterns: ["**/*.{js,css,html,ico,png,svg,json,webp}"],
      runtimeCaching: [
        {
          urlPattern: ({ request }) => request.destination === "document",
          handler: "NetworkFirst",
          options: {
            cacheName: "pages-cache",
          },
        },
        {
          urlPattern: ({ request }) => request.destination === "image",
          handler: "CacheFirst",
          options: {
            cacheName: "images-cache",
            expiration: {
              maxEntries: 60,
              maxAgeSeconds: 30 * 24 * 60 * 60,
            },
          },
        },
        {
          urlPattern: ({ request }) =>
            ["style", "script", "worker"].includes(request.destination),
          handler: "StaleWhileRevalidate",
          options: {
            cacheName: "assets-cache",
            expiration: {
              maxEntries: 60,
              maxAgeSeconds: 30 * 24 * 60 * 60,
            },
          },
        },
      ],
    },
  },
});
