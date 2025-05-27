<template>
  <main class="w-full">
    <section class="py-20 px-4 bg-white text-gray-800">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl font-bold text-red-600 mb-10 text-center">
          Festival Informatie ❤️U
        </h1>

        <!-- Algemeen & Contact -->
        <QnASection title="📍 Algemeen & Contact">
          <div class="space-y-4">
            <p>
              Het ❤️U Festival is voor (nieuwe) studenten in de regio Utrecht en
              is een aanvulling op UIT.
            </p>
            <div>
              <h4 class="font-semibold">📌 Adres:</h4>
              <p>
                Locatie: Strijkviertel, Utrecht<br />Navigatieadres:
                Strijkviertelweg, Utrecht
              </p>
            </div>
            <div>
              <h4 class="font-semibold">🗓️ Datum & Openingstijden:</h4>
              <p>Zaterdag 6 september 2025 - 12:00 tot 23:00 uur</p>
            </div>
          </div>
        </QnASection>

        <!-- Bereikbaarheid -->
        <QnASection title="🚗 Bereikbaarheid">
          <div class="space-y-4">
            <div>
              <h4 class="font-semibold">🚲 Fiets:</h4>
              <p>
                Er is een grote gratis fietsenstalling aanwezig waar je jouw
                fiets de gehele dag kunt stallen.
              </p>
            </div>
            <div>
              <h4 class="font-semibold">🚘 Auto:</h4>
              <p>
                Parkingticket nodig. Parkeer op P+R Papendorp (volg borden ‘P
                online ticket’).
                <br />Geen ticket? Koop er één bij de parkeerwachter (PIN ONLY).
                VOL = VOL.
              </p>
            </div>
            <div>
              <h4 class="font-semibold">🚌 OV:</h4>
              <p>
                Plan je reis via
                <a
                  href="https://9292.nl"
                  class="text-red-600 underline"
                  target="_blank"
                  >9292.nl</a
                >
              </p>
            </div>
            <div>
              <h4 class="font-semibold">🚌 Shuttlebus:</h4>
              <p>
                Vanaf Utrecht Centraal gratis shuttlebus naar het terrein.<br />
                Vertrek: 12:00 - 19:00. Retour: vanaf 21:00.<br />
                Vertrekpunt: Mineurslaan, volg bordjes ‘❤️U Festival’.
              </p>
            </div>
            <div>
              <h4 class="font-semibold">🚖 Taxi & Kiss & Ride:</h4>
              <p>
                Navigeer naar Strijkviertel, De Meern en volg de borden “Kiss &
                Ride ❤️U Festival”.
              </p>
            </div>
          </div>
        </QnASection>

        <!-- Lockers -->
        <QnASection title="🔒 Lockers">
          <div class="space-y-2">
            <p>
              Op het terrein zijn kluisjes aanwezig (3-4 jassen per stuk).
              <br />Je kunt deze onbeperkt openen/sluiten. <br />Online
              reserveren is niet mogelijk.
            </p>
          </div>
        </QnASection>

        <!-- FAQ -->
        <QnASection title="❓ FAQ">
          <FaqItem
            question="Ik gebruik medicatie. Wat nu?"
            answer="Je mag medicatie meenemen voor 1 dag mits je een doktersverklaring/medicatiepaspoort toont. EHBO kan medicatie bewaren indien nodig."
          />
          <FaqItem
            question="Mag ik het festivalterrein tussentijds verlaten?"
            answer="Nee, om veiligheidsredenen kun je het terrein niet verlaten en opnieuw betreden. Er zijn voldoende loungeplekken en eet/drinkopties."
          />
          <FaqItem
            question="Zijn er lockers?"
            answer="Ja, er zijn medium en grote lockers te huur op het terrein."
          />
        </QnASection>

        <!-- Golden-GLU -->
        <QnASection title="🌟 Golden-GLU">
          <div class="space-y-2">
            <p>
              Studenten van het GLU met een gouden armbandje hebben toegang tot
              gouden toiletten en speciale barpunten zonder wachtrij.
            </p>
          </div>
        </QnASection>
      </div>
    </section>
  </main>
</template>

<script setup></script>
