<template>
    <template v-for="(site, key) in sites" :key="key">
        <v-sheet
            v-show="! site.loaded.value && route.name === site.name"
            class="mx-4 my-4 px-4 py-2 text-center"
            elevation="10"
            rounded="xl"
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
    import { ref } from 'vue';
    import { useRoute } from 'vue-router';

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
    ];
</script>
