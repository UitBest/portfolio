<template>
    <v-card
        class="mx-auto"
        color="transparent"
        elevation="20"
        max-width="500"
        style="backdrop-filter: blur(20px)"
        :subtitle="job.period"
        :title="job.company"
    >
        <v-card-text>
            <h3 class="font-weight-black text-h5 text-primary">
                {{ job.function }}
            </h3>
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
</template>

<script setup>
    defineProps({
        job: Object,
    });
</script>
