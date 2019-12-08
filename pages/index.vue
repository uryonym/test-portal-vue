<template>
  <v-layout row wrap>
    <household-summary></household-summary>
    <date-picker></date-picker>
    <month-report></month-report>
    <income-list></income-list>
    <expense-list></expense-list>
    <memo></memo>
  </v-layout>
</template>

<script>
import { mapGetters } from 'vuex'
import HouseholdSummary from '~/components/household/Summary'
import DatePicker from '~/components/household/DatePicker'
import MonthReport from '~/components/household/MonthReport'
import IncomeList from '~/components/household/IncomeList'
import ExpenseList from '~/components/household/ExpenseList'
import Memo from '~/components/household/Memo'
export default {
  components: {
    HouseholdSummary,
    DatePicker,
    MonthReport,
    IncomeList,
    ExpenseList,
    Memo,
  },
  computed: {
    ...mapGetters(['householdData'])
  },
  async asyncData({ store }) {
    if (store.getters.householdData.length) {
      return
    }
    await store.dispatch('getHouseholdData')
  }
}
</script>

<style></style>
