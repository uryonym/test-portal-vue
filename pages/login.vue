<template>
  <v-layout row wrap>
    <v-flex xs12>
      ログインしてください
    </v-flex>
    <v-flex xs12>
      <v-btn color="primary" outlined @click.stop="handleSignin"
        >GoogleLogin</v-btn
      >
    </v-flex>
  </v-layout>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  async mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
    })
    const user = await new Promise((resolve, reject) => {
      this.$auth.onAuthStateChanged((user) => resolve(user))
    })
    this.$nuxt.$loading.finish()
    this.$store.commit('setUser', { user })
    if (user) {
      this.$router.push('/')
    }
  },
  methods: {
    ...mapActions(['login']),
    handleSignin() {
      this.login()
    }
  }
}
</script>
