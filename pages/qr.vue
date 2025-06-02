<template>
  <section
    class="min-h-screen flex flex-col items-center justify-center text-center px-4 py-20 bg-zinc-900 text-white"
  >
    <!-- Header with subtle animation -->
    <h1 class="text-4xl sm:text-5xl font-bold mb-4 animate-fade-in-up">
      Scan to Use the Festival App
    </h1>

    <p class="text-gray-400 mb-8 text-lg animate-fade-in-up delay-100">
      Install or open the PWA on your phone
    </p>

    <!-- QR Code with animated hover effect -->
    <div
      class="relative group transition-transform duration-300 hover:scale-105"
    >
      <qrcode-vue
        :value="appUrl"
        :size="240"
        :level="'H'"
        class="rounded-xl shadow-2xl border-2 border-white/10 group-hover:border-white/20"
      />
      <div
        class="absolute inset-0 rounded-xl border border-white/10 animate-pulse opacity-10"
      ></div>
    </div>

    <!-- App URL with subtle copy-to-clipboard interaction -->
    <p
      @click="copyUrl"
      class="mt-6 text-sm text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer flex items-center gap-2 animate-fade-in-up delay-200"
    >
      {{ appUrl }}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M8 16h12M8 12h12M8 8h12M4 6h.01M4 10h.01M4 14h.01M4 18h.01"
        />
      </svg>
    </p>
  </section>
</template>

<script setup>
import QrcodeVue from "qrcode.vue";

const appUrl = "https://wpa-app.vercel.app/";

const copyUrl = () => {
  navigator.clipboard.writeText(appUrl);
  alert("App URL copied to clipboard!");
};
</script>

<style scoped>
@keyframes fade-in-up {
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in-up {
  animation: fade-in-up 0.6s ease-out forwards;
}
.delay-100 {
  animation-delay: 0.1s;
}
.delay-200 {
  animation-delay: 0.2s;
}
</style>
