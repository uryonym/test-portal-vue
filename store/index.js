import cloneDeep from 'lodash.clonedeep'

export const state = () => ({
  user: null
})

export const getters = {
  isAuthenticated(state) {
    return state.user ? state.user.email === 'uryonet@gmail.com' : false
  }
}

export const mutations = {
  setUser(state, { user }) {
    state.user = cloneDeep(user)
  }
}

export const actions = {
  login() {
    const provider = new this.$firebase.auth.GoogleAuthProvider()
    this.$auth.signInWithRedirect(provider)
  }
}
