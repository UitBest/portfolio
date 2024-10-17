<template>
    <v-card
        class="mx-auto"
        color="transparent"
        elevation="20"
        :href="milestone?.link"
        max-width="500"
        style="backdrop-filter: blur(20px)"
        :subtitle="milestone.period"
        :title="milestone.title"
        :to="milestone?.to"
        variant="elevated"
    >
        <v-card-text>
            <v-img
                aspect-ratio="1.60"
                class="cursor-pointer"
                cover
                :eager="true"
                lazy-src="/img/UitBest.png"
                rounded="lg"
                :src="milestone.image"
            />
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
