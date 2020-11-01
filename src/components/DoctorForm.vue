<template>
    <div>
        <b-form>
            <b-form-group id="input-group-1" label="Логин:" label-for="input-1">
                <b-form-input
                        id="input-1"
                        v-model="user.Username"
                        required
                        :disabled="!isNewUser"
                        placeholder="Логин"
                ></b-form-input>
            </b-form-group>

            <b-form-group v-if="isNewUser" id="input-group-2" label="Пароль:" label-for="input-2">
                <b-form-input
                        id="input-2"
                        v-model="user.password"
                        type="password"
                        required
                        placeholder="Пароль"
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-5" label="Фамилия:" label-for="input-5">
                <b-form-input
                        id="input-5"
                        v-model="user.SacondName"
                        required
                        placeholder="Фамилия"
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-3" label="Имя:" label-for="input-3">
                <b-form-input
                        id="input-3"
                        v-model="user.FirstName"
                        placeholder="Имя"
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-4" label="Отчество:" label-for="input-4">
                <b-form-input
                        id="input-4"
                        v-model="user.MiddlName"
                        placeholder="Отчество"
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-6" label="Дата рождения:" label-for="input-6">
                <b-form-input
                        id="input-6"
                        v-model="user.Birthday"
                        placeholder="Дата рождения"
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-7" label="Специализация:" label-for="input-7">
                <b-form-input
                        id="input-7"
                        v-model="user.ProfSpacial"
                        placeholder="Специализация"
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-8" label="Врач:" label-for="input-8">
                <b-form-radio-group id="doctor" name="Doctor" v-model="user.Doctor">
                    <b-form-radio v-model="user.Doctor" value="1">Да</b-form-radio>
                    <b-form-radio v-model="user.Doctor" value="0">Нет</b-form-radio>
                </b-form-radio-group>
            </b-form-group>

            <b-form-group id="input-group-9" label="Администратор:">
                <b-form-radio-group id="admin" name="Admin" v-model="user.Admin">
                    <b-form-radio v-model="user.Admin" value="1">Да</b-form-radio>
                    <b-form-radio v-model="user.Admin" value="0">Нет</b-form-radio>
                </b-form-radio-group>
            </b-form-group>
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

</style>