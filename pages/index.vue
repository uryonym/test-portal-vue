<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <todo-input-form />
    </v-flex>
  </v-layout>
</template>

<script>
import TodoInputForm from '~/components/TodoApp/TodoInputForm'

export default {
  components: {
    TodoInputForm
  }
}
</script>
