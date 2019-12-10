<template>
  <v-flex xs12>
    <v-card outlined>
      <v-subheader>収入詳細</v-subheader>
      <v-simple-table>
        <template v-slot:default>
          <tbody>
            <tr v-for="(item, key) in findIncomeList" :key="key">
              <td>{{ item.title }}</td>
              <td>{{ item.amount }}</td>
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
  }
}
</script>
