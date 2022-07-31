<template>
  <div
    id="app"
    class="is-flex is-flex-direction-column is-justify-content-center is-align-items-center mt-4"
  >
    <ArtDisplay />
    <CommentSection />
  </div>
</template>

<script>
import ArtDisplay from "./components/ArtDisplay/ArtDisplay.vue";
import CommentSection from "./components/CommentSection/CommentSection.vue";

export default {
  name: "App",
  components: { ArtDisplay, CommentSection },
};
</script>

<style lang="sass" scoped></style>
