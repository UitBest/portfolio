<template>
    <v-parallax
        v-if="route.meta.isRoot"
        :src="mobile ? '/img/WebsitesBackgroundPortrait.png' : '/img/WebsitesBackground.png'"
    >
        <v-sheet>
            <div class="text-h2 py-16 text-center">Websites</div>
        </v-sheet>
        <v-divider class="mx-auto mb-10" inset />
        <v-sheet class="d-flex flex-wrap">
            <v-sheet
                v-for="site in sites"
                :key="site.name"
                class="pa-10"
                :width="mobile ? '100%' : '50%'"
            >
                <v-card
                    color="transparent"
                    elevation="24"
                    style="backdrop-filter: blur(20px)"
                    :subtitle="site.url"
                    :title="site.name"
                    :to="{ name: site.name }"
                >
                    <v-card-text>
                        <v-img class="rounded-lg mb-4" :src="site.imgUrl" />
                        <v-sheet class="d-flex flex-row">
                            <v-sheet class="pr-4 d-flex flex-column" width="50%">
                                <v-sheet class="align-self-baseline">
                                    <div class="font-weight-black">Omschrijving</div>
                                    <div>{{ site.description }}</div>
                                </v-sheet>

                                <v-sheet height="100%" min-height="20" />

                                <v-sheet>
                                    <div class="font-weight-black">Periode:</div>
                                    <div>{{ site.when }}</div>
                                </v-sheet>
                            </v-sheet>

                            <v-divider vertical />

                            <v-sheet class="pl-4 text-right d-flex flex-column" width="50%">
                                <v-sheet>
                                    <div class="font-weight-black">Duur:</div>
                                    <div>{{ site.duration }}</div>
                                </v-sheet>

                                <v-sheet height="100%" min-height="20" />

                                <v-sheet class="align-self-end">
                                    <div class="font-weight-black">Link:</div>
                                    <div>{{ site.url }}</div>
                                </v-sheet>
                            </v-sheet>
                        </v-sheet>
                    </v-card-text>
                </v-card>
            </v-sheet>
        </v-sheet>
    </v-parallax>

    <template v-for="(site, key) in sites" :key="key">
        <v-sheet
            v-show="! site.loaded.value && route.name === site.name"
            class="my-8 text-center"
        >
            <div class="text-h4">
                Even geduld a.u.b.
            </div>
            <v-progress-circular indeterminate size="large" />
        </v-sheet>
        <embed
            v-show="route.name === site.name"
            :src="site.url"
            style="height: 100svh; width: 100%"
            @load="site.loaded.value = true"
        />
    </template>
</template>

<script setup>
    import { useRoute } from 'vue-router';
    import { computed, ref } from 'vue';
    import { useDisplay } from 'vuetify';

    const display = useDisplay();
    const mobile = computed(() => display.smAndDown.value);

    const route = useRoute();

    const sites = [
        {
            name: '4 Torentjes',
            url: 'https://www.4torentjes.nl',
            loaded: ref(false),
            description: '4 Torentjes is een website voor het huisje van mijn grootouders in Portugal.',
            duration: '16 uur (zonder design i.v.m. gebruik origineel design)',
            when: 'Eind 2023',
            imgUrl: '/img/4torentjes.jpeg',
        },
        {
            name: 'Beauty Education',
            url: 'https://www.beautyeducation.nl',
            loaded: ref(false),
            description: 'Beauty Education is een website voor de zus van mijn tante die cursussen / makeovers geeft.',
            duration: '90 uur per persoon (3 personen)',
            when: 'Eind 2022 - Midden 2023',
            imgUrl: '/img/beautyeducation.jpeg',
        },
        {
            name: 'MAJO Diensten',
            url: 'https://www.majodiensten.nl',
            loaded: ref(false),
            description: 'MAJO diensten is een website voor de moeder van mijn tante die schoonmaakdiensten aanbiedt.',
            duration: '18 uur',
            when: 'Midden 2023',
            imgUrl: '/img/majodiensten.jpeg',
        },
    ];
</script>
