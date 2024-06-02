<template>
    <div>
        <v-parallax
            v-if="route.meta.isRoot"
            src="/img/WebsitesBackground.jpg"
        >
            <v-sheet>
                <div class="text-h2 py-16 text-center">Websites</div>
            </v-sheet>
            <v-divider
                class="mx-auto"
                inset
            />
            <v-sheet
                class="d-flex flex-wrap mx-auto"
                max-width="2000"
            >
                <v-sheet
                    v-for="site in sites"
                    :key="site.name"
                    :class="mobile ? 'px-4 py-16' : 'pa-16'"
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
                            <v-img
                                aspect-ratio="1.3"
                                class="rounded-lg my-4 elevation-24"
                                cover
                                position="top"
                                :src="site.imgUrl"
                            />
                            <v-sheet class="d-flex flex-row">
                                <v-sheet
                                    class="pr-4 d-flex flex-column"
                                    width="50%"
                                >
                                    <v-sheet class="align-self-baseline">
                                        <div class="font-weight-black">Omschrijving</div>
                                        <div>{{ site.description }}</div>
                                    </v-sheet>

                                    <v-sheet
                                        height="100%"
                                        min-height="20"
                                    />

                                    <v-sheet>
                                        <div class="font-weight-black">Periode:</div>
                                        <div>{{ site.when }}</div>
                                    </v-sheet>
                                </v-sheet>

                                <v-divider vertical />

                                <v-sheet
                                    class="pl-4 text-right d-flex flex-column"
                                    width="50%"
                                >
                                    <v-sheet>
                                        <div class="font-weight-black">Duur:</div>
                                        <div>{{ site.duration }}</div>
                                    </v-sheet>

                                    <v-sheet
                                        height="100%"
                                        min-height="20"
                                    />

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

        <template
            v-for="(site, key) in sites"
            :key="key"
        >
            <v-sheet
                v-show="!site.loaded.value && route.name === site.name"
                class="my-8 text-center"
            >
                <div class="text-h4">Even geduld a.u.b.</div>
                <v-progress-circular
                    indeterminate
                    size="large"
                />
            </v-sheet>
            <embed
                v-show="route.name === site.name"
                :src="site.url"
                style="height: 100svh; width: 100%"
                @load="site.loaded.value = true"
            />
        </template>
    </div>
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
            description:
                'De website 4 Torentjes dient als online presentatie voor een huis in Portugal, eigendom van mijn grootvader.',
            duration: '16 uur (zonder design i.v.m. gebruik origineel design)',
            when: 'Eind 2023',
            imgUrl: '/img/4TorentjesCutOut.png',
        },
        {
            name: 'Madje Diensten',
            url: 'https://www.madjediensten.nl',
            loaded: ref(false),
            description: 'Madjediensten.nl biedt informatie over schoonmaakdiensten, opgezet voor een familielid',
            duration: '18 uur',
            when: 'Midden 2023',
            imgUrl: '/img/MadjeDienstenCutOut.png',
        },
        {
            name: 'Beauty Education',
            url: 'https://www.beautyeducation.nl',
            loaded: ref(false),
            description:
                'Beauty Education is een website ontworpen voor een professioneel die cursussen en makeovers verzorgt, gerelateerd aan mijn familie.',
            duration: '90 uur per persoon (3 personen)',
            when: 'Eind 2022 - Midden 2023',
            imgUrl: '/img/BeautyEducationCutOut.png',
        },
    ];
</script>
