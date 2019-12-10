<template>
  <v-flex xs12>
    <v-textarea
      v-model="findMemoData"
      class="memo"
      outlined
      solo
      flat
      auto-grow
      background-color="white"
    ></v-textarea>
  </v-flex>
</template>

<script>
export default {
  computed: {
    findMemoData() {
      return this.$store.getters.getMemoData
    }
  }
}
</script>

<style>
.memo {
  font-size: 1em;
}
.theme--light.v-text-field--outlined fieldset {
  border-color: rgba(0, 0, 0, 0.12);
}
</style>
