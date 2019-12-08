import cloneDeep from 'lodash.clonedeep'

export const state = () => ({
  user: null,
  currentMonth: null,
})

export const getters = {
  isAuthenticated(state) {
    return state.user ? state.user.email === 'uryonet@gmail.com' : false
  }
  },
  getCurrentMonth: (state) => state.currentMonth,
}

export const mutations = {
  setUser(state, { user }) {
    state.user = cloneDeep(user)
  },
  setCurrentMonth(state, payload) {
    state.currentMonth = payload
  }
}

export const actions = {
  login() {
    const provider = new this.$firebase.auth.GoogleAuthProvider()
    this.$auth.signInWithRedirect(provider)
  }
}
