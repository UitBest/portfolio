<template>
    <v-card
        class="d-flex align-center position-relative justify-center"
        :class="[showExtraIntroInfo ? 'mb-16 pb-16' : '', mobile ? 'pb-16 mb-16' : 'pr-8 pb-10']"
        color="transparent"
        elevation="24"
        :min-height="!mobile ? 300 : undefined"
        style="backdrop-filter: blur(20px)"
    >
        <v-sheet>
            <v-card-title
                id="Bio"
                class="text-primary"
            >
                Bio
            </v-card-title>
            <v-card-text class="pb-0">
                <div class="text-caption text-primary">OVER MIJ</div>
                <div>Welkom op mijn portfolio website.</div>
                <br />
                <div>Ik ben Timo Cuijpers, geboren en getogen in Best.</div>
                <br />
                <div>
                    Tijdens mijn afstudeerstage bij "WEAP" ontstond er een enorme persoonlijke en professionele groei.
                    Deze ontwikkeling was te danken aan de professionele werkomgeving en het aanleren van
                    verantwoordelijkheidsgevoel.
                </div>
                <br />

                <v-expand-transition>
                    <v-sheet v-show="showExtraIntroInfo">
                        <v-divider />
                        <br />
                        <div class="text-caption text-primary">STUDIE</div>
                        <div>
                            In 2020 vond er een overgang plaats van het Kempenhorst College in Oirschot naar het Summa
                            College in Eindhoven. Aanvankelijk was de inschrijving voor de opleiding Expert IT, maar
                            binnen een half jaar werd duidelijk dat een grotere interesse lag bij programmeren.
                        </div>
                        <br />
                        <div>
                            Deze nieuwe inzichten leidden tot een overstap naar de opleiding 'Software Developer', die
                            begin 2024 succesvol werd afgerond.
                        </div>
                        <br />
                        <v-divider />
                        <br />
                        <div class="text-caption text-primary">EIGEN BEDRIJF</div>
                        <div>
                            Na het versneld afronden van de opleiding en een leerzame stageperiode, werd de stap gezet om
                            een eigen onderneming, 'Uit Best', op te richten. Deze kans deed zich voor in een kamer van
                            <a
                                class="text-white"
                                href="https://www.dieder.it/"
                                target="_blank"
                                >mijn vaders bedrijf</a
                            >. Dankbaarheid wordt uitgesproken voor de mogelijkheid en de waardevolle adviezen over het
                            runnen van een eigen bedrijf.
                        </div>
                        <br />
                        <div>
                            De eindstage bood essentiële inzichten en het vertrouwen dat het starten van een eigen
                            bedrijf een haalbare droom is.
                        </div>
                    </v-sheet>
                </v-expand-transition>
            </v-card-text>
        </v-sheet>

        <v-card-actions class="position-absolute bottom-0">
            <v-btn
                :icon="(showExtraIntroInfo ? 'mdi-rotate-180' : '') + ' mdi-chevron-down'"
                variant="text"
                @click="showExtraIntroInfo = !showExtraIntroInfo"
            />
        </v-card-actions>
    </v-card>
</template>

<script setup>
    import { computed, ref } from 'vue';
    import { useDisplay } from 'vuetify';

    const display = useDisplay();
    const mobile = computed(() => display.smAndDown.value);
    const showExtraIntroInfo = ref(false);
</script>
