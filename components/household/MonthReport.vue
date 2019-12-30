<template>
  <v-flex xs12>
    <v-card outlined>
      <v-list flat>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>収入</v-list-item-title>
          </v-list-item-content>
          <v-list-item-action-text class="subtitle-1">
            {{ separate(incomeSum) }}
          </v-list-item-action-text>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>支出</v-list-item-title>
          </v-list-item-content>
          <v-list-item-action-text class="subtitle-1">
            {{ separate(expenseSum) }}
          </v-list-item-action-text>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>損益</v-list-item-title>
          </v-list-item-content>
          <v-list-item-action-text class="subtitle-1">
            {{ separate(incomeSum - expenseSum) }}
          </v-list-item-action-text>
        </v-list-item>
      </v-list>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  computed: {
    incomeSum() {
      const incomeList = this.$store.getters.getIncomeList
      if (incomeList === null) {
        return 0
      }
      return incomeList.reduce((a, x) => (a += x.amount), 0)
    },
    expenseSum() {
      const expenseList = this.$store.getters.getExpenseList
      if (expenseList === null) {
        return 0
      }
      return expenseList.reduce((a, x) => (a += x.amount), 0)
    }
  },
  methods: {
    separate(num) {
      return '¥ ' + String(num).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')
    }
  }
}
</script>

<style scoped>
.table-end {
  align-items: flex-end;
}
</style>
