import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '../views/Inicio.vue'
import Vecinos from '../views/Vecinos.vue'
import Mapa from '../views/Mapa.vue'

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio
  },
  {
    path: '/vecinos',
    name: 'Vecinos',
    component: Vecinos
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
