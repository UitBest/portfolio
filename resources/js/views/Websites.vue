<template>
    <v-sheet
        v-if="route.meta.isRoot"
        ref="content"
        class="mx-auto my-4 px-4 py-2"
        elevation="10"
        max-width="64rem"
        min-height="90svh"
        rounded="xl"
    >
        <h1>
            Home, I'm comming home. Home is where ever I'm with you.
        </h1>
    </v-sheet>

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
            style="height: 100%; width: 100%"
            @load="site.loaded.value = true"
        />
    </template>
</template>

<script setup>
    import { useRoute } from 'vue-router';
    import { ref } from 'vue';

    const route = useRoute();

    const sites = [
        {
            name: '4 Torentjes',
            url: 'https://www.4torentjes.nl',
            loaded: ref(false),
            description: '4 Torentjes is een website voor het huisje van mijn grootouders in Portugal.',
            duration: '16 uur (zonder design i.v.m. gebruik origineel design)',
            when: 'Eind 2023',
        },
        {
            name: 'Beauty Education',
            url: 'https://www.beautyeducation.nl',
            loaded: ref(false),
            description: 'Beauty Education is een website voor de zus van mijn tante die cursussen / makeovers geeft.',
            duration: '90 uur per persoon (3 personen)',
            when: 'Eind 2022 - Midden 2023',
        },
        {
            name: 'MAJO Diensten',
            url: 'https://www.majodiensten.nl',
            loaded: ref(false),
            description: 'MAJO diensten is een website voor de moeder van mijn tante die schoonmaakdiensten aanbiedt.',
            duration: '18 uur',
            when: 'Midden 2023',
        },
    ];
</script>
