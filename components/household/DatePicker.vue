<template>
  <v-flex>
    <v-date-picker
      v-model="picker"
      full-width
      type="month"
      no-title
      locale="ja"
      class="v-card--outlined"
      show-current="false"
    ></v-date-picker>
  </v-flex>
</template>

<script>
export default {
  computed: {
    picker: {
      get() {
        return this.$store.getters.getCurrentMonth
      },
      set(value) {
        this.$store.commit('setCurrentMonth', value)
      }
    }
  },
  created() {
    const today = new Date()
    const currentMonth =
      today.getFullYear() + '-' + ('00' + (today.getMonth() + 1)).slice(-2)
    this.$store.commit('setCurrentMonth', currentMonth)
  }
}
</script>
