<template>
  <div id="app" class="is-flex is-justify-content-center">
    <div class="is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
      <ArtTitle title="I Stink Therefore I am" class="mb-4" />
      <img alt="Vue logo" src="./assets/stinkthereforeiam.jpg" class="art-image" />
      <ArtReviews />
    </div>
  </div>
</template>

<script>
import ArtTitle from './components/ArtTitle/ArtTitle'
import ArtReviews from './components/ArtReviews/ArtReviews'

export default {
  name: 'App',
  components: {
    ArtTitle,
    ArtReviews,
  },
}
</script>

<style lang="sass" scoped>
.art-image
  max-width: 200px
  max-height: 200px
</style>
