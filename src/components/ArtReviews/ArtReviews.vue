<template>
  <div class="is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
    <h4 class="is-size-4 mt-4">Reviews</h4>
    <div
      class="reviews mb-2"
      v-for="review in submittedReviews"
      :key="review + new Date().getTime()"
    >
      <span>
        {{ review.message }}
      </span>
      <span class="has-text-right">
        {{ review.date }}
      </span>
    </div>
    <textarea
    data-testid="review-input"
      v-model="currentReview"
      class="reviews mt-2"
      placeholder="What feelings does this art invoke?"
      @keyup.enter="submit"
    />
    <button class="is-align-self-flex-end mt-2" @click="submit">Submit</button>
  </div>
</template>

<script>
export default {
  name: 'ArtReviews',
  data: () => ({
    currentReview: '',
    submittedReviews: [],
  }),
  methods: {
    submit() {
      this.submittedReviews.push({ message: this.currentReview, date: getDate() })
      this.currentReview = ''
    },
  },
}
function getDate() {
  let today = new Date()
  let dd = String(today.getDate()).padStart(2, '0')
  let mm = String(today.getMonth() + 1).padStart(2, '0') //janvier = 0
  let yyyy = today.getFullYear()

  return dd + '/' + mm + '/' + yyyy
}
</script>

<style lang="sass" scoped>
.reviews
    min-width: 200px
    width: 300px
    border-radius: 4px
    resize: none
    height: 100px
    padding: 0.5rem
    border: solid black 1px
    display: flex
    flex-direction: column
    justify-content: space-between
</style>
