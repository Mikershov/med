import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/doctors',
    name: 'Doctors',
    component: () => import('../views/DoctorsList.vue')
  },
  {
    path: '/doctor-view',
    name: 'DoctorView',
    props: true,
    component: () => import('../views/DoctorView.vue')
  },
  {
    path: '/doctor-add',
    name: 'DoctorsAdd',
    component: () => import('../views/DoctorAdd.vue')
  },
  {
    path: '/doctor-edit',
    name: 'DoctorEdit',
    props: true,
    component: () => import('../views/DoctorEdit.vue')
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

//auth check
router.beforeEach((to, from, next) => {
  if(to.name !== "Login" && !localStorage.getItem("user")) {
    next({name:"Login"});
  }

  next();
});

export default router
