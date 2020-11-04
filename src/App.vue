<template>
  <div id="app">
    <div id="nav">
      <b-button size="sm" @click="logout">
        <b-icon icon="box-arrow-left"></b-icon>
      </b-button> |

      <router-link to="/">Home</router-link> |
      <!--<router-link to="/about">About</router-link> |-->
      <router-link to="/login">Login</router-link> |
      <router-link to="/doctors">Doctors</router-link>
    </div>

    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>

  </div>
</template>

<script>
  export default {
    name: "App",

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
  .fade-enter-active,
  .fade-leave-active {
    transition-property: all;
    transition-duration: 0.3s;
  }

  .fade-enter-active {
    transition-delay: 0s;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0;
    transform: translateX(100%);
  }


  html {
    font-size: 16px;
  }

  #app {
    font-family: Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  #nav {
    padding: 10px;
    text-align: center;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
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
