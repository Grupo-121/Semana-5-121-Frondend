import Vue from 'vue'
import VueRouter from 'vue-router'
import swal from 'sweetalert';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Pagina',
    component: () => import(/* webpackChunkName: "pagina" */ '../views/Pagina.vue') 
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
    meta: {
      
    }
  },
  {
    path: '/home',
    name: 'Home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/ajustes',
    name: 'Ajustes',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "home" */ '../views/Ajustes.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/juegos',
    name: 'Juegos',
    component: () => import(/* webpackChunkName: "Juegos" */ '../views/Juegos.vue')
  },
  {
    path: '/greenpiece',
    name: 'GreenPiece',
    component: () => import(/* webpackChunkName: "GreenPiece" */ '../views/Greenpiece.vue')
  },
  {
    path: '/categorias',
    name: 'Categoria',
    component: () => import(/* webpackChunkName: "Categorias" */ '../views/Categoria.vue')
  },
  {
    path: '/articulos',
    name: 'Articulo',
    component: () => import(/* webpackChunkName: "Articulos" */ '../views/Articulo.vue')
  },
  {
    path: '/usuario',
    name: 'Usuario',
    component: () => import(/* webpackChunkName: "Usuario" */ '../views/Usuario.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.beforeEach((to, from, next) =>{
  if(to.matched.some(record => record.meta.requiresAuth)){
    if(localStorage.getItem('jwt')===null){
      swal("Nos has iniciado sesion!", "Por favor, ingresa tus datos!", "error");
      next({path:'/'})
    }else{
      next();
    }
  }else{
    next();
  }
})


export default router
