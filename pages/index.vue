<template>
  <main class="w-full">
    <!-- Hero Section: full screen height on desktop -->
    <section
      class="relative overflow-hidden bg-gradient-to-br from-red-600 via-pink-500 to-red-700 text-white min-h-screen flex items-center justify-center text-center px-4 py-20"
    >
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
    </section>

    <!-- Features Section -->
    <section class="py-20 bg-white text-gray-800 px-4">
      <div class="max-w-screen-xl mx-auto">
        <div class="mb-8 text-center">
          <h2 class="text-3xl font-bold mb-4">Festival Sfeerimpressie 🎥</h2>
          <p class="text-lg text-gray-600">
            Krijg alvast een voorproefje van de vibes, muziek en verbondenheid
            die je kunt verwachten.
          </p>
        </div>
        <div class="rounded-xl overflow-hidden shadow-lg h-[600px]">
          <iframe
            class="w-full h-full"
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
            title="Festival Video"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section
      class="relative bg-white dark:bg-zinc-900 py-24 px-6 overflow-hidden"
    >
      <div
        class="absolute inset-0 bg-gradient-to-br from-pink-100/50 to-red-200/30 dark:from-zinc-800 dark:to-zinc-700 blur-2xl opacity-20 pointer-events-none"
      ></div>

      <div class="max-w-5xl mx-auto text-center space-y-12 relative z-10">
        <!-- Header -->
        <div>
          <h2
            class="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4"
          >
            Wat is ❤️U Festival?
          </h2>
          <p class="text-lg text-gray-700 dark:text-zinc-300 max-w-2xl mx-auto">
            Een viering van menselijkheid, natuur, kunst en verbinding —
            speciaal voor Utrechtse studenten. Hier ontstaat magie wanneer
            vreemden vrienden worden, muziek je hart raakt, en idealen
            werkelijkheid worden.
          </p>
        </div>

        <!-- Grid of Value Pillars -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div
            class="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-md hover:shadow-lg transition"
          >
            <h3 class="text-xl font-semibold mb-2">🌿 Natuur & Ruimte</h3>
            <p class="text-gray-600 dark:text-zinc-300">
              Onze locatie is groen, open en vrij. Ontsnap even aan de stad,
              adem frisse lucht, en voel je verbonden met de aarde.
            </p>
          </div>
          <div
            class="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-md hover:shadow-lg transition"
          >
            <h3 class="text-xl font-semibold mb-2">🎶 Muziek & Expressie</h3>
            <p class="text-gray-600 dark:text-zinc-300">
              Laat je verrassen door lokale bands, DJ’s en spoken word. Of doe
              zelf mee in open mic sessies en dansvloeren.
            </p>
          </div>
          <div
            class="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-md hover:shadow-lg transition"
          >
            <h3 class="text-xl font-semibold mb-2">🤝 Verbinding & Liefde</h3>
            <p class="text-gray-600 dark:text-zinc-300">
              Nieuwe stad? Nieuwe mensen? ❤️U is dé plek om vrienden te maken,
              relaties op te bouwen en jezelf te zijn.
            </p>
          </div>
          <div
            class="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-md hover:shadow-lg transition"
          >
            <h3 class="text-xl font-semibold mb-2">🔥 Actie & Toekomst</h3>
            <p class="text-gray-600 dark:text-zinc-300">
              Workshops, initiatieven en projecten — samen bouwen we aan een
              toekomst vol hoop, duurzaamheid en solidariteit.
            </p>
          </div>
        </div>
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
