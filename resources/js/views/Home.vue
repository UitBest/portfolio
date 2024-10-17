<template>
    <v-container
        class="pa-0"
        fluid
    >
        <v-sheet v-show="false">
            <h1>Portfolio Timo Cuijpers</h1>
            <h2>
                Dit is een portfolio van Timo Cuijpers. Hierin staan alle projecten die hij heeft gemaakt en waar hij aan
                heeft gewerkt. Ook staan er persoonlijke gegevens in en een korte biografie.
            </h2>
        </v-sheet>
        <v-lazy
            id="homeContainer"
            min-height="100svh"
        >
            <v-parallax src="/img/MainBackground.jpg">
                <v-sheet
                    class="d-flex align-center flex-wrap"
                    :class="mobile ? 'flex-column justify-center px-4 py-16' : 'flex-row justify-space-between pa-16'"
                    min-height="100svh"
                >
                    <v-sheet
                        class="d-flex justify-center flex-column align-center"
                        width="100%"
                    >
                        <v-responsive
                            class="rounded-circle elevation-24 d-flex justify-center align-center mb-16"
                            height="400"
                            width="400"
                        >
                            <v-img
                                eager
                                rounded="circle"
                                src="/img/TimoCutOutLower.png"
                                style="backdrop-filter: blur(20px)"
                            />
                        </v-responsive>

                        <div :class="mobile ? 'text-h3' : 'text-h2'">Timo Cuijpers</div>

                        <v-btn
                            v-if="arrowDownHint"
                            class="mt-16 arrowDownHint"
                            icon="mdi-arrow-down"
                            variant="text"
                            @click="scrollToBio"
                        />
                    </v-sheet>

                    <v-sheet
                        class="d-flex justify-center"
                        height="50svh"
                        width="100%"
                    />

                    <v-lazy :width="mobile ? '100%' : '50%'">
                        <Bio />
                    </v-lazy>

                    <v-lazy
                        :class="!mobile && 'pl-8'"
                        :height="!mobile ? '100%' : undefined"
                        :width="mobile ? '100%' : '50%'"
                    >
                        <Hobbies />
                    </v-lazy>
                </v-sheet>
            </v-parallax>
        </v-lazy>

        <v-lazy
            min-height="300"
            width="100%"
        >
            <Pros :qualities="qualities" />
        </v-lazy>

        <v-lazy
            min-height="300svh"
            width="100%"
        >
            <v-parallax src="/img/MainBackground2.jpg">
                <v-container>
                    <v-row justify="center">
                        <h3 class="text-center text-h2 text-primary my-6">Carrière</h3>
                    </v-row>
                    <v-row justify="center">
                        <h4 class="text-center text-body text-disabled mb-16">2016</h4>
                    </v-row>
                    <v-row justify="center">
                        <v-timeline
                            align="start"
                            class="mb-16"
                            :class="!mobile && 'ml-n8'"
                            :density="mobile ? 'compact' : undefined"
                            dot-color="primary"
                            :justify="mobile ? undefined : 'center'"
                            line-color="primary"
                            line-inset="16"
                            :side="mobile ? 'end' : undefined"
                        >
                            <v-timeline-item
                                v-for="(job, key) in jobs"
                                :key="key"
                                width="100%"
                            >
                                <MilestoneItem2 :job="job" />
                            </v-timeline-item>
                        </v-timeline>
                    </v-row>

                    <v-divider class="my-16" />

                    <v-row justify="center">
                        <div class="mt-16 text-center text-h2 text-primary mb-6">Uit Best</div>
                    </v-row>

                    <v-row justify="center">
                        <div class="text-center text-body text-disabled mb-16">*Milestones*</div>
                    </v-row>

                    <v-row justify="center">
                        <v-timeline
                            align="start"
                            class="mb-16"
                            :class="!mobile && 'ml-n8'"
                            :density="mobile ? 'compact' : undefined"
                            dot-color="primary"
                            :justify="mobile ? undefined : 'center'"
                            line-color="primary"
                            line-inset="16"
                            :side="mobile ? 'end' : undefined"
                        >
                            <v-timeline-item
                                v-for="(milestone, key) in milestones"
                                :key="key"
                                width="100%"
                            >
                                <MilestoneItem :milestone="milestone" />
                            </v-timeline-item>
                        </v-timeline>
                    </v-row>
                </v-container>
            </v-parallax>
        </v-lazy>
    </v-container>
