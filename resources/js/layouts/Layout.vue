<template>
    <v-app>
        <v-card>
            <v-layout>
                <v-navigation-drawer
                    color="black"
                    expand-on-hover
                    :rail="showRail"
                >
                    <v-list>
                        <v-list-item
                            prepend-avatar="img/UitBestLogo.png"
                            subtitle="timo@uit.best"
                            title="Timo Cuijpers"
                        />
                    </v-list>

                    <v-divider></v-divider>

                    <v-list density="compact" nav>
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
                </v-navigation-drawer>

                <v-main style="min-height: 100svh">
                    <router-view />
                </v-main>
            </v-layout>
        </v-card>
    </v-app>
</template>

<script setup>
    import { useRoute, useRouter } from 'vue-router';
    import { onMounted, ref, watch } from 'vue';

    const route = useRoute();
    const router = useRouter();

    const showRail = ref(false);

    const showWebsites = ref(false);
    const websites = ref([]);

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
    });

    onMounted(() => {
        const websitesRoute = _.find(router.options.routes[0].children, (route) => route.name === 'Websites');

        websitesRoute.children.forEach((website) => {
            if (website.meta?.sidebar) {
                websites.value.push(website.meta.sidebar);
            }
        });
    });
</script>
