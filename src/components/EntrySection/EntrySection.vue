<template>
  <div>
    <h1 class="is-size-1 has-text-centered">Entry</h1>
    <textarea class="new-entry" v-model="newEntryText" data-testid="textarea" />
    <button class="m-2" @click="submit" data-testid="submitbutton">
      Submit
    </button>
    <ul>
      <li class="entries" v-for="entry in entries" :key="entry.id">
        {{ entry.text }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "EntrySection",
  components: {},
  data: function () {
    return {
      entries: [
        {
          id: "13.06.2022",
          date: "13.06.2022",
          text: "This entry was made later than the first.",
        },
        {
          id: "01.06.2022",
          date: "01.06.2022",
          text: "This is the first entry ever made.",
        },
      ],
      newEntryText: "",
    };
  },
  methods: {
    submit() {
      const datetime = new Date();
      this.entries.unshift({
        id: datetime.getTime(),
        date: datetime.toLocaleDateString("en-UK"),
        text: this.newEntryText,
      });
    },
  },
};
</script>

<style lang="sass" scoped>
.new-entry
  border: solid black 1px
  border-radius: .25rem
  padding: 1rem
  max-width: 360px
  margin-bottom: 1rem
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2) inset

.entries
  border: solid black 1px
  border-radius: .25rem
  padding: 1rem
  margin-top: .5rem
  max-width: 360px
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2)
</style>
