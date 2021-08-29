import axios from 'axios';

const state = {
    user: null,
    posts: null,
};
const getters = {
    isAuthenticated: (state) => !!state.user,
    StatePosts: (state) => state.posts,
    StateUser: (state) => state.user,
};
const actions = {

    async Register({dispatch}, form) {
        await axios.post('/users/signup', form)
        await dispatch('LogIn', form)
      },

    async LogIn({commit}, User) {
        // console.log(User);
        const res = await axios.post("/users/login", User);
        // console.log('res : ', res);
        const userData = res.data;
        // console.log(userData);
        // await commit("setUser", User.get("firstName"));
        await commit("setUser", userData);
    },

    async CreatePost({ dispatch }, post) {
        await axios.post("post", post);
        return await dispatch("GetPosts");
      },

    async GetPosts({commit}) {
        let response = await axios.get("posts");
        commit("setPosts", response.data);
    },

    async LogOut({ commit }) {
        let user = null;
        commit("logout", user);
    },
};
const mutations = {
    setUser(state, userData) {
        state.user = userData;
      },
    
      setPosts(state, posts) {
        state.posts = posts;
      },
      
      logout(state, user) {
        state.user = user;
      },
};
export default {
  state,
  getters,
  actions,
  mutations
};