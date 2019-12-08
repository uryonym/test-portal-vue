<template>
  <v-flex xs12>
    <v-card outlined>
      <v-list flat>
        <v-subheader>収入詳細</v-subheader>
        <v-list-item-group>
          <v-list-item v-for="(item, i) in findIncomeList" :key="i">
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
    findIncomeList() {
      return this.$store.getters.getIncomeList
    }
  }
}
</script>
