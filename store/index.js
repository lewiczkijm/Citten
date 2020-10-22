const errTimeout = 3000;
const sleep = m => new Promise(r => setTimeout(r, m));
export const state = ()=>({
  list:[],
  current:[],
  errorMsg:'',
  statusWhite:false
});

export const mutations = {
  SET_LIST(state,list){
    state.list = list
  },
  SET_CURRENT(state,photo){
    state.current = photo
  },
  SET_LIKE(state,objectId){
    if(!state.list.length){
      state.current.likes +=1;
      return
    }
    for(let i = 0;i <state.list.length;i ++){
      if(state.list[i].objectId === objectId)
        state.list[i].likes += 1;
    }
  },


  SET_STATUS_WHITE(state,value){
    state.statusWhite = value;
  },

  SET_ERROR_MSG(state,msg){
    state.errorMsg = msg
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
      console.log(e);
      throw e;
    }

  },

  // Выбор активной фотографии при нажатии на миниатюрке
  setCurrentFromObject({commit},photo){
    commit("SET_CURRENT",photo)
  },


  // Выбор активной фотографии по objectId при переходе по ссылке
  async setCurrentFromServer({commit},objectId){
    try{
      const photo = await this.$axios.$get(`/${objectId}`);
      commit("SET_CURRENT",photo)
    }catch(e){
      throw e
    }
  },

  // добавление лайка
  async addLike({commit},photo){
    const likes = photo.likes + 1;
    commit("SET_STATUS_WHITE",true);
    try{
      photo = await this.$axios.$put(`/${photo.objectId}`,{likes:likes});
      commit("SET_LIKE",photo.objectId)
    }catch(e){
      commit("SET_ERROR_MSG","Нет соединения! повторите попытку позже.");
      await sleep(errTimeout);
      commit("SET_ERROR_MSG","")

    }
    commit("SET_STATUS_WHITE",false);
  }
};
