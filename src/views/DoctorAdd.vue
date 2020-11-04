<template>
    <b-container>
        <PageHeader title="Новый пользователь" :rout="{name:'Doctors'}"></PageHeader>

        <div class="m-2">&nbsp;</div>

        <DoctorForm :user="user" :is-new-user="true"></DoctorForm>

        <div class="text-center">
            <b-button class="w-75 mb-2 mt-2" @click="userAdd" variant="success">
                Добавить пользователя
                <b-spinner small v-if="isLoadingData"></b-spinner>
            </b-button>
        </div>
    </b-container>
</template>

<script>
    import DoctorForm from "../components/DoctorForm";
    import md5 from 'md5';
    import sse from '../mixins/showServerError';
    import PageHeader from "../components/PageHeader";

    export default {
        name: "DoctorAdd",
        components: {PageHeader, DoctorForm},
        mixins: [sse],

        data() {
            return {
                user: {
                    Username: "",
                    password: "",
                    FirstName: "",
                    MiddlName: "",
                    SacondName: "",
                    Birthday: "",
                    ProfSpacial: "",
                    Doctor: 1,
                    Admin: 0,
                    off:0,
                },
                key: "",
                isLoadingData: false
            }
        },

        mounted() {
            this.key = JSON.parse(localStorage.getItem("user")).key.my_key;
        },

        methods: {
            userAdd() {
                this.isLoadingData = true;

                let data = new FormData();
                data.append("key", this.key);
                data.append("Username", this.user.Username);
                data.append("password", md5(this.user.password));
                data.append("FirstName", this.user.FirstName);
                data.append("MiddlName", this.user.MiddlName);
                data.append("SacondName", this.user.SacondName);
                data.append("Birthday", this.user.Birthday);
                data.append("ProfSpacial", this.user.ProfSpacial);
                data.append("Doctor", this.user.Doctor);
                data.append("Admin", this.user.Admin);
                data.append("off", this.user.off);

                this.axios.put("http://188.243.56.86:7777/insert_users", data)
                    .then(res => {
                        let data = res.data;
                        this.isLoadingData = false;

                        if(data.answer === 0) {
                            this.showServerError(data.Error);
                        } else {
                            this.$router.push("doctors");
                        }
                    })
                    .catch(res => { console.log("Ошибка", res) })
            },
        }
    }
</script>

<style scoped>
    .navbar-text{
        padding-left: 2rem;
        font-weight: bold;
        color: rgba(0,0,0,.5);
    }

    .navbar {
        background-color: #e5e6e6;
        border-radius: 3px;
        padding: 0.3rem 0.6rem;
    }
</style>