<template>
    <b-container>

        <div class="list-head">
            <span class="list-head-title">
                Врачи
            </span>
            <router-link v-if="admin" to="/doctor-add">
                <b-button variant="primary">Добавить врача</b-button>
            </router-link>
        </div>

        <b-list-group >
            <b-list-group-item v-for="doctor in doctors" :key="doctor.id">
                <div class="list-items">
                    {{doctor.SacondName}} {{doctor.FirstName}} {{doctor.MiddlName}}
                </div>

                <div class="list-btns">
                    <router-link to="/doctor-edit">
                        <b-button class="mr-1" size="sm" variant="primary">E</b-button>
                    </router-link>

                    <router-link :to="{name:'DoctorView', params:{user:doctor, test:'ok'}}">
                        <b-button class="" size="sm" variant="primary">S</b-button>
                    </router-link>
                </div>
            </b-list-group-item>
        </b-list-group>

        <hr>

        <DoctorView :user="{test:'ok'}" test=" TEST "></DoctorView>


    </b-container>
</template>

<script>
    import DoctorView from "./DoctorView";
    export default {
        name: "doctorsList",
        components: {DoctorView},
        data() {
            return{
                doctors: [],
                admin: true
            }
        },

        mounted() {
            console.log(localStorage.user)

            if(localStorage.user) {
                let user = JSON.parse(localStorage.user);
                console.log(user);

                this.axios.get("http://188.243.56.86:7777/list_users?key="+user.key.my_key)
                    .then(res => {
                        let data = res.data;
                        console.log(data);

                        if(data.answer === 0) {
                            //this.errorMsg = data.Error[0].type;
                            console.log("error")
                        } else {
                            this.doctors = data.data;
                        }
                    })
                    .catch(res => { console.log("Ошибка", res) })

            } else {
                this.router.push("login");
            }


        },

        methods: {

        }
    }
</script>

<style scoped>
    .list-items {
        display: inline-block;
        width: 80%;
        font-weight: normal;
        text-overflow: ellipsis;
    }

    .list-btns {
        display: inline-block;
        width: 20%;
    }
</style>