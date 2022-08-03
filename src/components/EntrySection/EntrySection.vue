<template>
  <div>
    <h1 class="is-size-1 has-text-centered">Entry</h1>
    <div class="comment-box">
      Here is a comment. Here is a comment. Here is a comment.
    </div>
  </div>
</template>

<script>
export default {
  name: "EntrySection",
  components: {},
};
</script>

<style lang="sass" scoped>
.comment-box
  border: solid black 1px
  border-radius: .25rem
  padding: 1rem
  max-width: 360px
</style>
