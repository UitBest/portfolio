<template>
    <v-card
        :class="mobile && 'px-4 py-2'"
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
                    :height="mobile ? 'auto' : '500'"
                    :min-height="mobile ? '500' : '0'"
                    :width="mobile ? 'auto' : '500'"
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
                            :disabled="sending || (! subject || ! body)"
                            icon
                            variant="tonal"
                            @click="send"
                            @keyup.enter.exact="send"
                            @keyup.space.exact="send"
                        >
                            <v-icon :class="sending && 'sendAnimation'" icon="mdi-send"/>
                        </v-btn>
                    </v-sheet>
                </v-sheet>
                <v-sheet
                    v-if="! showEmail"
                    key="timo picture"
                    class="mx-auto d-flex justify-center align-baseline"
                    :height="mobile ? 'auto' : '500'"
                    :min-height="mobile ? '500' : '0'"
                    :width="mobile ? 'auto' : '500'"
                >
                    <v-img
                        key="timo picture"
                        class="rounded-lg"
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
    import { computed, nextTick, ref } from 'vue';
    import { useDisplay } from 'vuetify';

    const display = useDisplay();
    const mobile = computed(() => display.smAndDown.value);

    defineEmits(['close']);

    const sending = ref(false);

    const showEmail = ref(false);
    const name = ref(null);
    const subject = ref(null);
    const body = ref(null);

    const send = () => {
        sending.value = true;

        const href = `mailto:timo@uit.best?subject=${encodeURIComponent(subject.value)}&body=Beste Timo,%0D%0A%0D%0A${encodeURIComponent(body.value)}%0D%0A%0D%0AMet Vriendelijke groet,%0D%0A${encodeURIComponent(name.value)}`;

        setTimeout(() => {
            sending.value = false;
            name.value = null;
            subject.value = null;
            body.value = null;

            window.open(href, '_blank');
        }, 2000);
    };
</script>

<style scoped>
.sendAnimation {
    animation: sendAnimation 2s ease infinite;
}

@keyframes sendAnimation {
    0% { transform: translateX(0); }
    50% { transform: translateX(2000%); }
    51% { transform: rotate(180deg); }
    75% { transform: translateX(-200%); }
    100% { transform: translateX(0) rotate(0); }
}
</style>
