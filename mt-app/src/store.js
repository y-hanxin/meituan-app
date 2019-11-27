import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
const state = {
  position: '北京',
  userName: ''
}
const mutation = {
  setPosition (state, val) {
    state.position = val;
  },
  setUserName (state, val) {
    state.userName = val;
  }
};
const actions = {
  setPosition ({ commit }, val) {
    commit('setposition', val)
  }
}

export default new Vuex.Store({
  state,
  mutation,
  actions
})