import { createWebHistory, createRouter } from 'vue-router';
import { ref } from 'vue';

const Layout = () => import('@/js/layouts/Layout.vue');
const Home = () => import('@/js/views/Home.vue');
const UitBest = () => import('@/js/views/UitBest.vue');
const Websites = () => import('@/js/views/Websites.vue');

const routes = [
    {
        path: '',
        name: 'Layout',
        component: Layout,
        redirect: { name: 'Home' },
        children: [
            {
                path: 'home',
                name: 'Home',
                component: Home,
                meta: {
                    isRoot: true,
                    title: 'Home',
                },
            },
            {
                path: 'uit-best',
                name: 'Uit Best',
                component: UitBest,
                meta: {
                    isRoot: true,
                    title: 'Uit Best',
                },
            },
            {
                path: 'websites',
                name: 'Websites',
                component: Websites,
                meta: {
                    isRoot: true,
                    title: 'Websites',
                },
                children: [
                    {
                        path: 'appeldoorn-riooltechniek',
                        name: 'Appeldoorn Riooltechniek',
                        component: Websites,
                        meta: {
                            isRoot: false,
                            title: 'Appeldoorn Riooltechniek',
                            url: 'https://appeldoornriooltechniek.nl/',
                            sidebar: {
                                icon: 'mdi-toolbox',
                                name: 'Appeldoorn Riooltechniek',
                                to: { name: 'Appeldoorn Riooltechniek' },
                            },
                        },
                    },
                    {
                        path: 'dieder-it',
                        name: 'DiederIT',
                        component: Websites,
                        meta: {
                            isRoot: false,
                            title: 'Dieder.IT',
                            sidebar: {
                                icon: 'mdi-laptop',
                                name: 'Dieder.IT',
                                to: { name: 'DiederIT' },
                            },
                        },
                    },
                    {
                        path: '4torentjes',
                        name: '4 Torentjes',
                        component: Websites,
                        meta: {
                            isRoot: false,
                            title: '4 Torentjes',
                            sidebar: {
                                icon: 'mdi-weather-sunny',
                                name: '4 Torentjes',
                                to: { name: '4 Torentjes' },
                            },
                        },
                    },
                    {
                        path: 'madje-diensten',
                        name: 'Madje Diensten',
                        component: Websites,
                        meta: {
                            title: 'Madje Diensten',
                            isRoot: false,
                            sidebar: {
                                icon: 'mdi-broom',
                                name: 'Madje Diensten',
                                to: { name: 'Madje Diensten' },
                            },
                        },
                    },
                    {
                        path: 'beauty-education',
                        name: 'Beauty Education',
                        component: Websites,
                        meta: {
                            title: 'Beauty Education',
                            isRoot: false,
                            sidebar: {
                                icon: 'mdi-brush',
                                name: 'Beauty Education',
                                to: { name: 'Beauty Education' },
                            },
                        },
                    },

                    // Archive

                    {
                        path: 'dieder-it-archive',
                        name: 'DiederIT - Archief',
                        component: Websites,
                        meta: {
                            isRoot: false,
                            title: 'Dieder.IT - Archief',
                        },
                    },
                    {
                        path: 'appeldoorn-riooltechniek-archive',
                        name: 'Appeldoorn Riooltechniek - Archief',
                        component: Websites,
                        meta: {
                            isRoot: false,
                            title: 'Appeldoorn Riooltechniek - Archief',
                        },
                    },
                ],
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
