<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app fixed>
      <v-list nav dense>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app fixed color="primary" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
    </v-app-bar>
    <v-content>
      <v-container grid-list-lg text-xs-center>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      fixed: false,
      items: [
        { icon: 'mdi-apps', title: '家計簿', to: '/' },
        { icon: 'mdi-chart-bubble', title: '設定', to: '/inspire' }
      ],
      title: '家計簿'
    }
  }
}
</script>
