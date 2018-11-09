const state = {
  token: null
};
const getters = {
  isLoggedIn: state => !!state.token
};
const actions = {
  logout: ({ commit }) => {

  }
};
const mutations = {
  setToken: (state, token) => {
    state.token = token;
  }
};