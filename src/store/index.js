import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    clientsQuestions: [
      {id:1, name: "Question number 1"},
      {id:2, name: "Question number 2"},
      {id:3, name: "Question number 3"},
      {id:4, name: "Question number 4"},
      {id:5, name: "Question number 5"},
      {id:6, name: "Question number 6"},
      {id:7, name: "Question number 7"},
      {id:8, name: "Question number 8"},
 ],
 oldIndex: '',
 newIndex: '',
  },
  mutations: {
    onEnd(state, event) {
      console.log(event)
      state.oldIndex = event.oldIndex
      state.newIndex = event.newIndex
      console.log(state.newIndex)
  }
  },
  actions: {
    onEnd({commit}, event) {
     commit('onEnd', event)
  }
  },
  modules: {
  }
})
