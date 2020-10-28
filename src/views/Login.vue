<template>
    <b-container>
        <div>{{errorMsg}}</div>

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

                <b-button type="submit" variant="primary">Вход</b-button>
            </b-form>
        </div>
    </b-container>
</template>

<script>
    import md5 from 'md5';

    export default {
        name: "Login",

        data() {
            return {
                msg: "testOK",
                errorMsg: "",
                clickMsg: "",
                clickCounter: 0,
                loginText: "",
                user: {
                    name: "",
                    pas: ""
                }
            }
        },

        props: {
            pro1: String
        },

        mounted() {
            if(localStorage.getItem("user")) {
                let user = JSON.parse(localStorage.getItem("user"));
                console.log("user", user);
            }
        },

        methods: {
            goLogin() {
                let data = new FormData();
                data.append("log", this.user.name);
                data.append("pass", md5(this.user.pas));
                this.axios.post("http://188.243.56.86:7777/check", data)
                    .then(res => {
                        let data = res.data;
                        if(data.answer === 0) {
                            this.errorMsg = data.Error[0].type;

                        } else {
                            let user = {
                                key: data.info_key,
                                info: data.info_user
                            };
                            user = JSON.stringify(user);
                            localStorage.setItem("user", user)
                        }
                    })
                    .catch(res => { console.log("Ошибка", res) })
            }
        }
    }


</script>

<style scoped>

</style>