</template>

<script setup>
    import { computed, ref } from 'vue';
    import { useDisplay } from 'vuetify';
    import { useRouter } from 'vue-router';
    import MilestoneItem from './MilestoneItem.vue';
    import MilestoneItem2 from './CareerItem.vue';
    import Pros from './Pros.vue';
    import Hobbies from './Hobbies.vue';
    import Bio from './Bio.vue';

    const router = useRouter();

    const display = useDisplay();
    const mobile = computed(() => display.smAndDown.value);

    const showExtraIntroInfo = ref(false);

    const arrowDownHint = ref(true);

    const scrollToBio = () => {
        document.getElementById('Bio').scrollIntoView({ behavior: 'smooth' });
    };

    const qualities = [
        {
            icon: 'mdi-account-group',
            title: 'Klantinteractie',
            subtitle: 'Vaardigheid in Klantinteractie',
            description:
                'IT-termen kunnen complex zijn. Daarom is er een sterke aanpasbaarheid in woordkeuze, om technische concepten in eenvoudige bewoordingen uit te leggen, indien nodig.',
        },
        {
            icon: 'mdi-fast-forward',
            title: 'Enthousiasme',
            subtitle: 'Enthousiasme als Drijfveer',
            description:
                'Bij het beginnen aan een website wordt deze met zorg en aandacht afgemaakt. Het bespreken van designs met collega Jelle is een belangrijk onderdeel van het proces, om zo verschillende perspectieven en ideeën te verkrijgen over de betreffende websites. Het doel is om elke website met trots af te ronden, wetende dat er alles aan is gedaan om een optimaal resultaat te bereiken.',
        },
    ];

    const milestones = [
        {
            title: 'Summa College - Nieuws',
            period: 'Maart 2024',
            image: '/img/TimoNieuws.jpg',
            link: 'https://www.summacollege.nl/over-summa/nieuws/timo-is-al-ondernemer-in-de-ict',
        },
        {
            title: 'Appeldoorn Riooltechniek',
            period: 'Augustus 2024',
            image: '/img/appeldoorn-riooltechniek-preview.png',
            subtitle: 'Wordpress to Vue',
            to: { name: 'Appeldoorn Riooltechniek - Archief' },
        },
        {
            title: 'Dieder.IT',
            period: 'September 2024',
            image: '/img/diederit-preview.png',
            subtitle: 'Modernisatie',
            to: { name: 'DiederIT' },
        },
        {
            title: 'Appeldoorn Riooltechniek 2',
            period: 'Oktober 2024',
            image: '/img/appeldoorn-riooltechniek-preview-nieuw.png',
            subtitle: 'Redesign / Optimalisatie / SEO',
            to: { name: 'Appeldoorn Riooltechniek - Archief' },
        },
    ];

    const jobs = [
        {
            company: 'Kempenhorst College (Oirschot)',
            period: 'augustus 2016 - mei 2020',
            function: 'VMBO-T / MAVO',
            description: ['Technisch keuzedeel'],
        },
        {
            company: 'Axender (Best)',
            period: 'februari 2017 - juni 2018',
            function: 'Folderbezorger',
            description: ['Folders insteken en daarna in de wijk bezorgen'],
        },
        {
            company: 'Dieder.IT (Best)',
            period: 'april 2020 - augustus 2020',
            function: 'Stagiair',
            description: ['Basis kennis IT leren', 'Voorbereiding Summa College Expert IT'],
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
                'Drone-challenge (niet afgerond)',
                '2 Hackathons',
            ],
        },
        {
            company: 'WEAP (Gemert)',
            period: 'september 2023 - januari 2024',
            function: 'Stagiair',
            description: ['Ontwikkelen van een stand-up tool voor intern gebruik'],
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

#homeContainer {

    transform-style: preserve-3d;
    overflow-y: auto;
    perspective: 1px;
}
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
