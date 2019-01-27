import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {}, // アプリケーション自体はユーザーが個々で使用するため1人のみ管理
    loggedIn: false
  },

  mutations: {
    onAuthStateChanged(state, user) {
      state.user = user;
    },
    onUserLoggedInChanged(state, loggedIn) {
      state.loggedIn = loggedIn; // ログイン状態は true
    }
  },

  getters: {
    user(state) {
      return state.user;
    },
    isSingedIn(state) {
      return state.loggedIn;
    }
  },

  actions: {}
});
