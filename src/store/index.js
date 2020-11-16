import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {test:"ok"},
    doctors: []
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
    },

    doctors_set(state, payload) {
      state.doctors = payload.doctors;
    }
  },


  actions: {
    doctors_load(context, payload) {
      return new Promise((resolve, reject) => {
        //список уже есть и перезагружать не надо
        if(context.state.doctors.length > 0 && (payload && !payload.reload)) {
          resolve();
        }

        axios.get("http://188.243.56.86:7777/list_users?key="+context.getters.key)
            .then(res => {
              let data = res.data;

              if(data.answer === 1) {
                data.data.sort((a, b) => {
                  if(a.off && !b.off) {
                    return 1;
                  } else if(!a.off && b.off) {
                    return -1;
                  }
                  return a.SacondName > b.SacondName? 1:-1;
                });

                context.commit("doctors_set", {doctors:data.data});
                resolve(data);

              } else {
                reject(data);
              }
            })
            .catch(res => { console.log("Ошибка", res) })
      });
    }
  },


  getters: {
    isAuth: state => !!state.user.info,
    isAdmin: state => !!state.user.info.Admin,
    isDoctor: state => !!state.user.info.Doctor,

    user: state => state.user,
    key: state => state.user.key.my_key,

    doctors: state => state.doctors,

    doctorsSelectList: state => {
      let docs =  state.doctors.map(doc => {
        return {value:doc.id, text:`${doc.SacondName} ${doc.FirstName} ${doc.MiddlName}`}
      });

      docs.unshift({value:"", text:"Выбрите врача"});

      return docs;
    },

    doctorNameById: state => id => {
      let doc = state.doctors.find(doc => doc.id === id);

      return `${doc.SacondName} ${doc.FirstName} ${doc.MiddlName}`;
    }
  },


  modules: {

  }
})
