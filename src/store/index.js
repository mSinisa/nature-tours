import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tours: '',
    displayTours: '',
    rows: 0,
    showSpinner: false
  },
  mutations: {
    SET_TOURS(state, tours) {
      state.tours = tours;
    },
    SET_ROWS(state, rows) {
      state.rows = rows;
    },
    SET_DISPLAY_TOURS(state, displayTours) {
      state.displayTours = displayTours;
    },
    SET_SPINNER(state, spinner) {
      state.showSpinner = spinner;
    }
  },
  actions: {
    async getData({ commit }) {
      try {
        commit('SET_SPINNER', true);
        const res = await axios.get('tours.json');
        // const res = await axios.get(
        //   'https://api.jsonbin.io/b/5eb6e9ec47a2266b14759a9d',
        // );
        const data = res.data;
        commit('SET_SPINNER', false);
        console.log(data);
        commit('SET_TOURS', data);
        commit('SET_ROWS', data.length);
        commit('SET_DISPLAY_TOURS', data.slice(0, 3));
      } catch (err) {
        console.log(err.message);
      }
    },
    paginate({ commit, state }, { currentPage, perPage }) {
      const start = (currentPage - 1) * perPage;
      const tours = state.tours.slice(start, start + 3);
      commit('SET_DISPLAY_TOURS', tours);
    },
    updatePagination(
      { commit, dispatch },
      { foundTours, currentPage, perPage }
    ) {
      commit('SET_TOURS', foundTours);
      commit('SET_ROWS', foundTours.length);
      dispatch('paginate', { currentPage, perPage });
    },
    async search({ state, dispatch }, { text }) {
      await dispatch('getData');
      const foundTours = state.tours.filter(tour =>
        tour.name.toLowerCase().includes(text.toLowerCase())
      );
      dispatch('updatePagination', { foundTours, currentPage: 1, perPage: 3 });
    }
  },
  getters: {
    getTours(state) {
      return state.tours;
    },
    getRows(state) {
      return state.rows;
    },
    getDisplayTours(state) {
      return state.displayTours;
    },
    getShowSpinner(state) {
      return state.showSpinner;
    }
  },
  modules: {}
});
