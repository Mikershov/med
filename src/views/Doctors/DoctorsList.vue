<template>
    <b-container>
        <div class="list-head">
            <span class="list-head-title">
                Пользователи
            </span>
            <router-link to="/doctor-add">
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

        <div class="list">
            <DoctorInList
                    v-for="doctor in doctors"
                    :key="doctor.id"
                    :doctor="doctor"
            ></DoctorInList>
        </div>

    </b-container>
</template>

<script>
    import sse from '../../mixins/showServerError';
    import DoctorInList from "../../components/DoctorInList";

    export default {
        components: {DoctorInList},
        mixins: [sse],
        name: "DoctorsList",

        data() {
            return{
                isLoadingData: true,
            }
        },

        computed: {
          key() {
              return this.$store.getters.key;
          },

            doctors() {
                return this.$store.getters.doctors;
            }
        },

        activated() {
            this.$store.dispatch("doctors_load", {reload:true})
                .catch((data) => {
                    this.showServerError(data.Error);
                })
                .finally(() => {
                    this.isLoadingData = false;
                })
        },

        deactivated() {

        }
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

    .list {
        margin-bottom: 15px;
    }
</style>