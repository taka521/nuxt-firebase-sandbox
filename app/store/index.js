import cloneDeep from 'lodash.clonedeep'
import dayjs from 'dayjs'

export const state = () => ({
  user: null
})

export const getters = {
  user: state => state.user,
  isAuthenticated: state => state.user !== null
}

export const mutations = {
  SET_USER(state, { user }) {
    state.user = cloneDeep(user)
  }
}

export const actions = {
  async setUser({ commit }, { user }) {
    commit('SET_USER', user)
  }
}