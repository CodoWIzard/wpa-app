<template>
  <main class="w-full">
    <!-- Hero / Top Section -->
    <section
      class="py-24 px-4 bg-gradient-to-br from-red-600 to-pink-500 text-white text-center shadow-lg"
    >
      <div class="max-w-3xl mx-auto space-y-4">
        <h1 class="text-5xl font-bold tracking-tight">
          ❤️U Festival Informatie
        </h1>
        <p class="text-lg opacity-90">
          Alles wat je moet weten voor een geweldige festivaldag in Utrecht!
        </p>
      </div>
    </section>

    <!-- Info Sections -->
    <section
      class="py-16 px-4 bg-white dark:bg-zinc-900 text-gray-800 dark:text-white"
    >
      <div class="max-w-4xl mx-auto space-y-12">
        <!-- Algemeen & Contact -->
        <InfoCard icon="📍" title="Algemeen & Contact">
          <p>
            Het ❤️U Festival is voor (nieuwe) studenten in de regio Utrecht en
            is een aanvulling op UIT.
          </p>
          <div class="mt-4 space-y-2">
            <InfoRow label="📌 Adres">
              Locatie: Strijkviertel, Utrecht<br />
              Navigatieadres: Strijkviertelweg, Utrecht
            </InfoRow>
            <InfoRow label="🗓️ Datum & Tijd">
              Zaterdag 6 september 2025 — 12:00 tot 23:00
            </InfoRow>
          </div>
        </InfoCard>

        <!-- Bereikbaarheid -->
        <InfoCard icon="🚗" title="Bereikbaarheid">
          <InfoRow label="🚲 Fiets">
            Gratis fietsenstalling op het terrein.
          </InfoRow>
          <InfoRow label="🚘 Auto">
            Parkeerticket nodig via P+R Papendorp. Koop er een of betaal bij de
            parkeerwachter (PIN ONLY). VOL = VOL.
          </InfoRow>
          <InfoRow label="🚌 OV">
            Plan je reis via
            <a
              href="https://9292.nl"
              class="text-red-600 underline"
              target="_blank"
              >9292.nl</a
            >
          </InfoRow>
          <InfoRow label="🚌 Shuttlebus">
            Gratis vanaf Utrecht Centraal.<br />
            Heen: 12:00 - 19:00 · Terug: vanaf 21:00<br />
            Vertrekpunt: Mineurslaan
          </InfoRow>
          <InfoRow label="🚖 Taxi & Kiss & Ride">
            Navigeer naar Strijkviertel, De Meern en volg de borden “Kiss & Ride
            ❤️U Festival”.
          </InfoRow>
        </InfoCard>

        <!-- Lockers -->
        <InfoCard icon="🔒" title="Lockers">
          <p>
            Lockers voor 3-4 jassen. Onbeperkt openen/sluiten. Online reserveren
            niet mogelijk.
          </p>
        </InfoCard>

        <!-- FAQ -->
        <InfoCard icon="❓" title="Veelgestelde Vragen">
          <FaqItem
            question="Ik gebruik medicatie. Wat nu?"
            answer="Toegestaan voor 1 dag mits je een doktersverklaring hebt. EHBO kan helpen met opslag."
          />
          <FaqItem
            question="Mag ik tussendoor weg van het terrein?"
            answer="Nee, herintreden is niet mogelijk. Blijf genieten op locatie!"
          />
          <FaqItem
            question="Zijn er lockers?"
            answer="Ja! Medium & grote lockers aanwezig."
          />
        </InfoCard>

        <!-- Golden GLU -->
        <InfoCard icon="🌟" title="Golden-GLU">
          <p>
            GLU-studenten met gouden armbandje krijgen toegang tot gouden
            toiletten en VIP-bars zonder wachtrijen.
          </p>
        </InfoCard>
      </div>
    </section>
  </main>
</template>

<script setup>
// Components will be defined below
</script>

<!-- Reusable InfoCard & Row -->
<script>
export default {
  components: {
    InfoCard: {
      props: ["title", "icon"],
      template: `
        <div class="bg-white/90 dark:bg-zinc-800 rounded-2xl p-6 shadow-md border border-gray-100 dark:border-zinc-700">
          <div class="flex items-center gap-2 mb-4">
            <span class="text-2xl">{{ icon }}</span>
            <h2 class="text-xl font-semibold">{{ title }}</h2>
          </div>
          <div><slot /></div>
        </div>
      `,
    },
    InfoRow: {
      props: ["label"],
      template: `
        <div>
          <h4 class="font-semibold mb-1">{{ label }}</h4>
          <p class="text-sm leading-relaxed text-gray-700 dark:text-gray-300"><slot /></p>
        </div>
      `,
    },
    FaqItem: {
      props: ["question", "answer"],
      data() {
        return { open: false };
      },
      template: `
        <div class="border-t py-4">
          <button
            @click="open = !open"
            class="flex items-center justify-between w-full text-left font-medium"
          >
            <span>{{ question }}</span>
            <span>{{ open ? '−' : '+' }}</span>
          </button>
          <div v-if="open" class="mt-2 text-sm text-gray-600 dark:text-gray-300">
            {{ answer }}
          </div>
        </div>
      `,
    },
  },
};
</script>
