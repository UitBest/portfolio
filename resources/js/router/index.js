import { createWebHistory, createRouter } from 'vue-router';
import { ref } from 'vue';

const routes = [
    {
        path: '',
        name: 'Layout',
        component: () => import('@/layouts/Layout.vue'),
        redirect: { name: 'Home' },
        meta: {
            mobile: ref(false),
        },
        children: [
            {
                path: 'home',
                name: 'Home',
                component: () => import('@/views/Home.vue'),
                meta: {
                    isRoot: true,
                },
            },
            {
                path: 'uit-best',
                name: 'Uit Best',
                component: () => import('@/views/UitBest.vue'),
                meta: {
                    isRoot: true,
                },
            },
            {
                path: 'websites',
                name: 'Websites',
                component: () => import('@/views/Websites.vue'),
                meta: {
                    isRoot: true,
                },
                children: [
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
                    {
                        path: 'majo-diensten',
                        name: 'MAJO Diensten',
                        component: parent,
                        meta: {
                            isRoot: false,
                            sidebar: {
                                icon: 'mdi-broom',
                                name: 'MAJO Diensten',
                                to: { name: 'MAJO Diensten' },
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
    scrollBehavior (to, from, savedPosition) {
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
