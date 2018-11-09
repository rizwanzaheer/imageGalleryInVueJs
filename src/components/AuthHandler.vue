<template>
  <div>
    please wait...
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AuthHandler",
  methods: mapActions(["finalizeLogin"]),
  beforeCreate() {},
  created() {
    this.finalizeLogin(window.location.hash);
  }
};
</script>
