import axios from 'axios';

const state = {
  jobs: []
};

const getters = {
  allPosts: state => state.jobs
};

const actions = {
  async fetchPosts({ commit }) {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/comments'
    );

    commit('setPosts', response.data);
  },
  
  async deletePost({ commit }, id) {
    await axios.delete(`https://jsonplaceholder.typicode.com/comments/${id}`);

    commit('removePost', id);
  },
  
  async filterPosts({ commit }, e) {
    // Get search number
    console.log(e);
    const limit = parseInt(
      parseInt(e.target.value)
    );

    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/comments?_limit=${limit}`
    );

    commit('setPosts', response.data);
  },

  async updatePost({ commit }, updJob) {
    const response = await axios.put(
      `https://jsonplaceholder.typicode.com/comments/${updJob.id}`,
      updJob
    );

    console.log(response.data);

    commit('updatePosts', response.data);
  }
};

const mutations = {
  setPosts: (state, jobs) => (state.jobs = jobs),
  removePost: (state, id) =>
    (state.jobs = state.jobs.filter(job => job.id !== id)),
  updatePosts: (state, updJob) => {
    const index = state.jobs.findIndex(job => job.id === updJob.id);
    if (index !== -1) {
      state.jobs.splice(index, 1, updJob);
    }
  }
};


export default {
  state,
  getters,
  actions,
  mutations
};
