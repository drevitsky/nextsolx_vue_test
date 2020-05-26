import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    chartList: []
  },
  mutations: {
    ADD_CHART: (state, chartNew) => {
      return state.chartList.push(chartNew)
    },
    CHANGE_TYPE: (state, { id, type }) => {
      return state.chartList.map(elem => {
        if (elem.id === id) {
          elem.options.chart.type = type
        }
      })
    },
    REMOVE_CHART: (state, id) => {
      // eslint-disable-next-line no-return-assign
      return state.chartList = state.chartList.filter((item) => {
        if (item.id !== id) {
          return item
        }
      })
    }

  },
  actions: {
    addChart (store, chartNew) {
      store.commit('ADD_CHART', chartNew)
    },
    changeType (store, { id, type }) {
      store.commit('CHANGE_TYPE', {
        id,
        type
      })
    },
    removeChart (store, id) {
      store.commit('REMOVE_CHART', id)
    }
  },
  modules: {
  },
  getters: {
    chartList: state => state.chartList
  }
})
