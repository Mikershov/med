<template>
    <b-container>
        <router-link to="doctors">
            <b-button size="sm" class="back-btn" variant="primary">
                <b-icon icon="caret-left-fill"></b-icon>
            </b-button>
        </router-link>

        <table v-if="user" class="table">
            <tr>
                <td>Фамилия</td>
                <td>{{localUser.SacondName}}</td>
            </tr>

            <tr>
                <td>Имя</td>
                <td>{{localUser.FirstName}}</td>
            </tr>

            <tr>
                <td>Отчество</td>
                <td>{{localUser.MiddlName}}</td>
            </tr>

            <tr>
                <td>Специализация</td>
                <td>{{localUser.ProfSpacial}}</td>
            </tr>

            <tr>
                <td>Дата рождения</td>
                <td>{{localUser.Birthday}}</td>
            </tr>

            <tr>
                <td>Врач</td>
                <td>{{localUser.Doctor | yesNo}}</td>
            </tr>

            <tr>
                <td>Администратор</td>
                <td>{{localUser.Admin | yesNo}}</td>
            </tr>

            <tr>
                <td>Логин</td>
                <td>{{localUser.Username}}</td>
            </tr>

            <tr>
                <td>Добавлен</td>
                <td>{{localUser.created_at}}</td>
            </tr>

            <tr>
                <td>Изменен</td>
                <td>{{localUser.updated_at}}</td>
            </tr>

            <tr>
                <td>Статус</td>
                <td>{{localUser.off | blockStatus}}</td>
            </tr>
        </table>
    </b-container>
</template>

<script>
    export default {
        name: "DoctorView",

        props: {
            user: Object
        },

        data() {
            return {
                //localUser: this.$props.user?this.$props.user:{}
                localUser: this.$props.user
            }
        },

        created() {
            if(!this.$props.user) {
                this.$router.push({name:"Doctors"});
            }
        },

        mounted() {
            //console.log("mounted", this.$props.user)
        },

        methods: {

        },

        filters: {
            yesNo: (status) => status?"Да":"Нет",
            blockStatus: (status) => status?"Заблокирован":"Активен"
        }
    }
</script>

<style scoped>
    .back-btn {
        margin-bottom: 10px;
    }
</style>