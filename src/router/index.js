import { createRouter, createWebHistory } from "vue-router";

import ViewProduct from '../components/ViewProduct.vue'
import AddProduct from '../components/AddProduct.vue'
import test from '../components/store.vue'



const routes = [
    {
        path: '/',
        name: 'ViewProduct',
        component: ViewProduct,
    },
    {
        path: '/addproduct',
        name: 'AddProduct',
        component: AddProduct
    },
    {
        path: '/test',
        name: 'test',
        component: test
    }
];

const router =  createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})


export default router