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

// mode
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
          <h1 class="text-2xl font-bold">❤️U Festival</h1>
          <p class="text-sm text-white/80">Utrecht · 15 & 16 augustus 2026</p>
        </div>

        <nav
          class="flex flex-wrap justify-center sm:justify-end gap-3 text-sm font-medium"
        >
          <NuxtLink to="/" class="nav-link">Home</NuxtLink>
          <NuxtLink to="/program" class="nav-link">Programme</NuxtLink>
          <NuxtLink to="/map" class="nav-link">Map</NuxtLink>
          <NuxtLink to="/connect" class="nav-link">Information</NuxtLink>
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

    <!-- Nav -->
    <nav
      class="bg-white dark:bg-gray-800 border-b-4 border-gray-200 dark:border-gray-700"
    ></nav>

    <!-- Main content -->
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
