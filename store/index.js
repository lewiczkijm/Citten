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

  },
  setCurrentFromObject({commit},photo){
    commit("SET_CURRENT",photo)
  },
  async setCurrentFromServer({commit},objectId){
    try{
      const photo = await this.$axios.$get(`/${objectId}`);
      commit("SET_CURRENT",photo)
    }catch(e){
      throw e
    }
  }
};
