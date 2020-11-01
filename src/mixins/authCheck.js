export default {
    created() {
        if(!localStorage.getItem("user")) {
            console.log(this.$route.path, this);
            this.$router.push("login");
        }
    }
}