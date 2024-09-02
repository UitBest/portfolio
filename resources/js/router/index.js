import { createWebHistory, createRouter } from 'vue-router';

const routes = [
    {
        path: '',
        name: 'Layout',
        component: () => import('@/js/layouts/Layout.vue'),
        redirect: { name: 'Home' },
        children: [
            {
                path: 'home',
                name: 'Home',
                component: () => import('@/js/views/Home.vue'),
                meta: {
                    isRoot: true,
                },
            },
            {
                path: 'uit-best',
                name: 'Uit Best',
                component: () => import('@/js/views/UitBest.vue'),
                meta: {
                    isRoot: true,
                },
            },
            {
                path: 'websites',
                name: 'Websites',
                component: () => import('@/js/views/Websites.vue'),
                meta: {
                    isRoot: true,
                },
                children: [
                    {
                        path: 'dieder-it',
                        name: 'DiederIT',
                        component: parent,
                        meta: {
                            isRoot: false,
                            sidebar: {
                                icon: 'mdi-laptop',
                                name: 'Dieder.IT',
                                to: { name: 'DiederIT' },
                            },
                        },
                    },
                    {
                        path: 'appeldoorn-riooltechniek',
                        name: 'Appeldoorn Riooltechniek',
                        component: parent,
                        meta: {
                            isRoot: false,
                            sidebar: {
                                icon: 'mdi-toolbox',
                                name: 'Appeldoorn Riooltechniek',
                                to: { name: 'Appeldoorn Riooltechniek' },
                            },
                        },
                    },
                    {
                        path: '4torentjes',
                        name: '4 Torentjes',
                        component: parent,
                        meta: {
                            isRoot: false,
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
                        component: parent,
                        meta: {
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
                        component: parent,
                        meta: {
                            isRoot: false,
                            sidebar: {
                                icon: 'mdi-brush',
                                name: 'Beauty Education',
                                to: { name: 'Beauty Education' },
                            },
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
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth',
            };
        }
        return savedPosition || { top: 0 };
    },
});

export default router;
