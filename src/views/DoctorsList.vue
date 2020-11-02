<template>
    <b-container>
        <div class="list-head">
            <span class="list-head-title">
                Пользователи
            </span>
            <router-link v-if="admin" to="/doctor-add">
                <b-button variant="success">
                    <b-icon icon="person-plus-fill"></b-icon>
                </b-button>
            </router-link>
        </div>

        <div class="spinner" v-if="isLoadingData">
            <h5>Получение данных...</h5>
            <b-spinner variant="success"></b-spinner>
        </div>

        <b-list-group >
            <b-list-group-item v-for="doctor in doctors" :key="doctor.id">
                <div class="list-items">
                    {{doctor.SacondName}} {{doctor.FirstName}} {{doctor.MiddlName}}
                </div>

                <div class="list-btns">
                    <router-link :to="{name:'DoctorEdit', params:{user:doctor}}">
                        <b-button class="mr-1" size="sm" variant="primary">
                            <b-icon icon="pencil-fill"></b-icon>
                        </b-button>
                    </router-link>

                    <router-link :to="{name:'DoctorView', params:{user:doctor}}">
                        <b-button class="" size="sm" variant="primary">
                            <b-icon icon="eye-fill"></b-icon>
                        </b-button>
                    </router-link>
                </div>
            </b-list-group-item>
        </b-list-group>
    </b-container>
</template>

<script>
    //import showServerError from "../mixins/showServerError";
    import sse from '../mixins/showServerError';

    export default {
        mixins: [sse],
        name: "doctorsList",

        data() {
            return{
                doctors: [],
                admin: true,
                isLoadingData: true
            }
        },

        mounted() {
            let user = JSON.parse(localStorage.getItem("user"));

            this.axios.get("http://188.243.56.86:7777/list_users?key="+user.key.my_key)
                .then(res => {
                    console.log(res.data);

                    this.isLoadingData = false;
                    let data = res.data;

                    if(data.answer === 1) {
                        this.doctors = data.data;
                    } else {
                        this.showServerError(data.Error);
                    }
                })
                .catch(res => { console.log("Ошибка", res) })
        },
    }
</script>

<style scoped>
    .list-head {
        background-color: #e6e8ea;
        box-sizing: border-box;
        padding: 10px;
        border-radius: 3px 3px 0 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .list-head-title {
        font-weight: bold;
        font-size: 1.3rem;
    }

    .list-items {
        display: inline-block;
        width: 75%;
        font-weight: normal;
        text-overflow: ellipsis;
    }

    .list-btns {
        display: inline-block;
        width: 25%;
        text-align: center;
    }

    .navbar {
        background-color: #e6e8ea !important;
    }

    .list-group-item:first-child {
        border-radius: 0;
    }

    .spinner {
        text-align: center;
        margin: 50px 0 50px 0;
    }
</style>