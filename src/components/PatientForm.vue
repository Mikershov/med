<template>
    <div>
        <b-form>
            <table cellpadding="0" cellspacing="0" class="form-table">
                <tr>
                    <td>Фамилия</td>
                    <td>
                        <b-form-input
                                id="SacondName"
                                v-model="user.SacondName"
                                required
                        ></b-form-input>
                    </td>
                </tr>

                <tr>
                    <td>Имя</td>
                    <td>
                        <b-form-input
                                id="FirstName"
                                v-model="user.FirstName"
                        ></b-form-input>
                    </td>
                </tr>

                <tr>
                    <td>Отчество</td>
                    <td>
                        <b-form-input
                                id="MiddlName"
                                v-model="user.MiddlName"
                        ></b-form-input>
                    </td>
                </tr>

                <tr>
                    <td>Дата рождения</td>
                    <td>
                        <input v-model="user.Birthday"
                               id="Birthday"
                               type="text"
                               placeholder="гггг-мм-дд"
                               v-VueMaskDirective="'####-##-##'"
                               class="form-control">
                    </td>
                </tr>

                <tr>
                    <td>Пол</td>
                    <td class="text-center">
                        <b-form-radio-group id="Sex" name="Sex" v-model="user.Sex">
                            <b-form-radio class="mr-5" v-model="user.Sex" value="1">Жен.</b-form-radio>
                            <b-form-radio v-model="user.Sex" value="0">Муж.</b-form-radio>
                        </b-form-radio-group>
                    </td>
                </tr>

                <tr>
                    <td>Телефон</td>
                    <td>
                        <b-form-input
                                id="Phone"
                                v-model="user.Phone"
                        ></b-form-input>
                    </td>
                </tr>

                <tr>
                    <td>Адрес</td>
                    <td>
                        <b-form-textarea
                                id="adres"
                                v-model="user.adres"
                                rows="1"
                                max-rows="3"
                        ></b-form-textarea>
                    </td>
                </tr>

                <tr>
                    <td>Перс.Данные согласие</td>
                    <td class="text-center">
                        <b-form-radio-group id="PersDastaSoglasie" name="PersDastaSoglasie" v-model="user.PersDastaSoglasie">
                            <b-form-radio class="mr-5" v-model="user.PersDastaSoglasie" value="1">Да</b-form-radio>
                            <b-form-radio v-model="user.PersDastaSoglasie" value="0">Нет</b-form-radio>
                        </b-form-radio-group>
                    </td>
                </tr>

                <tr>
                    <td>Мед.Согласние</td>
                    <td class="text-center">
                        <b-form-radio-group id="SoglasieMed" name="PersDastaSoglasie" v-model="user.SoglasieMed">
                            <b-form-radio class="mr-5" v-model="user.SoglasieMed" value="1">Да</b-form-radio>
                            <b-form-radio v-model="user.SoglasieMed" value="0">Нет</b-form-radio>
                        </b-form-radio-group>
                    </td>
                </tr>

                <tr>
                    <td>Врач</td>
                    <td>
                        <b-form-input
                                id="Doctor_id"
                                v-model="user.Doctor_id"
                        ></b-form-input>
                    </td>
                </tr>
            </table>

            <div class="text-block">
                <h6 class="">Анамнез</h6>
                <p>
                    <b-form-textarea
                            id="Anamnes"
                            v-model="user.Anamnes"
                            rows="2"
                            max-rows="7"
                    ></b-form-textarea>
                </p>
            </div>

            <div class="text-block">
                <h6 class="">Диагноз</h6>
                <p>
                    <b-form-textarea
                            id="Diagnos"
                            v-model="user.Diagnos"
                            rows="2"
                            max-rows="7"
                    ></b-form-textarea>
                </p>
            </div>

        </b-form>
    </div>
</template>

<script>
    import { VueMaskDirective } from 'v-mask';

    export default {
        name: "PatientForm",

        directives: {VueMaskDirective},

        props: {
            user: Object,
            isNewUser: Boolean
        },

        computed: {
            //форматирование для даты
        }
    }
</script>

<style scoped>
    .form-table {
        width: 100%;
    }

    .form-table td {
        padding: .5rem 0;
    }

    .form-table td:first-child {
        padding-right: .5rem;
    }

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
        padding: 0;
        margin: 0;
    }

    textarea {
        border-radius: 0;
    }
</style>