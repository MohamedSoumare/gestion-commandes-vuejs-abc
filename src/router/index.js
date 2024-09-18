import { createRouter, createWebHistory } from 'vue-router'
import CustomersView from '../views/CustomersView.vue'
import ProductsView from '../views/ProductsView.vue'
import OrdersView from '../views/OrdersView.vue'

const routes = [
  { path: '/', component: CustomersView },
  { path: '/customers', component: CustomersView },
  { path: '/products', component: ProductsView },
  { path: '/orders', component: OrdersView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router