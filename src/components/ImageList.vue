<template>
  <div>
    <img 
      :src="image.link"
      :key="image.link"
      v-for="image in allImages"
      alt=""
    />
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "ImageList",
  computed: mapGetters(["allImages"]),
  methods: mapActions(["fetchImages"]),
  created() {
    this.fetchImages();
  }
};
</script>

