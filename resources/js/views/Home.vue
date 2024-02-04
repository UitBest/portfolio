<template>
    <v-parallax scale="0.5" src="/img/MainBackground.jpg">
        <v-sheet
            class="d-flex align-center flex-wrap"
            :class="mobile ? 'flex-column justify-center px-4 py-16' : 'flex-row justify-space-between pa-16'"
            min-height="100svh"
        >
            <v-sheet class="d-flex justify-center flex-column align-center" width="100%">
                <v-img
                    class="bg-transparent elevation-24 rounded-circle align-self-baseline mx-auto my-16"
                    src="/img/TimoCutOut.png"
                    style="backdrop-filter: blur(20px)"
                    width="400"
                />
                <div :class="mobile ? 'text-h3' : 'text-h2'">
                    Timo Cuijpers
                </div>

                <v-btn
                    v-if="arrowDownHint"
                    class="mt-16 arrowDownHint"
                    icon="mdi-arrow-down"
                    variant="text"
                    @click="arrowDownHint = false"
                />
            </v-sheet>

            <v-sheet class="d-flex justify-center" height="50svh" width="100%" />

            <v-sheet :class="[showExtraIntroInfo ? 'mb-16' : '', mobile ? 'mb-16' : 'pr-8']" :width="mobile ? '100%' : '50%'">
                <v-card
                    color="transparent"
                    elevation="24"
                    style="backdrop-filter: blur(20px)"
                >
                    <v-card-title class="text-primary">
                        Bio
                    </v-card-title>
                    <v-card-text class="pb-0">
                        <div class="text-caption text-primary">OVER MIJ</div>
                        <div>Welkom op mijn portfolio website.</div><br>
                        <div>Ik ben Timo Cuijpers, geboren en getogen in Best.</div><br>
                        <div>Tijdens mijn afstudeerstage bij "WEAP" ontstond er een enorme persoonlijke en professionele groei. Deze ontwikkeling was te danken aan de professionele werkomgeving en het aanleren van verantwoordelijkheidsgevoel.</div><br>

                        <v-expand-transition>
                            <v-sheet v-show="showExtraIntroInfo">
                                <v-divider /><br>
                                <div class="text-caption text-primary">STUDIE</div>
                                <div>In 2020 vond er een overgang plaats van het Kempenhorst College in Oirschot naar het Summa College in Eindhoven. Aanvankelijk was de inschrijving voor de opleiding Expert IT, maar binnen een half jaar werd duidelijk dat een grotere interesse lag bij programmeren.</div><br>
                                <div>Deze nieuwe inzichten leidden tot een overstap naar de opleiding 'Software Developer', die begin 2024 succesvol werd afgerond.</div><br>
                                <v-divider /><br>
                                <div class="text-caption text-primary">EIGEN BEDRIJF</div>
                                <div>Na het versneld afronden van de opleiding en een leerzame stageperiode, werd de stap gezet om een eigen onderneming, 'Uit Best', op te richten. Deze kans deed zich voor in een kamer van <a class="text-white" href="https://www.dieder.it/" target="_blank">mijn vaders bedrijf</a>. Dankbaarheid wordt uitgesproken voor de mogelijkheid en de waardevolle adviezen over het runnen van een eigen bedrijf.</div><br>
                                <div>De eindstage bood essentiële inzichten en het vertrouwen dat het starten van een eigen bedrijf een haalbare droom is.</div>

                            </v-sheet>
                        </v-expand-transition>
                    </v-card-text>

                    <v-card-actions class="justify-center">
                        <v-btn
                            :icon="(showExtraIntroInfo ? 'mdi-rotate-180' : '') + ' mdi-chevron-down'"
                            variant="text"
                            @click="showExtraIntroInfo = ! showExtraIntroInfo"
                        />
                    </v-card-actions>
                </v-card>
            </v-sheet>
            <v-sheet :class="! mobile && 'pl-8'" :width="mobile ? '100%' : '50%'">
                <v-card
                    color="transparent"
                    elevation="24"
                    style="backdrop-filter: blur(20px)"
                >
                    <v-card-title class="text-primary">
                        Hobby's
                    </v-card-title>
                    <v-card-text>
                        <div class="text-caption text-primary">GITAAR</div>
                        <span>Tijdens de stage bij "WEAP" ontstond de gelegenheid om een gitaar te lenen. Dit leidde tot een groeiende interesse in het spelen van simpele akoestische nummers.</span><br><br>

                        <div class="text-caption text-primary">BASKETBAL</div>
                        <span>Basketbal, gestart in 2016, is uitgegroeid tot een belangrijke activiteit, met BCO Oirschot als de gekozen club voor training en wedstrijden. Deze sport biedt niet alleen een manier om fysiek actief te zijn, maar ook een platform voor persoonlijke ontwikkeling.</span>
                    </v-card-text>
                </v-card>
            </v-sheet>
        </v-sheet>
    </v-parallax>
    <v-sheet
        class="justify-center w-100 d-flex flex-column"
        :class="mobile ? 'px-4 py-10' : 'pa-10'"
        color="dark"
    >
        <v-btn class="mx-auto" icon="mdi-trophy-outline" variant="tonal"/>

        <v-sheet class="d-flex justify-lg-space-evenly" :class="mobile && 'flex-column'">
            <v-card class="mt-4 w-100" color="transparent" max-width="800">
                <template v-slot:title>
                    <div class="text-primary text-center">PRO'S</div>
                </template>
                <v-card-text>
                    <v-expansion-panels class="my-4 rounded-lg" color="background">
                        <v-expansion-panel
                            v-for="(quality, key) in qualities"
                            :key="key"
                            bg-color="background"
                            collapse-icon="mdi-minus"
                            color="background"
                            rounded="lg"
                            title="Klantinteractie"
                        >
                            <template v-slot:title>
                                <v-card
                                    class="d-flex align-center"
                                    color="transparent"
                                    density="compact"
                                    variant="flat"
                                >
                                    <v-avatar class="mr-4 text-white" :icon="quality.icon" />
                                    <v-card-title class="pa-0 mt-1">
                                        {{ quality.title }}
                                    </v-card-title>
                                </v-card>
                            </template>
                            <template v-slot:text>
                                <v-sheet class="py-4">
                                    <div class="text-body-1">
                                        {{ quality.subtitle }}
                                    </div>
                                    <v-divider class="my-4" />
                                    <div class="text-body-2">
                                        {{ quality.description }}
                                    </div>
                                </v-sheet>
                            </template>
                        </v-expansion-panel>
                    </v-expansion-panels>
                </v-card-text>
            </v-card>
        </v-sheet>
    </v-sheet>
    <v-parallax src="/img/MainBackground2.jpg" width="100%">
        <v-sheet
            :class="mobile ? 'px-4 py-16' : 'pa-16 mx-auto'"
            max-width="2000"
            :min-height="mobile ? '1000' : '100svh'"
        >
            <div class="text-center text-h2 text-primary mb-16">
                Carrière
            </div>
            <v-timeline
                align="start"
                :justify="mobile ? undefined : 'center'"
                line-color="primary"
                line-inset="16"
                :side="mobile ? 'end' : undefined"
                truncate-line="both"
            >
                <v-timeline-item
                    v-for="(job, key) in jobs"
                    :key="key"
                    dot-color="white"
                    fill-dot
                    size="x-small"
                >
                    <v-card
                        color="transparent"
                        elevation="20"
                        style="backdrop-filter: blur(20px)"
                        :subtitle="job.period"
                        :title="job.company"
                    >
                        <v-card-text>
                            <div class="font-weight-black text-h6 text-primary">
                                {{ job.function }}
                            </div>
                            <div>
                                <v-list
                                    bg-color="transparent"
                                    color="transparent"
                                    variant="text"
                                >
                                    <v-list-item
                                        v-for="(description, descriptionKey) in job.description"
                                        :key="descriptionKey"
                                        color="transparent"
                                        variant="text"
                                    >
                                        - {{ description }}
                                    </v-list-item>
                                </v-list>
                            </div>
                        </v-card-text>
                    </v-card>
                </v-timeline-item>
            </v-timeline>
        </v-sheet>
    </v-parallax>
