<template>
  <b-container>
    <h3>Главная страница</h3>
    <p>Нужно понять, что тут будет и нужна ли она вообще, а пока дебажная инфа.</p>

    <div v-if="isAuth">
      <p>Активный юзер</p>
      <table v-if="user">
        <tr>
          <td>Логин: </td>
          <td>{{user.info.Username}}</td>
        </tr>

        <tr>
          <td>Admin: </td>
          <td>{{user.info.Admin}}</td>
        </tr>

        <tr>
          <td>Doctor: </td>
          <td>{{user.info.Doctor}}</td>
        </tr>

        <tr>
          <td>ID: </td>
          <td>{{user.info.id}}</td>
        </tr>
      </table>
    </div>

  </b-container>
</template>

<script>


export default {
  name: 'Home',

  computed: {
    user() {
      return this.$store.getters.user;
    },

    isAuth() {
      return this.$store.getters.isAuth;
    }
  }
}
</script>
