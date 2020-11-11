<template>
  <b-container>
    <h3>Главная страница</h3>
    <p>Нужно понять, что тут будет и нужна ли она вообще, а пока дебажная инфа.</p>

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

  </b-container>
</template>

<script>


export default {
  name: 'Home',

  data() {
    return {
      user: JSON.parse(localStorage.getItem("user"))
    }
  },

  mounted() {
    console.log(this.user);
  }
}
</script>
