<template>
    <b-container v-if="user">
        <page-header title="Пациент" :rout="{name:'Patients'}"></page-header>

        <h5>
            {{localUser.SacondName}} {{localUser.FirstName}} {{localUser.MiddlName}}
        </h5>

        <div class="text-block">
            <h6 class="">Анамнез</h6>
            <p>{{localUser.Anamnes}}</p>
        </div>

        <div class="text-block">
            <h6 class="">Диагноз</h6>
            <p>{{localUser.Diagnos}}</p>
        </div>

        <table class="table">
            <tr>
                <td>Врач</td>
                <td>{{doctorName}}</td>
            </tr>

            <tr>
                <td>Дата рождения</td>
                <td>{{localUser.Birthday}}</td>
            </tr>

            <tr>
                <td>Пол</td>
                <td>{{localUser.Sex | sex}}</td>
            </tr>

            <tr>
                <td>Телефон</td>
                <td>{{localUser.Phone}}</td>
            </tr>

            <tr>
                <td>Адрес</td>
                <td>{{localUser.Adres}}</td>
            </tr>

            <tr>
                <td>Согласие перс.данные</td>
                <td>{{localUser.PersDastaSoglasie | yesNo}}</td>
            </tr>

            <tr>
                <td>Мед. согласние</td>
                <td>{{localUser.SoglasieMed | yesNo}}</td>
            </tr>

            <tr>
                <td>Добавлен</td>
                <td>{{localUser.created_at}}</td>
            </tr>

            <tr>
                <td>Изменен</td>
                <td>{{localUser.updated_at}}</td>
            </tr>
        </table>
    </b-container>
</template>

<script>
    import PageHeader from "../../components/PageHeader";
    export default {
        name: "PatientView",
        components: {PageHeader},
        props: {
            user: Object
        },

        data() {
            return {
                localUser: this.$props.user
            }
        },

        created() {
            this.$store.dispatch("doctors_load", {reload:false});

            if(!this.$props.user) {
                this.$router.push({name:"Patients"});
            }
        },

        computed: {
          doctorName() {
              return this.$store.getters.doctorNameById(this.user.Doctor_id);
          }
        },

        filters: {
            yesNo: (status) => status?"Да":"Нет",
            sex: (status) => status?"Женский":"Мужский"
        }
    }
</script>

<style scoped>
    h5 {
        font-size: 1.2rem;
        text-align: center;
        margin: 20px 0;
        font-weight: bold;
    }

    h6 {
        font-size: 1.1rem;
        font-weight: bold;
        margin: 0;
        background-color: rgba(0,0,0,.03);
        border-radius: 5px 5px 0 0;
        padding: 15px;
        border-bottom: 1px solid rgba(0,0,0,.125);
    }

    .text-block {
        background-color: #f8f9fa;
        border-radius: 5px;
        border: 1px solid rgba(0,0,0,0.07);
        margin: 0 0 20px 0;
    }

    .text-block p {
        padding: 15px;
        margin: 0;
    }
</style>