<template>
    <v-app>
        <v-navigation-drawer
            v-model="drawer"
            close-delay="300"
            color="dark"
            expand-on-hover
            :location="mobile ? 'top' : 'left'"
            :permanent="!mobile"
            :rail="!pinned && !mobile"
            :temporary="mobile"
        >
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
                slim
            >
                <v-list-item
                    v-for="(item, key) in defaultRoutes"
                    :key="key"
                    :prepend-icon="item.icon"
                    :title="item.name"
                    :to="item.to"
                />

                <v-divider />

                <v-list-subheader class="w-100 d-flex justify-center font-weight-bold"> Websites </v-list-subheader>

                <v-divider />

                <v-list-item
                    v-for="(item, key) in websites"
                    :key="key"
                    :prepend-icon="item.icon"
                    :title="item.name"
                    :to="item.to"
                    :value="item.name"
                />
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
    import { find } from 'lodash';

    const profileAvatar = computed(() => '/img/Timo.jpeg');

    const display = useDisplay();
    const mobile = computed(() => display.smAndDown.value);

    const route = useRoute();
    const router = useRouter();

    const pinned = ref(!mobile.value);
    const isOpened = ref(true);

    const showWebsites = ref(false);
    const websites = ref([]);

    const showProfileOverlay = ref(false);

    const darkColor = ref(true);

    const drawer = ref(false);

    const defaultRoutes = [
        {
            icon: 'mdi-home',
            name: 'Home',
            to: { name: 'Home' },
        },
        {
            icon: 'mdi-office-building',
            name: 'Uit Best',
            to: { name: 'Uit Best' },
        },
        {
            icon: 'mdi-web',
            name: 'Website overzicht',
            to: { name: 'Websites' },
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

    watch(isOpened, (val) => {
        console.log(val);
    });

    onMounted(() => {
        const websitesRoute = find(router.options.routes[0].children, (route) => route.name === 'Websites');

        websitesRoute.children.forEach((website) => {
            if (website.meta?.sidebar) {
                websites.value.push(website.meta.sidebar);
            }
        });
    });
</script>
