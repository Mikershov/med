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

    <router-view></router-view>

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
</style>
