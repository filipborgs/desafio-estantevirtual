import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')

  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/enderecos',
    name: 'enderecos',
    component: () => import(/* webpackChunkName: "enderecosview" */ '../views/EnderecoView.vue')
  },
  {
    path: '/endereco/cadastrar',
    name: 'cadastrar_endereco',
    component: () => import(/* webpackChunkName: "enderecoformview" */ '../views/EnderecoFormView.vue')
  },
  {
    path: '/endereco/editar/:pos',
    name: 'editar_endereco',
    component: () => import(/* webpackChunkName: "enderecoformview" */ '../views/EnderecoFormView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
