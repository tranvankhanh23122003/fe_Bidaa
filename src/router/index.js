import { createRouter, createWebHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save

const routes = [
    {
        path : '/',
        component: ()=>import('../components/banBiDa.vue')
    },
    {
        path : '/phong-bida',
        component: ()=>import('../components/phongBiDa.vue')
    },
    {
        path : '/lich-lam',
        component: ()=>import('../components/LichLam.vue')
    },
    {
        path : '/kho-hang',
        component: ()=>import('../components/LichLam.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router