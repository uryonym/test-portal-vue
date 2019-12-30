<template>
  <v-flex xs12>
    <v-card outlined>
      <v-subheader>収入詳細</v-subheader>
      <v-divider></v-divider>
      <v-simple-table>
        <template v-slot:default>
          <tbody>
            <tr v-for="(item, key) in findIncomeList" :key="key">
              <td>{{ dispDate(item.date) }}</td>
              <td class="text-center">{{ item.title }}</td>
              <td class="text-right">{{ separate(item.amount) }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  computed: {
    findIncomeList() {
      return this.$store.getters.getIncomeList
    }
  },
  methods: {
    dispDate(date) {
      return ('0' + date.toDate().getDate()).slice(-2) + '日'
    },
    separate(num) {
      return '¥ ' + String(num).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')
    }
  }
}
</script>
