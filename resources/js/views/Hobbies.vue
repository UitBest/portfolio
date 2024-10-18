<template>
    <v-card
        color="transparent"
        elevation="24"
        height="100%"
        style="backdrop-filter: blur(20px)"
    >
        <v-card-title class="text-primary"> Hobby's</v-card-title>
        <v-card-text>
            <div class="text-caption text-primary">GITAAR</div>
            <span>
                Tijdens de stage bij "WEAP" ontstond de gelegenheid om een gitaar te lenen. Dit leidde tot een groeiende
                interesse in het spelen van simpele akoestische nummers.
            </span>
            <br />
            <br />

            <div class="text-caption text-primary">BASKETBAL</div>
            <span>
                Basketbal, gestart in 2016, is uitgegroeid tot een belangrijke activiteit, met BCO Oirschot als de
                gekozen club voor training en wedstrijden. Deze sport biedt niet alleen een manier om fysiek actief te
                zijn, maar ook een platform voor persoonlijke ontwikkeling.
            </span>
        </v-card-text>
    </v-card>
</template>

<script setup>
    import { useDisplay } from 'vuetify';
    import { computed } from 'vue';

    const display = useDisplay();
    const mobile = computed(() => display.smAndDown.value);
</script>
