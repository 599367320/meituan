import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  position: {},
  userName: ''
}

const mutations = {
  setPosition (state, val) {
    state.position = val
  },
  setUserName (state, val) {
    state.userName = val
  }
}

const actions = {
  // setPosition({ commit }, val) {
  //     // 异步请求后端获取当前位置数据
  //     commit('setPosition', val)
  // }
  setPosition (state, val) {
    // 异步请求后端获取当前位置数据
    state.commit('setPosition', val)
  }
}

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production', // 开启严格模式
  state,
  mutations,
  actions
})
