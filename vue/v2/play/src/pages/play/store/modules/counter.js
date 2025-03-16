const counter = {
  namespaced: true,
  // 初始化 state
  state: () => ({
    count: 0,
  }),
  // 同步操作，直接修改
  mutations: {
    INCREMENT(state, val) {
      state.count += val;
    },
    DECREMENT(state, val) {
      state.count -= val;
    },
  },
  actions: {
    increment({ commit }, val) {
      commit("INCREMENT", val);
    },
    decrement({ commit }, val) {
      commit("DECREMENT", val);
    },
    // 异步操作
    asyncIncrement({ commit }, val) {
      setTimeout(() => {
        commit("INCREMENT", val * 100);
      }, 3000);
    },
  },
};

export default counter;
