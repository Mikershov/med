<template>
    <b-container>
        <PageHeader title="Новый пациент" :rout="{name:'Patients'}"></PageHeader>

        <div class="m-2">&nbsp;</div>

        <PatientForm :user="user"></PatientForm>

        <div class="text-center">
            <b-button class="w-75 mb-2 mt-2" @click="userAdd" variant="success">
                Добавить пациента
                <b-spinner small v-if="isLoadingData"></b-spinner>
            </b-button>
        </div>
    </b-container>
</template>

<script>
    import PatientForm from "../../components/PatientForm";
    import sse from '../../mixins/showServerError';
    import PageHeader from "../../components/PageHeader";

    export default {
        name: "PatientAdd",
        components: {PageHeader, PatientForm},
        mixins: [sse],

        data() {
            return {
                user: {
                    Doctor_id: "",
                    FirstName: "",
                    MiddlName: "",
                    SacondName: "",
                    Birthday: "",
                    Sex: 0,
                    Adres: "",
                    Phone: "",
                    Anamnes: "",
                    Diagnos: "",
                    PersDastaSoglasie: 1,
                    SoglasieMed: 1
                },
                isLoadingData: false
            }
        },

        computed: {
            key() {
                return this.$store.getters.key
            },
        },

        methods: {
            userAdd() {
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

                this.axios.put("http://188.243.56.86:7777/insert_pacient", data)
                    .then(res => {
                        let data = res.data;
                        this.isLoadingData = false;

                        if(data.answer === 0) {
                            this.showServerError(data.Error);
                        } else {
                            this.$router.push({name:"Patients"});
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