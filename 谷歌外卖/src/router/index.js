import Vue from 'vue'
import VueRouter from 'vue-router'
import Msite from '../views/Msite/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/msite'
  },{
	  path: '/msite',
	  name: 'Msite',
	  component: Msite,
	  meta: {
	          showFooter: true
	        }
	  
  },{
    path: '/order',
    name: 'order',
    component: () => import(/* webpackChunkName: "about" */ '../views/Order/index.vue'),
	meta: {
	        showFooter: true
	      }
  },{
	  path: '/search',
	  name: 'search',
	  component: () => import(/* webpackChunkName: "about" */ '../views/Search/index.vue'),
	  meta: {
	          showFooter: true
	        }
  },{
	  path: '/profile',
	  name: 'profile',
	  component: () => import(/* webpackChunkName: "about" */ '../views/Profile/index.vue'),
	  meta: {
	          showFooter: true
	        }
  },{
	  path: '/login',
	  name: 'login',
	  component: () => import(/* webpackChunkName: "about" */ '../views/Login/index.vue')
  },{
	  path: '/shop',
	  redirect:'/shop/goods',
	  component: () => import('../views/Shop/index.vue'),
	  children: [
		  {
			  path: '/shop/goods',
			  component: () => import('../views/Shop/ShopGoods/index.vue')
		  },{
			  path: '/shop/info',
			  component: () => import('../views/Shop/ShopInfo/index.vue')
		  },{
			  path: '/shop/ratings',
			  component: () => import('../views/Shop/ShopRating/index.vue')
		  }
	  ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
