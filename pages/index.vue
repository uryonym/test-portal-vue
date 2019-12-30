<template>
  <v-layout row wrap>
    <v-flex xs12>
      <h2 class="title text-center">{{ pageTitle }}</h2>
    </v-flex>
    <household-summary></household-summary>
    <date-picker></date-picker>
    <month-report></month-report>
    <income-list></income-list>
    <expense-list></expense-list>
    <memo></memo>
    <new-item></new-item>
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
import NewItem from '~/components/household/NewItem'
export default {
  components: {
    HouseholdSummary,
    DatePicker,
    MonthReport,
    IncomeList,
    ExpenseList,
    Memo,
    NewItem
  },
  computed: {
    ...mapGetters(['householdData']),
    pageTitle() {
      const pickDate = this.$store.getters.getCurrentMonth
      const year = pickDate.substr(0, 4)
      const month = pickDate.substr(-2)
      return year + '年' + month + '月' + ' 収支概要'
    }
  },
  async asyncData({ store }) {
    if (store.getters.householdData.length) {
      return
    }
    await store.dispatch('getHouseholdData')
  },
  created() {
    const today = new Date()
    const currentMonth =
      today.getFullYear() + '-' + ('00' + (today.getMonth() + 1)).slice(-2)
    this.$store.commit('setCurrentMonth', currentMonth)
  }
}
</script>
