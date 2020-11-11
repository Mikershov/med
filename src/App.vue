<template>
  <div id="app">
    <div v-if="user" id="nav">
      <div class="logout">
        <b-button variant="danger" v-if="user" size="sm" @click="logout">
          <b-icon icon="box-arrow-left"></b-icon>
        </b-button>
      </div>

      <div class="links">
        <router-link to="/">Пациенты</router-link> |
        <router-link to="/doctors">Врачи</router-link>
      </div>

      <div class="settings">
        <b-button variant="info" size="sm">
          <b-icon icon="question-circle"></b-icon>
        </b-button>

        <b-button variant="success" size="sm">
          <b-icon icon="gear"></b-icon>
        </b-button>
      </div>
    </div>

    <transition name="fade" mode="out-in">
      <keep-alive include="DoctorsList">
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
        user: JSON.parse(localStorage.getItem("user"))
      }
    },

    methods: {
      logout() {
        console.log("exit");
        localStorage.removeItem("user");
        this.$router.push({name:"Login"});
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
    padding: 10px;
    background-color: #eaeaea;
    align-items: center;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }

  .logout {
    width: 37px;
  }

  .links {
    width: calc(100% - 137px);
    display: flex;
    justify-content: center;
  }

  .settings {
    width: 100px;
    display: flex;
    justify-content: space-between;
  }

  .page-title {
    display: inline-block;
    margin: 0 0 0 10px;
    padding: .25rem .5rem;
    background-color: rgba(0,0,0,.125);
    border-radius: .2rem;
    color: #000;
    font-size: 1.1rem;
  }

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
