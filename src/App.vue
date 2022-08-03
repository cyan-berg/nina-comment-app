<template>
  <div
    id="app"
    class="is-flex is-flex-direction-column is-justify-content-center is-align-items-center mt-4"
  >
    <h3 class="is-size-3 has-text-centered is-capitalized">
      {{ user.name }}'s symptom journal
    </h3>
    <p class="py-4">
      Please click on the part of the body you want to make an entry about.
    </p>
    <PatientDummy />
    <EntrySection />
  </div>
</template>

<script>
import PatientDummy from "./components/PatientDummy/PatientDummy.vue";
import EntrySection from "./components/EntrySection/EntrySection.vue";

export default {
  name: "App",
  components: { PatientDummy, EntrySection },
  data: function () {
    return { user: { name: "Nina" } };
  },
};
</script>

<style lang="sass" scoped></style>
