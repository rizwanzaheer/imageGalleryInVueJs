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
      <div v-if="isLoggedIn">
        Gallary
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
  methods: mapActions(["login"])
};
</script>
 