<template>
    <v-card
        color="background"
        :height="mobile ? '100svh' : 'auto'"
        rounded="lg"
        :subtitle="showEmail ? 'timo@uit.best' : 'Software Developer'"
        :title="showEmail ? 'E-mail samenstellen' :  'Timo Cuijpers'"
        :width="mobile ? '100svw' : 'auto'"
    >
        <template v-slot:append>
            <v-btn
                color="white"
                density="compact"
                icon="mdi-close"
                size="x-large"
                variant="text"
                @click="$emit('close')"
            />
        </template>
        <v-card-text class="pb-0">
            <v-scroll-x-reverse-transition group hide-on-leave>
                <v-sheet
                    v-show="showEmail"
                    key="email form"
                    class="mx-auto"
                    height="500"
                    width="500"
                >
                    <v-tooltip class="text-center" location="top center">
                        <template v-slot:activator="{ props }">
                            <v-text-field
                                v-bind="props"
                                v-model="name"
                                label="Uw naam"
                                variant="outlined"
                            />
                        </template>
                        <div>
                            <v-icon color="primary" icon="mdi-information" /><br>
                            U wordt bij verzending doorgestuurd naar uw e-mail applicatie.<br>
                            Deze e-mail wordt automatisch met een aanhef en groet gegenereerd.
                        </div>
                    </v-tooltip>
                    <v-text-field
                        v-model="subject"
                        label="Onderwerp *"
                        variant="outlined"
                    />
                    <v-textarea
                        v-model="body"
                        label="Omschrijving *"
                        rows="4"
                        variant="outlined"
                    />

                    <v-sheet class="d-flex justify-end">
                        <v-btn
                            :disabled="! subject || ! body"
                            icon
                            variant="tonal"
                            @click="send($event)"
                            @keyup.enter.exact="send($event)"
                            @keyup.space.exact="send($event)"
                        >
                            <v-icon icon="mdi-send" />
                        </v-btn>
                    </v-sheet>
                </v-sheet>
                <v-sheet
                    v-show="! showEmail"
                    key="timo picture"
                    class="mx-auto"
                    height="500"
                    width="500"
                >
                    <v-img
                        class="rounded-lg mx-auto"
                        src="/img/Timo.jpeg"
                    />
                </v-sheet>
            </v-scroll-x-reverse-transition>
        </v-card-text>
        <v-card-actions class="pa-4 justify-end align-end align-self-end">
            <v-btn color="white" href="tel:0624196843" icon="mdi-phone" />
            <v-btn
                :active="showEmail"
                color="white"
                icon="mdi-email"
                @click="showEmail = ! showEmail"
            />
        </v-card-actions>
    </v-card>
</template>

<script setup>
    import { computed, ref } from 'vue';
    import { useDisplay } from 'vuetify';

    const display = useDisplay();
    const mobile = computed(() => display.smAndDown.value);

    defineEmits(['close']);

    const showEmail = ref(false);
    const name = ref(null);
    const subject = ref(null);
    const body = ref(null);

    const send = (event) => {
        const sendIcon = event.target;
        sendIcon.classList.add('animated');

        const href = `mailto:timo@uit.best?subject=${encodeURIComponent(subject.value)}&body=Beste Timo,%0D%0A%0D%0A${encodeURIComponent(body.value)}%0D%0A%0D%0AMet Vriendelijke groet,%0D%0A${encodeURIComponent(name.value)}`;

        name.value = null;
        subject.value = null;
        body.value = null;

        setTimeout(() => {
            sendIcon.classList.remove('animated');

            window.location.href = href;
        }, 2000);
    };
</script>

<style scoped>
.animated {
    animation: buttonClickAnimation 2s ease;
}

@keyframes buttonClickAnimation {
    0% { transform: translateX(0); }
    50% { transform: translateX(2000%); }
    75% { transform: translateX(-200%); }
    100% { transform: translateX(0); }
}
</style>
