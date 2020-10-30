<template>
    <b-container>
        {{user}}<br>
    </b-container>
</template>

<script>
    export default {
        name: "DoctorView",

        props: {
            user: Object,
            test: String
        },

        data() {
            return {

            }
        },

        mounted() {

        }
    }
</script>

<style scoped>

</style>