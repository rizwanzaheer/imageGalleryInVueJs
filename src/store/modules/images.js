import api from '../../api/imgur';
import { router } from '../../main';

const state = {
  images: []
};

const getters = {
  allImages: state => state.images
};

const actions = {
  // login: () => {
  //   api.login();
  // },
  // logout: ({ commit }) => {
  //   commit('setToken', null);
  //   window.localStorage.removeItem('imgur_token');
  // },
  // finalizeLogin({ commit }, hash) {
  //   const query = qs.parse(hash.replace('#', ''));
  //   commit('setToken', query.access_token);
  //   window.localStorage.setItem('imgur_token', query.access_token);
  //   router.push('/');
  // }
  async fetchImages({ rootState, commit }) {
    const { token } = rootState.auth;
    const response = await api.fetchImages(token);
    commit('setImages', response.data.data);
  },
  async uploadImages({ rootState }, images) {
    const { token } = rootState.auth;

    await api.upload(images, token);
    router.push('/');
  }
};

const mutations = {
  setImages: (state, images) => {
    state.images = images;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};