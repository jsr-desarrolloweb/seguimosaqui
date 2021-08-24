import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '../views/Inicio.vue'
import Mapa from '../views/Mapa.vue'

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio
  },
  {
    path: '/mapa',
    name: 'Mapa',
    component: Mapa
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
