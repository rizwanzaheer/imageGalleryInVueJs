<template>
  <div v-if="isLoggedIn" class="image-container">
    <img 
      :src="image.link"
      :key="image.link"
      v-for="image in allImages"
      alt=""
    />
  </div>
  <h2 v-else>Login to get started!</h2>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "ImageList",
  computed: mapGetters(["allImages", "isLoggedIn"]),
  methods: mapActions(["fetchImages"]),
  created() {
    this.fetchImages();
  }
};
</script>


<style scoped>
.image-container {
  columns: 3;
  column-gap: 0;
}
img {
  width: 100%;
  padding: 5px;
}
</style>


