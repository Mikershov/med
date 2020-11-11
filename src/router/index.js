import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
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
  {
    path: "*",
    component: () => import('../views/Page404.vue'),
  },
];


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});


//проверки доступа
router.beforeEach((to, from, next) => {
  let user = JSON.parse(localStorage.getItem("user"));

  if(to.name !== "Login" && !user) {
    next({name:"Login"});
  }

  //все по юзерам
  if((to.name === "Doctors" || to.name === "DoctorView" || to.name === "DoctorEdit" || to.name === "DoctorsAdd") && user.info.Admin !== 1) {
    next({name:"Home"});
  }

  next();
});

export default router
