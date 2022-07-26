import { createRouter, createWebHistory } from "vue-router";

import ViewProduct from '../components/ViewProduct.vue'
import AddProduct from '../components/AddProduct.vue'



const routes = [
    {
        path: '/',
        name: 'ViewProduct',
        component: ViewProduct,
    },
    {
        path: '/add',
        name: 'AddProduct',
        component: AddProduct
    }
];

const router =  createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})


export default router