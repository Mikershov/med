<template>
    <b-container style="max-width: 500px; margin-top: 15px">
        <div>
            <b-form @submit.prevent="goLogin">
                <b-form-group id="input-group-1" label="Имя:" label-for="input-1">
                    <b-form-input
                            id="input-1"
                            v-model="user.name"
                            required
                            placeholder="Имя"
                    ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-2" label="Пароль:" label-for="input-2">
                    <b-form-input
                            id="input-2"
                            v-model="user.pas"
                            type="password"
                            required
                            placeholder="Пароль"
                    ></b-form-input>
                </b-form-group>

                <b-button type="submit" variant="primary">
                    Вход
                    <b-spinner v-if="isLoadingData" small variant="light"></b-spinner>
                </b-button>
            </b-form>
        </div>
    </b-container>
</template>

<script>
    import md5 from 'md5';
    import sse from "../mixins/showServerError";

    export default {
        name: "Login",
        mixins: [sse],

        data() {
            return {
                user: {
                    name: "",
                    pas: ""
                },
                isLoadingData: false
            }
        },

        mounted() {

        },

        methods: {
            goLogin() {
                this.isLoadingData = true;

                let data = new FormData();
                data.append("log", this.user.name);
                data.append("pass", md5(this.user.pas));

                this.axios.post("http://188.243.56.86:7777/check", data)
                    .then(res => {
                        this.isLoadingData = false;

                        let data = res.data;
                        if(data.answer === 0) {
                            this.showServerError(data.Error);

                        } else {
                            let user = {
                                key: data.info_key,
                                info: data.info_user
                            };

                            console.log(user);
                            //localStorage.setItem("user", JSON.stringify(user));

                            this.$store.commit("user_set", user);

                            if(user.info.Doctor === 1) {
                                this.$router.push({name:"Patients"});
                            } else if(user.info.Admin === 1) {
                                this.$router.push({name:"Doctors"});
                            } else {
                                this.$router.push({name:"Login"});
                            }
                        }
                    })
                    .catch(res => { console.log("Ошибка", res) })
            }
        }
    }


</script>

<style scoped>

</style>