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
                                placeholder="Логин"
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
                                placeholder="Пароль"
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
                                placeholder="Фамилия"
                        ></b-form-input>
                    </td>
                </tr>

                <tr>
                    <td>Имя</td>
                    <td>
                        <b-form-input
                                id="input-3"
                                v-model="user.FirstName"
                                placeholder="Имя"
                        ></b-form-input>
                    </td>
                </tr>

                <tr>
                    <td>Отчество</td>
                    <td>
                        <b-form-input
                                id="input-4"
                                v-model="user.MiddlName"
                                placeholder="Отчество"
                        ></b-form-input>
                    </td>
                </tr>

                <tr>
                    <td>Дата рождения</td>
                    <td>
                        <b-form-input
                                id="input-6"
                                v-model="user.Birthday"
                                placeholder="Дата рождения"
                        ></b-form-input>
                    </td>
                </tr>

                <tr>
                    <td>Специализация</td>
                    <td>
                        <b-form-input
                                id="input-7"
                                v-model="user.ProfSpacial"
                                placeholder="Специализация"
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
            </table>
        </b-form>
    </div>
</template>

<script>
    export default {
        name: "DoctorForm",
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
        vertical-align: top;
    }

    .form-table td:first-child {
        padding-right: .5rem;
    }
</style>