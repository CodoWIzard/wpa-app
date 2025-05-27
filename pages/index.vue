<template>
  <main class="w-full">
    <!-- Hero Section: full screen height on desktop -->
    <section
      class="relative overflow-hidden bg-gradient-to-br from-red-600 via-pink-500 to-red-700 text-white min-h-screen flex items-center justify-center text-center px-4 py-20"
    >
      <!-- Floating hearts / particles (optional) -->
      <div
        class="absolute inset-0 z-0 pointer-events-none animate-pulse"
        style="background: url('/hearts.svg') repeat; opacity: 0.05"
      ></div>

      <!-- Main content -->
      <div class="relative z-10 max-w-3xl">
        <h1
          class="text-4xl sm:text-6xl font-extrabold mb-4 leading-tight drop-shadow-lg"
        >
          ❤️U Festival
        </h1>
        <p class="text-base sm:text-xl mb-2 italic text-red-100">
          “Vier de liefde, kunst & duurzaamheid”
        </p>
        <p class="text-base sm:text-lg mb-6">
          Utrecht · 15 & 16 augustus 2026 · Stad & Natuur
        </p>
        <div
          class="flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <NuxtLink
            to="/program"
            class="bg-white text-red-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition shadow"
          >
            Bekijk Programma
          </NuxtLink>
          <NuxtLink
            to="/tickets"
            class="border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-red-600 transition shadow"
          >
            Koop Tickets
          </NuxtLink>
        </div>
      </div>

      <!-- Decorative SVG shape (optional) -->
      <div class="absolute bottom-0 w-full">
        <svg
          class="w-full"
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="white"
            d="M0,64 C480,160 960,0 1440,96 L1440,320 L0,320 Z"
          ></path>
        </svg>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-20 bg-white text-gray-800 px-4">
      <div
        class="max-w-screen-xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8"
      >
        <div class="p-6 border rounded shadow hover:shadow-lg transition">
          <h3 class="text-xl font-bold mb-2">🎶 Muziek</h3>
          <p>
            Live optredens, DJ-sets, jamsessies — laat je gaan op de beats van
            de liefde.
          </p>
        </div>
        <div class="p-6 border rounded shadow hover:shadow-lg transition">
          <h3 class="text-xl font-bold mb-2">🧘 Workshops</h3>
          <p>Van yoga tot duurzame kunst: verrijk jezelf op alle niveaus.</p>
        </div>
        <div class="p-6 border rounded shadow hover:shadow-lg transition">
          <h3 class="text-xl font-bold mb-2">🌍 Talks & Klimaat</h3>
          <p>Vooraanstaande denkers over toekomst, zorg en verbondenheid.</p>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="bg-gray-100 py-20 px-4 text-center">
      <div class="max-w-screen-md mx-auto">
        <h2 class="text-3xl font-bold mb-4">Wat is ❤️U Festival?</h2>
        <p class="text-lg text-gray-700">
          Een tweedaagse viering van menselijkheid, natuur, kunst en verbinding.
          We brengen mensen samen die geloven in een mooiere toekomst — met
          muziek, liefde, en actie.
        </p>
      </div>
    </section>

    <!-- Call To Action -->
    <section
      class="relative overflow-hidden bg-gradient-to-br from-red-600 via-pink-500 to-red-700 text-white flex items-center justify-center text-center px-4 py-20"
    >
      <div class="max-w-screen-md mx-auto">
        <h2 class="text-3xl font-bold mb-4">Sluit je aan bij de beweging ❤️</h2>
        <p class="mb-6">15 & 16 augustus 2026 in het hart van Utrecht</p>
        <NuxtLink
          to="/tickets"
          class="bg-white text-red-600 px-8 py-3 rounded font-semibold hover:bg-gray-100 transition"
        >
          Bestel je Tickets
        </NuxtLink>
      </div>
    </section>
  </main>
</template>
