import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {test:"ok"}
  },

  mutations: {
    //сетап при логине юзера в локалсторож и вьюикс
    user_set(state, user = "{}") {
      localStorage.setItem("user", JSON.stringify(user));
      state.user = user;
    },

    //загрузка юзера во вьюикс из локалсторожа
    user_init(state) {
      let user = localStorage.getItem("user");
      if(!state.user.info && user) {
        state.user = JSON.parse(user);
      }
    },

    //удаление юзера при логауте из вьюикса и локалсторожа
    user_clear(state) {
      state.user = {};
      localStorage.removeItem("user");
    }
  },

  actions: {

  },

  getters: {
    isAuth: state => !!state.user.info,
    isAdmin: state => !!state.user.info.Admin,
    isDoctor: state => !!state.user.info.Doctor,

    user: state => state.user,
    key: state => state.user.key.my_key,
  },

  modules: {

  }
})
