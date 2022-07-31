<template>
  <div id="" class="">
    <h1 class="is-size-1 has-text-centered">Title</h1>
    <div class="image-box">
      <img src="@/assets/stinkthereforeiam.jpg" alt="Title" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ArtDisplay",
  components: {},
};
</script>

<style lang="sass" scoped>
img
   display: flex
   max-width: 300px
   max-height: 200px
   width: auto
   height: auto

.image-box
   display: flex
   align-items: center
   justify-content: center
   max-width: 300px
   height: 200px
</style>
