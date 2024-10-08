<template>
    <v-sheet
        class="justify-center d-flex flex-column"
        :class="mobile ? 'px-4 py-10' : 'pa-10'"
        color="dark"
        width="100%"
    >
        <v-btn
            class="mx-auto"
            icon="mdi-trophy-outline"
            variant="tonal"
        />

        <v-lazy
            class="d-flex justify-lg-space-evenly justify-center"
            :class="mobile && 'flex-column'"
        >
            <v-card
                class="mt-4 w-100"
                color="transparent"
                max-width="800"
            >
                <template #title>
                    <div class="text-primary text-center">PRO'S</div>
                </template>
                <v-card-text>
                    <v-expansion-panels
                        class="my-4 rounded-lg"
                        color="background"
                    >
                        <v-expansion-panel
                            v-for="(quality, key) in qualities"
                            :key="key"
                            bg-color="background"
                            collapse-icon="mdi-minus"
                            color="background"
                            rounded="lg"
                            title="Klantinteractie"
                        >
                            <template #title>
                                <v-card
                                    class="d-flex align-center"
                                    color="transparent"
                                    density="compact"
                                    variant="flat"
                                >
                                    <v-avatar
                                        class="mr-4 text-white"
                                        :icon="quality.icon"
                                    />
                                    <v-card-title class="pa-0 mt-1">
                                        {{ quality.title }}
                                    </v-card-title>
                                </v-card>
                            </template>
                            <template #text>
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
        </v-lazy>
    </v-sheet>
</template>

<script setup>
    import { computed } from 'vue';
    import { useDisplay } from 'vuetify';

    const display = useDisplay();

    const mobile = computed(() => display.smAndDown.value);

    defineProps({
        qualities: Array,
    });
</script>
