import { createRouter, createWebHistory } from 'vue-router';

import Index from './pages/Index.vue';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Index,
		meta: {
			title: 'Photo Culling Online | Home',
		},
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