</template>

<script setup>
    import { computed, ref } from 'vue';
    import { useDisplay } from 'vuetify';

    const display = useDisplay();
    const mobile = computed(() => display.smAndDown.value);

    const showExtraIntroInfo = ref(false);

    const arrowDownHint = ref(true);

    const qualities = [
        {
            icon: 'mdi-account-group',
            title: 'Klantinteractie',
            subtitle: 'Vaardigheid in Klantinteractie',
            description: 'IT-termen kunnen complex zijn. Daarom is er een sterke aanpasbaarheid in woordkeuze, om technische concepten in eenvoudige bewoordingen uit te leggen, indien nodig.',
        },
        {
            icon: 'mdi-fast-forward',
            title: 'Enthousiasme',
            subtitle: 'Enthousiasme als Drijfveer',
            description: 'Bij het beginnen aan een website wordt deze met zorg en aandacht afgemaakt. Het bespreken van designs met collega Jelle is een belangrijk onderdeel van het proces, om zo verschillende perspectieven en ideeën te verkrijgen over de betreffende websites. Het doel is om elke website met trots af te ronden, wetende dat er alles aan is gedaan om een optimaal resultaat te bereiken.',
        },
    ];

    const jobs = [
        {
            company: 'Kempenhorst College (Oirschot)',
            period: 'augustus 2016 - mei 2020',
            function: 'VMBO-T / MAVO',
            description: [
                'Technisch keuzendeel',
            ],
        },
        {
            company: 'Axender (Best)',
            period: 'februari 2017 - juni 2018',
            function: 'Folderbezorger',
            description: [
                'Folders insteken en daarna in de wijk bezorgen',
            ],
        },
        {
            company: 'Dieder.IT (Best)',
            period: 'april 2020 - augustus 2020',
            function: 'Stagiair',
            description: [
                'Basis kennis IT leren',
                'Voorbereiding Summa College Expert IT',
            ],
        },
        {
            company: 'MAJO Diensten (Eindhoven)',
            period: 'april 2020 - augustus 2020',
            function: 'Schoonmaker',
            description: [
                'Hervullen papieren handdoeken',
                'Stofzuigen',
                'Dweilen',
                'Prullenbakken verschonen',
                'Toiletten schoonmaken',
                'Tafels & stoelen desinfecteren',
            ],
        },
        {
            company: 'Summa College IT (Eindhoven)',
            period: 'augustus 2020 - april 2021',
            function: 'Expert IT (MBO Niveau 4)',
            description: [
                'Servers beheren',
                'Applicaties beheren',
                'Office 365 beheren',
                'Gestopt wegens interesse in andere opleiding',
            ],
        },
        {
            company: 'Sushi Eight (Best, Oirschot, Sint-Michelsgestel)',
            period: 'december 2020 - september 2023',
            function: 'Allround medewerker',
            description: [
                'Aansprakelijk voor bestellingen',
                'Fysiek en telefonisch aannemen van bestellingen',
                'Bezorgen op meerdere plaatsen wegens tekort aan personeel',
                'Bestellingen klaarmaken en controleren',
                'Kassa bediening',
                'Frituren',
            ],
        },
        {
            company: 'Summa College IT (Eindhoven)',
            period: 'april 2021 - januari 2024',
            function: 'Software Developer (MBO Niveau 4)',
            description: [
                'Versneld traject (differentiatie klas)',
                'Applicaties schrijven in Laravel',
                'Klanten interactie',
                'Open dagen meehelpen',
                'Master klassen meehelpen',
                'Dronechallenge (niet afgerond)',
                '2 Hackathons',
            ],
        },
        {
            company: 'WEAP (Gemert)',
            period: 'september 2023 - januari 2024',
            function: 'Stagiair',
            description: [
                'Ontwikkelen van een stand-up tool voor intern gebruik',
            ],
        },
        {
            company: 'Uit Best (Best)',
            period: 'Januari 2024 - heden',
            function: 'Eigenaar',
            description: [
                'Designen en ontwerpen van websites',
                'Interviews afnemen',
                'Front-end van web-applicaties bouwen',
                'Websites bouwen',
                'Administratie',
            ],
        },
    ];
</script>

<style>

 .arrowDownHint {
    animation: sendAnimation 20s ease infinite;
 }

 @keyframes sendAnimation {
    0% { transform: translateY(0); }
    30% { transform: translateY(0); }
    35% { transform: translateY(200%); }
    40% { transform: translateY(0); }
    45% { transform: translateY(200%); }
    50% { transform: translateY(0); }
     70% { transform: translateY(0); }
    75% { transform: translateY(0) scale(200%); }
    80% { transform: translateY(300%) scale(200%); }
    85% { transform: translateY(0) scale(200%); }
    90% { transform: translateY(300%) scale(200%); }
     95% { transform: translateY(0) scale(200%); }
     100% { transform: translateY(0); }
 }

</style>
