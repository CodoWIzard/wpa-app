# Love You Festival PWA

## Demo
`https://wpa-app.vercel.app/`
## Setup

Dependencies:

```bash
# npm
# Nuxt 3
# @vite-pwa/nuxt
# TailWindCSS
# Color mode
# SSR

Other dependencies like Workbox are automatically included as you install those mentioned above.
```

## Features
```bash
✅ UX Friendly website with a modern, sleek look

✅ Smooth hover effects and responsive design

✅ Clickable artist links redirect to YouTube performances

✅ Offline support with Workbox caching

✅ Mobile-first and PWA installable
```

## Development Server & setup

Start the development server on `http://localhost:3000`:

```bash
# 1 Clone the repo

# 2 Install earlier mentioned dependencies. Navigate to:
C:\laragon\www\wpa-app\wpa-app>
This is my directory. Yours can differ. What's important is to go from wpa-app to wpa-app again.

# 3 run the server

I made a little mistake with the folder structure.
you start at wpa-app. In the terminal, write "cd wpa-app" once again to enter the correct folder.

Then...:
# npm
npm run dev

Best option for local production build:
# 1 npm run build
# 2 npm run preview
```
## Deployment
Deployed on Vercel. You can also copy the project and deploy it elsewhere.

## Deployment mobile
1. Use the URL or QR code to reach the website.
2. Make sure to open and use all pages
3. On your phone, tap on a "share" button
4. Bookmark the website on your phone as an application.
5. You're ready and set to make use of the app! It's automatically configured to work offline as well. Note that embeds do not work offline automatically.

## Configuration:
nuxt.config.ts
```bash
export default defineNuxtConfig({
  ssr: false,

  modules: ["@vite-pwa/nuxt", "@nuxtjs/color-mode", "@nuxtjs/tailwindcss"],

  nitro: {
    prerender: {
      routes: ["/"], // pre rendering routes
    },
  },

  pwa: {
    registerType: "autoUpdate",
    includeAssets: [
      "favicon.ico",
      "apple-touch-icon.png",
      "icons/icon-512x512.png",
      "offline.html", // offline site for fallback
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
      navigateFallback: "/offline.html", // for fallback when not properly cached
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

```

## Author
Jayden de Roo @ CodoWIzard
Project licensed under the MIT License.

