<template>
    <div>
        <b-form>
            <table cellpadding="0" cellspacing="0" class="form-table">
                <tr>
                    <td>Логин</td>
                    <td>
                        <b-form-input
                                id="input-1"
                                v-model="user.Username"
                                required
                                :disabled="!isNewUser"
                        ></b-form-input>
                    </td>
                </tr>

                <tr v-if="isNewUser">
                    <td>Пароль</td>
                    <td>
                        <b-form-input
                                id="input-2"
                                v-model="user.password"
                                type="password"
                                required
                        ></b-form-input>
                    </td>
                </tr>

                <tr>
                    <td>Фамилия</td>
                    <td>
                        <b-form-input
                                id="input-5"
                                v-model="user.SacondName"
                                required
                        ></b-form-input>
                    </td>
                </tr>

                <tr>
                    <td>Имя</td>
                    <td>
                        <b-form-input
                                id="input-3"
                                v-model="user.FirstName"
                        ></b-form-input>
                    </td>
                </tr>

                <tr>
                    <td>Отчество</td>
                    <td>
                        <b-form-input
                                id="input-4"
                                v-model="user.MiddlName"
                        ></b-form-input>
                    </td>
                </tr>

                <tr>
                    <td>Дата рождения</td>
                    <td>
                        <input v-model="user.Birthday"
                               id="input-6"
                               type="text"
                               placeholder="гггг-мм-дд"
                               v-VueMaskDirective="'####-##-##'"
                               class="form-control">
                    </td>
                </tr>

                <tr>
                    <td>Специализация</td>
                    <td>
                        <b-form-input
                                id="input-7"
                                v-model="user.ProfSpacial"
                        ></b-form-input>
                    </td>
                </tr>

                <tr>
                    <td>Врач</td>
                    <td class="text-center">
                        <b-form-radio-group id="doctor" name="Doctor" v-model="user.Doctor">
                            <b-form-radio class="mr-5" v-model="user.Doctor" value="1">Да</b-form-radio>
                            <b-form-radio v-model="user.Doctor" value="0">Нет</b-form-radio>
                        </b-form-radio-group>
                    </td>
                </tr>

                <tr>
                    <td>Админ</td>
                    <td class="text-center">
                        <b-form-radio-group id="admin" name="Admin" v-model="user.Admin">
                            <b-form-radio class="mr-5" v-model="user.Admin" value="1">Да</b-form-radio>
                            <b-form-radio v-model="user.Admin" value="0">Нет</b-form-radio>
                        </b-form-radio-group>
                    </td>
                </tr>

                <tr v-if="!isNewUser">
                    <td>Заблокирован</td>
                    <td class="text-center">
                        <b-form-radio-group id="off" name="Off" v-model="user.off">
                            <b-form-radio class="mr-5" v-model="user.off" value="1">Да</b-form-radio>
                            <b-form-radio v-model="user.off" value="0">Нет</b-form-radio>
                        </b-form-radio-group>
                    </td>
                </tr>
            </table>
        </b-form>
    </div>
</template>

<script>
    import { VueMaskDirective } from 'v-mask';

    export default {
        name: "DoctorForm",

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
</style>