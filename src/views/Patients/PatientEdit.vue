<template>
    <b-container>
        <PageHeader title="Обновление пациента" :rout="{name:'Patients'}"></PageHeader>

        <div class="m-2">&nbsp;</div>

        <PatientForm :user="localUser" :is-new-user="false"></PatientForm>

        <div class="text-center">
            <b-button class="mt-2 mb-2 w-50" @click="userUpdate" variant="success">
                Сохранить
                <b-spinner small v-if="isLoadingData"></b-spinner>
            </b-button>
        </div>
    </b-container>
</template>

<script>
    import sse from '../../mixins/showServerError';
    import PageHeader from "../../components/PageHeader";
    import PatientForm from "../../components/PatientForm";

    export default {
        name: "PatientEdit",

        components: {PatientForm, PageHeader},
        mixins: [sse],

        props: {
            user: Object
        },

        data() {
            return {
                localUser: this.user?this.user:{},
                isLoadingData: false
            }
        },

        computed: {
            key() {
                return this.$store.getters.key
            }
        },

        methods: {
            userUpdate() {
                console.log("localUser", this.localUser);

                this.isLoadingData = true;

                let data = new FormData();
                data.append("key", this.key);
                data.append("Doctor_id", this.user.Doctor_id);
                data.append("FirstName", this.user.FirstName);
                data.append("MiddlName", this.user.MiddlName);
                data.append("SacondName", this.user.SacondName);
                data.append("Birthday", this.user.Birthday);
                data.append("Sex", this.user.Sex);
                data.append("Adres", this.user.Adres);
                data.append("Phone", this.user.Phone);
                data.append("Anamnes", this.user.Anamnes);
                data.append("Diagnos", this.user.Diagnos);
                data.append("PersDastaSoglasie", this.user.PersDastaSoglasie);
                data.append("SoglasieMed", this.user.SoglasieMed);
                data.append("id", this.user.id);

                this.axios.patch("http://188.243.56.86:7777/update_pacient", data)
                    .then(res => {
                        let data = res.data;
                        this.isLoadingData = false;

                        console.log("PAT UPDATE - ",data);

                        if(data.answer === 0) {
                            data.Error?this.showServerError(data.Error):this.showServerError(data.error);
                        } else {
                            this.$bvToast.toast("Пользователь обновлен", {
                                title: `Сообщение`,
                                variant: "success",
                                toaster: "b-toaster-top-center",
                                solid: true,
                            })
                        }
                    })
                    .catch(res => { console.log("Ошибка", res) })
            }
        }
    }
</script>

<style scoped>

</style>