import router from '../../router'
import axios from '../../utils/axios'
const state = {
  isLoggedIn: false,
  user: {}
}
const getters = {
  isLoggedIn(state) {
    return state.isLoggedIn
  },
  getUser(state) {
    return state.user
  }
}

const mutations = {
  setUser(state, data) {
    state.user = data
    state.isLoggedIn = true
  },
  logout(state, data) {
    state.user = {}
    state.isLoggedIn = false
  }
}

const actions = {
  login({ commit }, data) {
    const { accessToken, ...userData } = data
    commit('setUser', userData)
    axios.defaults.headers.authorization = `Bearer ${accessToken}`
    router.push('/')
  },
  logout({ commit }, data) {
    commit('logout')
    delete axios.defaults.headers.Authorization
    router.push('/login')
  }
}
export default { namespaced: true, state, getters, mutations, actions }
