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
    <header class="bg-red-600 text-white px-4 py-3 shadow-md">
      <div class="flex items-center justify-between max-w-screen-lg mx-auto">
        <div>
          <h1 class="text-2xl font-bold">❤️U Festival</h1>
          <p class="text-xs sm:text-sm">Utrecht · 15 & 16 augustus 2026</p>
        </div>
        <button @click="toggleDarkMode" class="text-sm hover:opacity-80">
          {{ isDark ? "🌙" : "☀️" }}
        </button>
      </div>
    </header>

    <!-- Nav -->
    <nav
      class="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700"
    >
      <div
        class="max-w-screen-lg mx-auto px-4 py-2 flex justify-around sm:justify-between"
      >
        <NuxtLink to="/" class="nav-link">🏠 Home</NuxtLink>
        <NuxtLink to="/program" class="nav-link">🎶 Programma</NuxtLink>
        <NuxtLink to="/map" class="nav-link">🗺️ Plattegrond</NuxtLink>
        <NuxtLink to="/connect" class="nav-link">💬 Connect</NuxtLink>
        <NuxtLink to="/qr" class="nav-link">📷 QR Scan</NuxtLink>
      </div>
    </nav>

    <!-- Main content -->
    <main class="flex-1 max-w-screen-lg mx-auto px-4 py-6">
      <NuxtPage />
    </main>

    <!-- Footer -->
    <footer
      class="bg-gray-100 dark:bg-gray-800 text-center text-xs sm:text-sm p-4 text-gray-500 dark:text-gray-400"
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
