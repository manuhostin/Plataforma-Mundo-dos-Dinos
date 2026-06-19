import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CatalogoView from '../views/CatalogoView.vue'
import MapaView from '../views/MapaView.vue'
import QuizView from '../views/QuizView.vue'
import SobreView from '../views/SobreView.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/catalogo',
    name: 'Catalogo',
    component: CatalogoView,
  },
  {
    path: '/mapa',
    name: 'Mapa',
    component: MapaView,
  },
  {
    path: '/quiz',
    name: 'Quiz',
    component: QuizView,
  },
  {
    path: '/sobre',
    name: 'Sobre',
    component: SobreView,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
