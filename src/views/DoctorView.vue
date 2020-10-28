<template>
    <b-container>
        default<br>
        {{test}}<br>
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
            console.log("PROPS - ", this.props);
        }
    }
</script>

<style scoped>

</style>