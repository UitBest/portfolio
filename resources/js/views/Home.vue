<template>
    <v-parallax scale="0.5" src="/img/RPAConcept.jpeg">
        <v-sheet class="d-flex pa-10 align-center" :class="mobile ? 'flex-column justify-center' : 'flex-row justify-space-between'" min-height="100svh">
            <v-sheet>
                <v-img
                    class="rounded-circle align-self-baseline"
                    :class="mobile ? 'mx-auto mb-10' : 'mr-10'"
                    src="/img/Timo.jpeg"
                    width="300"
                />
            </v-sheet>
            <v-expansion-panels :class="! mobile && 'align-self-center'">
                <v-expansion-panel
                    bg-color="dark"
                    color="dark"
                    max-width="600"
                    prepend-avatar="/img/Timo.jpeg"
                    subtitle="Webdeveloper"
                    title="Timo Cuijpers"
                    :value="mobile"
                >
                    <template v-slot:text>
                        <span class="text-caption text-primary">BIO</span><br>
                        <span>Sommige herkennen mij als "die lange", maar jij mag me Timo noemen.</span><br><br>
                        <span>Ik woon nu al 19 jaar in Best en ik moet zeggen, het is de Bestse tijd van mijn leven geweest. Misschien wel logisch als ik 19 ben...</span><br><br>
                        <v-divider /><br>
                        <span class="text-caption text-primary">STUDIE</span><br>
                        <span>In 2021 ging ik van vmbo-t naar het Summa College in Eindhoven. Oorspronkelijk deed ik de opleiding Expert IT, maar ik kwam er na een half jaar achter dat ik bijna alleen maar bezig was met programmeren. Zonder overweging ben ik naar de opleiding 'Software Developer' overgestapt en ik was direct in het versneld traject beland.</span><br><br>
                        <span>Met trots kan ik zeggen dat ik voor mijn programmeer examen een 9,7 heb gehaald en voor het onderdeel 'samenwerken' een 10. Wel jammer dat ik de andere 0,3 ben vergeten te halen...</span><br><br>
                        <v-divider /><br>
                        <span class="text-caption text-primary">NU</span><br>
                        <span>Nadat ik de opleiding een jaar heb ingekort en een super informatieve stage heb gehad, besloot ik mijn eigen bedrijf, 'Uit Best', te starten in een kamer van mijn <a class="text-white" href="https://www.dieder.it/">vaders kantoor.</a></span><br><br>
                        <span>Ik ben super blij en dankbaar dat mijn vader mij deze kans geeft om te groeien en dat hij mij advies kan geven in ondernemen.</span>
                    </template>
                </v-expansion-panel>
            </v-expansion-panels>
        </v-sheet>
    </v-parallax>
    <v-sheet
        class="pa-10 justify-center w-100 d-flex flex-column"
        color="dark"
    >
        <v-btn class="mx-auto" icon="mdi-trophy-outline" variant="tonal"/>

        <v-sheet class="d-flex justify-lg-space-evenly" :class="mobile && 'flex-column'">
            <v-card class="mt-4 w-100" :class="! mobile && 'mr-5'" color="transparent">
                <template v-slot:title>
                    <div class="text-primary text-center">PRO'S</div>
                </template>
                <v-card-text>
                    <v-expansion-panels class="my-4 rounded-lg" color="background">
                        <v-expansion-panel
                            bg-color="background"
                            collapse-icon="mdi-minus"
                            color="background"
                            title="Klantinteractie"
                        >
                            <template v-slot:text>
                                Klantinteractie is waar ik voor een gemiddelde software developer beter in ben. <br><br> Iedereen verschild van kennis op het gebied van ICT. Daarom ben ik enorm aanpasbaar naar de klant en kan ik veel in Jip en Janneke taal uitleggen als essentiele onderwerpen te lastig zijn.
                            </template>
                        </v-expansion-panel>
                        <v-expansion-panel
                            bg-color="background"
                            collapse-icon="mdi-minus"
                            color="background"
                            title="Enthousiasme"
                        >
                            <template v-slot:text>
                                Enthousiasme is mijn drive. <br><br> Zodra ik begin aan een website, word ik vaak enthousiast tijdens het ontwerpen en bouwen omdat ik het leuk vind om met mensen te kletsen over designs en moderniteit.
                            </template>
                        </v-expansion-panel>
                    </v-expansion-panels>
                </v-card-text>
            </v-card>
            <v-card class="mt-4 w-100" :class="! mobile && 'ml-5'" color="transparent">
                <template v-slot:title>
                    <div class="text-primary text-center">CON'S</div>
                </template>
                <v-card-text>
                    <v-expansion-panels class="my-4" color="page">
                        <v-expansion-panel
                            bg-color="background"
                            collapse-icon="mdi-minus"
                            color="background"
                            title="Functies"
                        >
                            <template v-slot:text>
                                Functies maken en lastige formules oplossen zijn niet mijn ding. <br><br> Ik vind het designen en ontwerpen van websites enorm leuk maar het bouwen van webshops en webapplicaties duren bij mij gemiddeld langer. Dit is de reden waarom ik een enorm goede vriend als freelancer inhuur in mijn bedrijf, 'Uit Best'.
                            </template>
                        </v-expansion-panel>
                        <v-expansion-panel
                            bg-color="background"
                            collapse-icon="mdi-minus"
                            color="background"
                            text="Functies maken en lastige formules oplossen zijn niet mijn ding. Ik vind het designen en ontwerpen van websites enorm leuk maar het bouwen van webshops en webapplicaties duren bij mij gemiddeld langer. Dit is de reden waarom ik een enorm goede vriend als freelancer inhuur in mijn bedrijf, 'Uit Best'."
                            title="Functies"
                        />
                    </v-expansion-panels>
                </v-card-text>
            </v-card>
        </v-sheet>
    </v-sheet>
    <v-parallax
        src="/img/ProgrammingBackground.jpeg"
        width="100%"
    >
        <v-sheet :height="mobile ? '1000' : '0'" />
    </v-parallax>
</template>

<script setup>
    import { computed } from 'vue';
    import { useDisplay } from 'vuetify';

    const display = useDisplay();
    const mobile = computed(() => display.smAndDown.value);

</script>
