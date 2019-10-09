import cloneDeep from 'lodash.clonedeep'
import dayjs from 'dayjs'

export const state = () => ({
  user: null
})

export const getters = {
  user: state => state.user
}

export const mutations = {
  setUser(state, {user}) {
    state.user = cloneDeep(user)
  }
}

export const actions = {

}