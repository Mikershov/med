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
            <b-skeleton class="mt-3" type="input"></b-skeleton>
            <b-skeleton class="mt-3" type="input"></b-skeleton>
            <b-skeleton class="mt-3" type="input"></b-skeleton>
            <b-skeleton class="mt-3" type="input"></b-skeleton>
            <b-skeleton class="mt-3" type="input"></b-skeleton>
            <b-skeleton class="mt-3" type="input"></b-skeleton>
        </div>

        <div class="doctors-list">
            <div class="doctors-list-item" v-for="doctor in doctors" :key="doctor.id">
                <div class="list-name">
                    {{doctor.SacondName}} {{doctor.FirstName}} {{doctor.MiddlName}}
                </div>

                <div class="list-btns">
                    <router-link :to="{name:'DoctorEdit', params:{user:doctor}}">
                        <b-button size="" variant="primary">
                            <b-icon icon="pencil-fill"></b-icon>
                        </b-button>
                    </router-link>

                    <router-link :to="{name:'DoctorView', params:{user:doctor}}">
                        <b-button variant="primary">
                            <b-icon icon="eye-fill"></b-icon>
                        </b-button>
                    </router-link>
                </div>
            </div>
        </div>

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

    .spinner {
        text-align: center;
        margin: 50px 0 50px 0;
    }



    .doctors-list {

    }

    .doctors-list-item {
        display: flex;
        align-items: center;
        padding: 10px 10px 10px 10px;
        border: 1px solid #e6e8ea;
        border-width: 1px 1px 0 1px;
    }

    .doctors-list-item:last-child {
        border: 1px solid #e6e8ea;
        border-radius: 3px;
    }

    .list-name {
        display: flex;
        width: calc(100% - 100px);
        font-weight: normal;
    }

    .list-btns {
        display: flex;
        width: 100px;
        justify-content: space-between;
    }
</style>