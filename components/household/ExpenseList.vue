<template>
  <v-flex xs12>
    <v-card outlined>
      <v-subheader>支出詳細</v-subheader>
      <v-simple-table>
        <template v-slot:default>
          <tbody>
            <tr v-for="(item, key) in findExpenseList" :key="key">
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
    findExpenseList() {
      return this.$store.getters.getExpenseList
    }
  }
}
</script>
