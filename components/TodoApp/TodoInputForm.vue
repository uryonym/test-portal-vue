<template>
  <div>
    <v-text-field
      v-model="newTask"
      label="Input the Task"
      outlined
      @keypress.enter.native="addTask"
    ></v-text-field>
    <v-card>
      <v-list flat subheader>
        <v-subheader>タスクリスト</v-subheader>
        <v-list-item-group v-model="settings" multiple active-class="">
          <v-list-item v-for="(task, i) in tasks" :key="i">
            <template v-slot:default="{ active }">
              <v-list-item-action>
                <v-checkbox v-model="active"></v-checkbox>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title v-text="task"></v-list-item-title>
              </v-list-item-content>
            </template>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'TodoInputForm',
  data() {
    return {
      newTask: '',
      tasks: [],
      settings: []
    }
  },
  methods: {
    addTask() {
      if (this.newTask === '') return
      const taskList = this.tasks
      taskList.push(this.newTask)
      this.tasks = taskList
      this.newTask = ''
    }
  }
}
</script>
