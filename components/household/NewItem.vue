<template>
  <v-dialog v-model="dialog">
    <template v-slot:activator="{ on }">
      <v-btn v-on="on" color="primary" fab fixed bottom right
        ><v-icon>mdi-plus</v-icon></v-btn
      >
    </template>
    <v-card>
      <v-card-title class="primary white--text" primary-title>
        新規作成
      </v-card-title>
      <v-card-text>
        <v-radio-group row>
          <v-radio label="支出" value="expense"></v-radio>
          <v-radio label="収入" value="income"></v-radio>
        </v-radio-group>
        <v-menu
          v-model="menu"
          :close-on-content-click="false"
          :nudge-right="40"
          transition="scale-transition"
          offset-y
        >
          <template v-slot:activator="{ on }">
            <v-text-field
              v-model="date"
              v-on="on"
              label="日付を選択"
              readonly
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="date"
            @input="menu = false"
            no-title
          ></v-date-picker>
        </v-menu>
        <v-text-field label="項目"></v-text-field>
        <v-text-field label="金額"></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn @click="dialog = false" outlined color="blue-grey"
          >キャンセル</v-btn
        >
        <v-btn @click="dialog = false" outlined color="primary">登録</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      date: new Date().toISOString().substr(0, 10),
      menu: false
    }
  }
}
</script>
