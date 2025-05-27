<template>
  <main class="w-full">
    <!-- Hero Section: full screen height on desktop -->
    <section
      class="bg-red-600 text-white min-h-screen flex items-center justify-center text-center px-4 py-20"
    >
      <div class="max-w-3xl">
        <h1 class="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">
          ❤️U Festival
        </h1>
        <p class="text-base sm:text-xl mb-6">
          Vier liefde, kunst & duurzaamheid — Utrecht · 15 & 16 augustus 2026
        </p>
        <div
          class="flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <NuxtLink
            to="/program"
            class="bg-white text-red-600 px-6 py-3 rounded font-semibold hover:bg-gray-100 transition"
          >
            Bekijk Programma
          </NuxtLink>
          <NuxtLink
            to="/tickets"
            class="border border-white px-6 py-3 rounded font-semibold hover:bg-white hover:text-red-600 transition"
          >
            Koop Tickets
          </NuxtLink>
        </div>
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
    <section class="bg-red-600 text-white py-16 px-4 text-center">
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
