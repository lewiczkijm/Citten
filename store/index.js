const errTimeout = 3000;
const sleep = m => new Promise(r => setTimeout(r, m));
export const state = ()=>({
  list:[],
  current:[],
  errorMsg:''
});

export const mutations = {
  SET_LIST(state,list){
    state.list = list
  },
  SET_CURRENT(state,photo){
    state.current = photo
  }
};

export const actions = {
  //Первонвчальная загрузка списка изображений
  async getListFromNet({state,commit}){
    if(state.list.length) return;
    try{
      const list = await this.$axios.$get("");
      commit("SET_LIST",list)
    } catch (e) {
      throw e;
    }

  }
};
