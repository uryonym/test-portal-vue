<template>
  <v-flex xs12>
    <v-card outlined>
      <v-list flat>
        <v-subheader>支出詳細</v-subheader>
        <v-list-item-group>
          <v-list-item v-for="(item, i) in findExpenseList" :key="i">
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
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
