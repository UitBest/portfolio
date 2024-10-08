<template>
    <v-app>
        <v-navigation-drawer
            v-model="drawer"
            close-delay="300"
            color="dark"
            expand-on-hover
            :permanent="!mobile"
            :rail="!pinned && !mobile"
            :temporary="mobile"
        >
            <!--                    <v-navigation-drawer-->
            <!--                        :class="pinned && !mobile ? '' : 'rounded-lg ma-2'"-->
            <!--                        :color="mobile ? 'black' : 'transparent'"-->
            <!--                        :expand-on-hover="!mobile"-->
            <!--                        :floating="mobile"-->
            <!--                        :permanent="!mobile"-->
            <!--                        :rail="!pinned"-->
            <!--                        :sticky="!pinned || mobile"-->
            <!--                        :temporary="mobile"-->
            <!--                    >-->
            <v-list
                bg-color="dark"
                rounded="lg"
            >
                <v-list-item
                    subtitle="timo@uit.best"
                    title="Timo Cuijpers"
                >
                    <template #prepend>
                        <v-avatar
                            class="cursor-pointer"
                            :image="profileAvatar"
                            @click="showProfileOverlay = true"
                        />
                    </template>
                    <template
                        v-if="!mobile"
                        #append
                    >
                        <v-btn
                            class="align-self-end"
                            color="white"
                            :icon="(pinned ? 'mdi-pin' : 'mdi-pin-outline') + ' mdi-rotate-45'"
                            size="36"
                            variant="text"
                            @click="mobile ? (pinned = false) : (pinned = !pinned)"
                        />
                    </template>
                </v-list-item>
            </v-list>

            <v-divider
                v-show="pinned || !mobile"
                color="dark"
            />

            <v-list
                bg-color="dark"
                density="compact"
                nav
                rounded="lg"
            >
                <v-list-item
                    v-for="(item, key) in defaultRoutes"
                    :key="key"
                    :prepend-icon="item.icon"
                    :title="item.name"
                    :to="item.to"
                />
                <v-list-group fluid>
                    <template #activator="{ props, isOpen }">
                        <v-list-item
                            :active="route.path === '/websites' || route.name === 'Websites' || isOpen"
                            density="compact"
                            prepend-icon="mdi-web"
                            title="Websites"
                            :to="{ name: 'Websites' }"
                        >
                            <template #append>
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
        </v-navigation-drawer>

        <v-app-bar
            v-if="mobile"
            color="dark"
            density="compact"
            scroll-behavior="collapse"
        >
            <v-btn
                v-model="drawer"
                block
                :icon="drawer ? 'mdi-close' : 'mdi-menu'"
                @click="drawer = !drawer"
            />
        </v-app-bar>

        <v-main>
            <router-view v-slot="{ Component }">
                <v-fade-transition mode="out-in">
                    <KeepAlive>
                        <component :is="Component" />
                    </KeepAlive>
                </v-fade-transition>
            </router-view>

            <v-footer :color="darkColor ? 'dark' : 'white'">
                <Footer v-model:dark-color="darkColor" />
            </v-footer>
        </v-main>

        <v-overlay
            v-model="showProfileOverlay"
            class="d-flex justify-center align-center"
            eager
        >
            <ProfileOverlay @close="showProfileOverlay = false" />
        </v-overlay>
    </v-app>
</template>

<script setup>
    import Footer from './Footer.vue';

    import { useRoute, useRouter } from 'vue-router';
    import { computed, onMounted, ref, watch } from 'vue';
    import ProfileOverlay from './Layout/ProfileOverlay.vue';
    import { useDisplay } from 'vuetify';

    const profileAvatar = computed(() => '/img/Timo.jpeg');

    const display = useDisplay();
    const mobile = computed(() => display.smAndDown.value);

    const route = useRoute();
    const router = useRouter();

    const pinned = ref(!mobile.value);

    const showWebsites = ref(false);
    const websites = ref([]);

    const showProfileOverlay = ref(false);

    const darkColor = ref(true);

    const drawer = ref(false);

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

    watch(
        route,
        (newRoute) => {
            if (newRoute.path === '/websites') {
                showWebsites.value = true;
            }
        },
        { immediate: true }
    );

    watch(
        mobile,
        (value) => {
            drawer.value = !value;
        },
        { immediate: true }
    );

    onMounted(() => {
        const websitesRoute = _.find(router.options.routes[0].children, (route) => route.name === 'Websites');

        websitesRoute.children.forEach((website) => {
            if (website.meta?.sidebar) {
                websites.value.push(website.meta.sidebar);
            }
        });
    });
</script>
