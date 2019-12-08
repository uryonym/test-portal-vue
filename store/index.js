import cloneDeep from 'lodash.clonedeep'

export const state = () => ({
  user: null,
  currentMonth: null,
  householdData: []
})

export const getters = {
  isAuthenticated(state) {
    return state.user ? state.user.email === 'uryonet@gmail.com' : false
  },
  householdData: (state) => state.householdData,
  getCurrentMonth: (state) => state.currentMonth,
}

export const mutations = {
  setUser(state, { user }) {
    state.user = cloneDeep(user)
  },
  setCurrentMonth(state, payload) {
    state.currentMonth = payload
  },
  setHouseholdData(state, { householdData }) {
    state.householdData = householdData
  }
}

export const actions = {
  login() {
    const provider = new this.$firebase.auth.GoogleAuthProvider()
    this.$auth.signInWithRedirect(provider)
  },
  async getHouseholdData({ commit }) {
    const tmpData = []
    await this.$firestore
      .collection('household_list')
      .orderBy('month')
      .get()
      .then((res) => {
        res.forEach((doc) => {
          tmpData.push(doc.data())
        })
      })
    commit('setHouseholdData', { householdData: tmpData })
  }
}
