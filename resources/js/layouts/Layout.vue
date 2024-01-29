<template>
    <v-app>
        <v-navigation-drawer
            :class="pinned && ! mobile ? '' : 'rounded-lg ma-2'"
            :color="pinned && ! mobile ? 'dark' : 'background'"
            elevation="20"
            :expand-on-hover="! mobile"
            permanent
            :rail="! pinned"
            :sticky="! pinned || mobile"
        >
            <v-list>
                <v-list-item
                    subtitle="timo@uit.best"
                    title="Timo Cuijpers"
                >
                    <template v-slot:prepend>
                        <v-avatar
                            v-if="mobile && ! pinned"
                            class="text-white cursor-pointer"
                            icon="mdi-menu"
                            size="small"
                            @click="pinned = true"
                        />
                        <v-avatar
                            v-else
                            class="cursor-pointer"
                            image="/img/Timo.jpeg"
                            @click="showProfileOverlay = true"
                        />
                    </template>
                    <template v-slot:append>
                        <v-btn
                            class="align-self-end"
                            color="white"
                            :icon="mobile ? 'mdi-close' : (pinned ? 'mdi-pin' : 'mdi-pin-outline') + ' mdi-rotate-45'"
                            size="36"
                            variant="text"
                            @click="mobile ? pinned = false : pinned = ! pinned"
                        />
                    </template>
                </v-list-item>
            </v-list>

            <v-divider v-show="pinned || ! mobile" />

            <v-expand-transition>
                <v-list v-show="pinned || ! mobile" density="compact" nav>
                    <v-list-item
                        v-for="(item, key) in defaultRoutes"
                        :key="key"
                        :prepend-icon="item.icon"
                        :title="item.name"
                        :to="item.to"
                    />
                    <v-list-group fluid>
                        <template v-slot:activator="{ props, isOpen }">
                            <v-list-item
                                :active="route.path === '/websites' || isOpen"
                                density="compact"
                                prepend-icon="mdi-web"
                                title="Websites"
                                :to="{ name: 'Websites' }"
                            >
                                <template v-slot:append>
                                    <v-btn
                                        v-bind="props"
                                        color="white"
                                        density="comfortable"
                                        :icon="isOpen ? 'mdi-minus' : 'mdi-chevron-down'"
                                        size="small"
                                        variant="tonal"
                                        @click.stop.prevent
                                    />
                                </template>
                            </v-list-item>
                        </template>
                        <v-list-item
                            v-for="(item, key) in websites"
                            :key="key"
                            :prepend-icon="item.icon"
                            :title="item.name"
                            :to="item.to"
                            :value="item.name"
                        />
                    </v-list-group>
                </v-list>
            </v-expand-transition>
        </v-navigation-drawer>

        <v-main :class="pinned && ! mobile ? '' : 'px-0'" style="min-height: 100svh;">
            <router-view />

            <v-footer color="dark">
                <Footer />
            </v-footer>
        </v-main>

        <v-overlay
            v-model="showProfileOverlay"
            class="d-flex justify-center align-center"
            eager
        >
            <ProfileOverlay @close="() => { showProfileOverlay = false }" />
        </v-overlay>
    </v-app>
</template>

<script setup>
    import Footer from './Footer.vue';

    import { useRoute, useRouter } from 'vue-router';
    import { computed, onMounted, ref, watch } from 'vue';
    import ProfileOverlay from './Layout/ProfileOverlay.vue';
    import { useDisplay } from 'vuetify';

    const display = useDisplay();
    const mobile = computed(() => display.smAndDown.value);

    const route = useRoute();
    const router = useRouter();

    const pinned = ref(true);

    const showWebsites = ref(false);
    const websites = ref([]);

    const showProfileOverlay = ref(false);

    const defaultRoutes = [
        {
            icon: 'mdi-home',
            name: 'Home',
            to: '/home',
        },
        {
            icon: 'mdi-office-building',
            name: 'Uit Best',
            to: '/uit-best',
        },
    ];

    watch(route, (newRoute) => {
        if (newRoute.path === '/websites') {
            showWebsites.value = true;
        }
    }, { immediate: true });

    watch(mobile, (value) => { pinned.value = ! value; });

    onMounted(() => {
        const websitesRoute = _.find(router.options.routes[0].children, (route) => route.name === 'Websites');

        websitesRoute.children.forEach((website) => {
            if (website.meta?.sidebar) {
                websites.value.push(website.meta.sidebar);
            }
        });
    });
</script>
