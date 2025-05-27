<template>
  <section
    class="min-h-screen flex flex-col items-center justify-center text-center px-4 py-20"
  >
    <h1 class="text-3xl font-bold mb-4">Scan to Use the ❤️U Festival App</h1>
    <p class="text-gray-500 mb-8">Install or open the PWA on your phone</p>

    <qrcode-vue :value="appUrl" :size="240" :level="'H'" class="shadow-lg" />

    <p class="mt-6 text-sm text-gray-400">{{ appUrl }}</p>
  </section>
</template>

<script setup>
import QrcodeVue from "qrcode.vue";

const appUrl = "https://u-festival.app"; // Replace with your real domain
</script>
