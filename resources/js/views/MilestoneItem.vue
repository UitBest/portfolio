<template>
    <v-card
        class="mx-auto"
        color="transparent"
        elevation="20"
        max-width="500"
        style="backdrop-filter: blur(20px)"
        :subtitle="milestone.period"
        :title="milestone.title"
    >
        <v-card-text>
            <div class="font-weight-black text-h6 text-primary">
                {{ milestone.function }}
            </div>

            <v-lazy v-if="milestone.expansionPanels?.length > 0">
                <v-expansion-panels
                    v-model="activePanels"
                    bg-color="transparent"
                    color="transparent"
                >
                    <v-expansion-panel
                        v-for="(item, descriptionKey) in milestone.expansionPanels"
                        :key="descriptionKey"
                        bg-color="transparent"
                        class="newsSelection"
                        collapse-icon="mdi-minus"
                        color="background"
                        eager
                        elevation="0"
                        rounded="lg"
                    >
                        <v-expansion-panel-title>
                            <v-card
                                class="d-flex align-center"
                                color="transparent"
                                density="compact"
                                variant="flat"
                            >
                                <v-avatar
                                    class="mr-4 text-white"
                                    :icon="item.icon"
                                />
                                <v-card-title class="pa-0 mt-1">
                                    {{ item.title }}
                                </v-card-title>
                            </v-card>
                        </v-expansion-panel-title>
                        <v-expansion-panel-text></v-expansion-panel-text>
                    </v-expansion-panel>
                </v-expansion-panels>
            </v-lazy>

            <v-lazy v-else-if="milestone.description?.length > 0">
                <v-list>
                    <v-list-item
                        v-for="(description, descriptionKey) in milestone.description"
                        :key="descriptionKey"
                        color="transparent"
                        variant="text"
                    >
                        - {{ description }}
                    </v-list-item>
                </v-list>
            </v-lazy>

            <v-menu
                v-else-if="milestone.iframe"
                eager
                origin="auto"
                width="100%"
            >
                <template #activator="{ props }">
                    <v-img
                        v-bind="props"
                        aspect-ratio="1.60"
                        class="cursor-pointer"
                        cover
                        :eager="true"
                        lazy-src="/img/UitBest.png"
                        rounded="lg"
                        :src="milestone.iframe.image"
                    />

                    <v-card-title class="text-wrap">
                        {{ milestone.iframe.title }}
                    </v-card-title>
                    <v-divider />

                    <v-card-text>
                        {{ milestone.iframe.subtitle }}
                    </v-card-text>
                </template>

                <v-card
                    class="text-decoration-underline"
                    color="background"
                    density="compact"
                    :href="milestone.iframe.link"
                    :text="milestone.iframe.link"
                    variant="flat"
                />
            </v-menu>
        </v-card-text>
    </v-card>
</template>

<script setup>
    defineProps({
        milestone: Object,
    });
</script>

<style>

@keyframes sendAnimation {
  0% {
    transform: translateY(0);
  }
  30% {
    transform: translateY(0);
  }
  35% {
    transform: translateY(200%);
  }
  40% {
    transform: translateY(0);
  }
  45% {
    transform: translateY(200%);
  }
  50% {
    transform: translateY(0);
  }
  70% {
    transform: translateY(0);
  }
  75% {
    transform: translateY(0) scale(200%);
  }
  80% {
    transform: translateY(300%) scale(200%);
  }
  85% {
    transform: translateY(0) scale(200%);
  }
  90% {
    transform: translateY(300%) scale(200%);
  }
  95% {
    transform: translateY(0) scale(200%);
  }
  100% {
    transform: translateY(0);
  }
}

</style>
