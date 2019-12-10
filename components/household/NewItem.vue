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
        <v-radio-group v-model="inputBalance" row>
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
              v-model="inputDate"
              v-on="on"
              label="日付を選択"
              readonly
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="inputDate"
            @input="menu = false"
            no-title
            full-width
          ></v-date-picker>
        </v-menu>
        <v-text-field v-model="inputTitle" label="項目"></v-text-field>
        <v-text-field
          v-model="inputAmount"
          @blur="setBlur"
          @keyup="setKeyup"
          @keydown="setKeydown"
          @keypress="setKeypress"
          label="金額"
          prefix="¥"
          type="tel"
        ></v-text-field>
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
      menu: false,
      inputBalance: 'expense',
      inputDate: new Date().toISOString().substr(0, 10),
      inputTitle: '',
      inputAmount: '',
      isIme: false
    }
  },
  methods: {
    addFigure(value) {
      const originValue = value
      value = this.removeFigure(value)
      value = parseInt(value, 10)
      if (isNaN(value)) return originValue
      return value.toString().replace(/(¥d)(?=(¥d{3})+$)/g, '$1,')
    },
    removeFigure(value) {
      if (value.length === 0) return ''
      const num = Number(value.toString().replace(/,/g, ''))
      if (isNaN(num)) return value
      return num
    },
    setBlur() {
      this.inputAmount = this.addFigure(this.inputAmount)
    },
    setKeyup() {
      if (this.isIme === false)
        this.inputAmount = this.addFigure(this.inputAmount)
    },
    setKeydown() {
      this.isIme = true
    },
    setKeypress() {
      this.isIme = false
    }
  }
}
</script>
