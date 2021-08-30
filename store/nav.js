// States
export const state = () => ({
  drawer: false,
})
// mutations
export const mutations = {
  toggle(state) {
    state.drawer = !state.drawer
  },
}

// Getters
export const getters = {
  getDrawerState(state) {
    return state.drawer
  },
}
