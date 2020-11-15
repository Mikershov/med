<template>
  <div id="app">

    <b-container v-if="isAuth">
      <div id="nav">
        <div class="logout">
          <b-button variant="danger" @click="logout">
            <b-icon icon="box-arrow-left"></b-icon>
          </b-button>
        </div>

        <div class="links">
          <router-link v-if="isDoctor" to="/patients">Пациенты</router-link>
          <router-link v-if="isAdmin" to="/doctors">Врачи</router-link>
        </div>

        <div class="settings">
          <b-button @click="help" variant="info">
            <b-icon icon="question-circle"></b-icon>
          </b-button>

          <b-button @click="settings" variant="success">
            <b-icon icon="gear"></b-icon>
          </b-button>
        </div>
      </div>
    </b-container>

    <transition name="fade" mode="out-in">
      <keep-alive include="DoctorsList,PatientsList">
        <router-view class="view"></router-view>
      </keep-alive>
    </transition>

  </div>
</template>

<script>
  export default {
    name: "App",

    data() {
      return {

      }
    },

    mounted() {
      console.log(JSON.parse(localStorage.getItem("user")))
    },

    methods: {
      logout() {
        this.$store.commit("user_clear");
        this.$router.push({name:"Login"});
      },

      help() {
        this.$bvModal.msgBoxOk('Нужна?', {
          title: 'Справка или помощь',
          size: 'xl',
          okVariant: 'success',
          headerClass: 'p-2 border-bottom-0',
          footerClass: 'p-2 border-top-0',
          centered: false
        })
      },

      settings() {
        this.$bvModal.msgBoxOk('Смена пароля и личных данные, настройка каких-то еще параметров.', {
          title: 'Настройки',
          size: 'xl',
          okVariant: 'success',
          headerClass: 'p-2 border-bottom-0',
          footerClass: 'p-2 border-top-0',
          centered: true
        })
      }
    },

    created() {
      this.$store.commit("user_init");
    },

    computed: {
      isAuth() {
        return this.$store.getters.isAuth;
      },

      isAdmin() {
        return this.$store.getters.isAdmin;
      },

      isDoctor() {
        return this.$store.getters.isDoctor;
      }
    }
  }
</script>

<style>

  .fade-leave {

  }
  .fade-leave-active {
    transition: all 0.3s ease;
  }
  .fade-leave-to {
    opacity: 0;
    transform: scale(1.01);
  }


  .fade-enter {
    opacity: 0;
    transform: scale(1.01);
  }
  .fade-enter-active {
    transition: all .3s ease;
  }



  html {
    font-size: 16px;
  }

  #app {
    width: 100%;
    max-width: 900px;
    margin: auto;
    overflow: hidden;
    font-family: Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  #nav {
    display: flex;
    padding: 10px 0;
    align-items: center;
  }

  .logout {
    width: 46px;
  }

  .links {
    width: calc(100% - 146px);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .links a {
    font-weight: bold;
    color: #2c3e50;
    display: inline-block;
    margin: 0 5px;
    font-size: 1.2rem;
    padding: 3px 5px;
    border: 1px solid rgba(66, 185, 131, 0);
    border-radius: 5px;
  }

  .links a.router-link-exact-active {
    color: #42b983;
    border-color: rgba(66, 185, 131, 0.3);
  }

  .links a:hover{
    text-decoration: none;
  }

  .settings {
    width: 100px;
    display: flex;
    justify-content: space-between;
  }



  /*глобальные стили для всплывашек*/
  /*toast*/
  .b-toaster.b-toaster-top-center .b-toaster-slot, .b-toast, .toast {
    max-width: 500px;
  }

  .toast-header {
    font-size: 1.2rem;
  }

  .toast-header .close{
    font-size: 2rem;
  }

  .toast-body {
    font-size: 1rem;
  }
</style>
