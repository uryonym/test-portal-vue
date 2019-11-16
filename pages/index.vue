<template>
  <v-layout row wrap>
    <household-summary></household-summary>
    <date-picker></date-picker>
    <month-report></month-report>
  </v-layout>
</template>

<script>
import HouseholdSummary from '~/components/household/Summary'
import DatePicker from '~/components/household/DatePicker'
import MonthReport from '~/components/household/MonthReport'
export default {
  components: {
    HouseholdSummary,
    DatePicker,
    MonthReport
  }
}
</script>

<style></style>
