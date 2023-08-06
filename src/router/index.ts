import { createRouter, createWebHashHistory } from 'vue-router'

import Index from '@/views/Index.vue'
import ProductItem from '@/views/ProductItem.vue'
import CartItem from '@/views/CartItem.vue'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Index
	},
	{
		path: '/products/:id',
		name: 'ProductItem',
		component: ProductItem
	},
	{
		path: '/cart',
		name: 'CartItem',
		component: CartItem
	}
]

const router = createRouter({
	history: createWebHashHistory(),
	routes
})
export default router
