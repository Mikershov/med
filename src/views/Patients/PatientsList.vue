<template>
    <b-container>
        <div class="list-head">
            <span class="list-head-title">
                Пациенты
            </span>
            <router-link to="/patient-add">
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
            <PatientInList
                    v-for="patient in patients"
                    :patient="patient"
                    :key="patient.id"
            ></PatientInList>
        </div>

    </b-container>
</template>

<script>
    import sse from '../../mixins/showServerError';
    import PatientInList from "../../components/PatientInList";

    export default {
        components: {PatientInList},
        mixins: [sse],
        name: "PatientsList",

        data() {
            return{
                patients: [],
                isLoadingData: true,
            }
        },

        computed: {
            key() {
                return this.$store.getters.key;
            }
        },

        activated() {
            this.axios.get("http://188.243.56.86:7777/list_pacients?key="+this.key)
                .then(res => {
                    this.isLoadingData = false;

                    let data = res.data;
                    console.log(data)
                    if(data.answer === 1) {

                        data.data.sort((a, b) => {
                            return a.SacondName > b.SacondName? 1:-1;
                        });

                        this.patients = data.data;
                    } else {
                        this.showServerError(data.Error);
                    }
                })
                .catch(res => { console.log("Ошибка", res) })
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