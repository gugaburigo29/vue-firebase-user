import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MostrarProdutos from '@/components/Produtos/mostrarProdutos'
import CadastrarProduto from '@/components/Produtos/cadastrar'
import Produto from '@/components/Produtos/selecionado'
import Login from '@/components/Users/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/produtos',
      name: 'MostrarProdutos',
      component: MostrarProdutos
    },
    {
      path: '/cadastrar-produto',
      name: 'CadastrarProduto',
      component: CadastrarProduto
    },
    {
      path: '/produto/:id',
      name: 'Produto',
      component: Produto
    }
  ],
  mode: 'history'
})
