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

  //врачи
  {
    path: '/doctors',
    name: 'Doctors',
    component: () => import('../views/Doctors/DoctorsList.vue')
  },
  {
    path: '/doctor-view',
    name: 'DoctorView',
    props: true,
    component: () => import('../views/Doctors/DoctorView.vue')
  },
  {
    path: '/doctor-add',
    name: 'DoctorsAdd',
    component: () => import('../views/Doctors/DoctorAdd.vue')
  },
  {
    path: '/doctor-edit',
    name: 'DoctorEdit',
    props: true,
    component: () => import('../views/Doctors/DoctorEdit.vue')
  },

  //пациенты
  {
    path: '/patients',
    name: 'Patients',
    component: () => import('../views/Patients/PatientsList.vue')
  },
  {
    path: '/patient-view',
    name: 'PatientView',
    props: true,
    component: () => import('../views/Patients/PatientView.vue')
  },
  {
    path: '/patient-add',
    name: 'PatientAdd',
    component: () => import('../views/Patients/PatientAdd.vue')
  },
  {
    path: '/patient-edit',
    name: 'PatientEdit',
    props: true,
    component: () => import('../views/Patients/PatientEdit.vue')
  },

  //другое
  {
    path: "*",
    component: () => import('../views/Page404.vue'),
  },
];


//инициализация
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
    return false;
  }

  //перенаправления с главной
  if(to.name === "Home" && user) {
    if(user.info.Doctor === 1) {
      next({name:"Patients"});
    } else if(user.info.Admin === 1) {
      next({name:"Doctors"});
    } else {
      next({name:"Login"});
    }
  }

  //Доступ админу к юзерам
  if((to.name === "Doctors" || to.name === "DoctorView" || to.name === "DoctorEdit" || to.name === "DoctorsAdd") && user.info.Admin !== 1) {
    next({name:"Home"});
  }

  //Доступ врачам к пациентам
  if((to.name === "Patients" || to.name === "PatientView" || to.name === "PatientEdit" || to.name === "PatientAdd") && user.info.Doctor !== 1) {
    next({name:"Home"});
  }

  next();
});

export default router
