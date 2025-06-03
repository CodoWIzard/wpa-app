<script setup>
import { useHead, useColorMode } from "#imports";
import { computed } from "vue";

useHead({
  title: "❤️U Festival App",
  meta: [
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    {
      name: "description",
      content: "Officiële app van het ❤️U festival in Utrecht",
    },
  ],
  link: [{ rel: "manifest", href: "/manifest.webmanifest" }],
});

// switch modus
const colorMode = useColorMode();
const isDark = computed(() => colorMode.value === "dark");
const toggleDarkMode = () => {
  colorMode.preference = isDark.value ? "light" : "dark";
};
</script>

<template>
  <div
    class="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-sans"
  >
    <!-- Top -->
    <header
      class="bg-red-600/90 dark:bg-black/70 backdrop-blur-md text-white px-4 py-4 shadow-md sticky top-0 z-50"
    >
      <div
        class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
      >
        <div>
          <h1 class="text-2xl font-bold flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 10 900"
              class="w-10 h-10"
              aria-hidden="true"
            >
              <path
                style="fill: red"
                class="cls-2"
                d="M224.48,82.48l6.81-17.65c54.38-102.05,214.21-78.85,218,44.08,2.32,75.19-70.91,128.47-118.96,176.85-28.63,28.83-57.36,57.91-85.92,86.92-6.52,6.62-14.77,22.12-25.58,14.1-38.43-39.55-77.65-78.52-116.73-117.5C49.32,216.62-11.35,174.95,1.83,90.12,13.68,13.81,104.56-22.85,169.45,15.13c23.49,13.75,47.47,41.06,55.04,67.35Z"
              />
              <path
                style="fill: #ffff"
                class="cls-1"
                d="M336.61,336.48c2.8-2.41,8.15-.23,11.2-.2,23.41.27,46.62.22,69.93.99,7.2.24,18.61-1.21,24.99-.01,1.64.31,2.77,1.03,3.32,2.67l.25,215.64c-3.54,157.2-147,207.63-282.96,183.96C48.45,719.52,4.63,646.67,2.07,535.38c-.95-41.44.17-83.22.66-124.67.11-9.29-1.68-69.56.39-72.53,1.28-1.84,13.01-.71,16.09-.89,27.61-1.62,55.2-.63,82.92-.99,6.3-.08,10.6-3.46,11.5,6.4,2.66,71.62-4.14,144.47.96,215.82,5.49,76.68,87.15,97.35,151.06,80.15,77.59-20.88,68.86-82.2,69.76-148.02.66-48.08-3.51-101.8-.09-148.94.11-1.45.22-4.29,1.29-5.21Z"
              />
            </svg>
            Festival
          </h1>

          <p class="text-sm text-white/80">Utrecht · 15 & 16 augustus 2026</p>
        </div>

        <nav
          class="flex flex-wrap justify-center sm:justify-end gap-3 text-sm font-medium"
        >
          <NuxtLink to="/" class="nav-link">Home</NuxtLink>
          <NuxtLink to="/program" class="nav-link">Programma</NuxtLink>
          <NuxtLink to="/map" class="nav-link">Kaart</NuxtLink>
          <NuxtLink to="/connect" class="nav-link">Informatie</NuxtLink>
          <NuxtLink to="/qr" class="nav-link">QR Scan</NuxtLink>
          <button
            @click="toggleDarkMode"
            class="relative w-14 h-8 flex items-center bg-gray-300 dark:bg-zinc-700 rounded-full p-1 transition-colors duration-300"
            aria-label="Toggle dark mode"
          >
            <div
              class="w-6 h-6 bg-white dark:bg-zinc-300 rounded-full shadow-md transform transition-transform duration-300"
              :class="{ 'translate-x-6': isDark, 'translate-x-0': !isDark }"
            ></div>
            <span class="absolute left-1.5 text-xs" v-if="!isDark">🌞</span>
            <span class="absolute right-1.5 text-xs" v-if="isDark">🌝</span>
          </button>
        </nav>
      </div>
    </header>

    <!-- Main content? vergeten wat dit was -->
    <main class="flex-1">
      <NuxtPage />
    </main>

    <!-- Footer -->
    <footer
      class="bg-gray-100 dark:bg-black text-center text-xs sm:text-sm p-4 text-gray-500 dark:text-white"
    >
      &copy; 2026 ❤️U Festival · Gemeente Utrecht & Partners · App v1.0
    </footer>
  </div>
</template>

<style scoped>
.nav-link {
  @apply px-2 py-1 text-sm sm:text-base text-gray-700 dark:text-gray-200 hover:text-red-600 dark:hover:text-red-400;
  transition: color 0.2s ease-in-out;
}
</style>
