<template>
  <div class="ui secondary pointing menu">
    <a class="item">
      Image Storage
    </a>
    <a class="item active">
      Home
    </a>
    <a class="item">
      Messages
    </a>
    <a class="item">
      Friends
    </a>
    {{isLoggedIn}}
    <div class="right menu">
      <div v-if="isLoggedIn" class="horizontal">
        <router-link to="/" class="ui item" @click="logout">
          Gallery
        </router-link>
        <router-link to="/upload" class="ui item" @click="logout">
          Upload
        </router-link>
        <a href="#" class="ui item" @click="logout">
          Logout
        </a>
      </div>
      <a v-else href="#" class="ui item" @click="login">
        Login
      </a>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "AppHeader",
  computed: mapGetters(["isLoggedIn"]),
  methods: mapActions(["login", "logout"])
};
</script>
 
 <style scoped>
.horizontal {
  display: flex;
  flex-direction: row;
}
</style>
 
 