<template>
    <v-footer :color="darkColor ? 'dark' : 'white'">
        <v-container
            :class="mobile ? 'pa-4' : 'pa-10'"
            fluid
        >
            <v-row>
                <v-col
                    cols="12"
                    md="4"
                >
                    <v-btn
                        v-if="mobile"
                        :append-icon="darkColor ? 'mdi-lightbulb' : 'mdi-moon-waning-crescent'"
                        class="mt-8 mr-8"
                        :color="darkColor ? 'primary' : 'dark'"
                        location="top end"
                        position="absolute"
                        size="x-small"
                        :text="darkColor ? 'Verlicht' : 'Donker'"
                        variant="text"
                        @click="darkColor = !darkColor"
                    />
                    <v-sheet height="50">
                        <div
                            class="text-h6 text-center"
                            :class="darkColor ? 'text-white' : 'text-dark'"
                        >
                            Contactinformatie
                        </div>
                    </v-sheet>
                    <div
                        class="text-body-1 mt-4"
                        :class="mobile && 'text-center' + (darkColor ? ' text-primary' : ' text-dark')"
                    >
                        Uit Best
                    </div>
                    <v-divider class="mb-2 mt-1" />
                    <div class="text-body-2 d-flex justify-space-between">
                        <div>
                            Adres:<br />
                            Postcode:<br />
                            Plaats:<br />
                            KVK:<br />
                        </div>
                        <div class="text-end">
                            de Dieze 35<br />
                            5684 PR<br />
                            Best<br />
                            92576176<br />
                        </div>
                    </div>
                </v-col>
                <v-spacer />
                <v-divider
                    :class="mobile && 'mb-10'"
                    :vertical="!mobile"
                />
                <v-spacer />
                <v-col
                    cols="12"
                    md="4"
                >
                    <v-sheet
                        class="d-flex justify-center"
                        height="50"
                    >
                        <v-btn-group
                            :color="darkColor ? 'primary' : 'dark'"
                            divided
                            rounded="lg"
                        >
                            <v-btn
                                href="https://www.instagram.com/ik_ben_timo/"
                                icon="mdi-instagram"
                                target="_blank"
                                variant="tonal"
                            />
                            <v-btn
                                href="https://www.linkedin.com/in/timo-cuijpers-5781122b1/"
                                icon="mdi-linkedin"
                                target="_blank"
                                variant="tonal"
                            />
                            <v-btn
                                href="https://github.com/TimoCuijpers"
                                icon="mdi-github"
                                target="_blank"
                                variant="tonal"
                            />
                            <v-btn
                                href="tel:0624196843"
                                icon="mdi-phone"
                                target="_blank"
                                variant="tonal"
                            />
                        </v-btn-group>
                    </v-sheet>
                    <div
                        class="text-body-1 mt-4"
                        :class="mobile && 'text-center' + (darkColor ? ' text-primary' : ' text-dark')"
                    >
                        Timo Cuijpers
                    </div>
                    <v-divider class="mb-2 mt-1" />
                    <div class="text-body-2 d-flex justify-space-between">
                        <div>
                            Tel:<br />
                            E-mail:<br />
                        </div>
                        <div
                            class="text-end"
                            :class="darkColor ? 'text-white' : 'text-dark'"
                        >
                            +31 6 24 19 68 43<br />
                            <span
                                ><a
                                    class="text-decoration-none"
                                    :class="darkColor ? 'text-white' : 'text-dark'"
                                    href="mailto:timo@uit.best"
                                    >timo@uit.best</a
                                ></span
                            ><br />
                        </div>
                    </div>
                </v-col>
                <v-divider
                    :class="mobile && 'mb-10'"
                    :vertical="!mobile"
                />
                <v-col
                    cols="12"
                    md="4"
                >
                    <v-sheet height="50">
                        <div
                            class="text-h6 text-center"
                            :class="darkColor ? 'text-primary' : 'text-dark'"
                        >
                            Pagina's
                        </div>
                    </v-sheet>
                    <div
                        class="text-body-1 mt-4 d-flex justify-space-between"
                        :class="darkColor ? ' text-primary' : ' text-dark'"
                    >
                        <div>Portfolio</div>
                        <div>Websites</div>
                    </div>
                    <v-divider class="mb-2 mt-1" />
                    <div class="text-body-2 d-flex justify-space-between">
                        <div>
                            <a
                                :class="darkColor ? 'text-white' : 'text-dark'"
                                href="/home"
                                >Home</a
                            ><br />
                            <a
                                :class="darkColor ? 'text-white' : 'text-dark'"
                                href="/uit-best"
                                >Uit Best</a
                            ><br />
                            <a
                                :class="darkColor ? 'text-white' : 'text-dark'"
                                href="/websites"
                                >Websites</a
                            ><br />
                        </div>
                        <div class="text-end">
                            <a
                                :class="darkColor ? 'text-white' : 'text-dark'"
                                href="/websites/4torentjes"
                                >4 Torentjes</a
                            ><br />
                            <a
                                :class="darkColor ? 'text-white' : 'text-dark'"
                                href="/websites/beauty-education"
                                >Beauty Education</a
                            ><br />
                            <a
                                :class="darkColor ? 'text-white' : 'text-dark'"
                                href="/websites/madje-diensten"
                                >Madje Diensten</a
                            ><br />
                        </div>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </v-footer>
</template>

<script setup>
    import { computed, ref } from 'vue';
    import { useDisplay } from 'vuetify';

    const darkColor = ref(true);

    const display = useDisplay();
    const mobile = computed(() => display.smAndDown.value);
</script>
