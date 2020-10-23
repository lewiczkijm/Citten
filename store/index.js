const errTimeout = 3000;
const contentInPage = 24;

const sleep = m => new Promise(r => setTimeout(r, m));
export const state = ()=>({
  list:[],
  current:[],
  errorMsg:'',
  statusWhite:false,
  page:contentInPage,
  stopList:false
});

export const mutations = {
  SET_LIST(state,list){
    state.list = list
  },
  SET_NEXT_PAGE_LIST(state,listFragment){
    state.list.push(...listFragment);
    state.page += contentInPage;
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
  DELETE_PHOTO(state,objectId){
    state.list = state.list.filter(el=>el.objectId !== objectId)
  },
  ADD_NEW_PHOTO(state,photo){
    state.list.unshift(photo)
  },
  STOP_PAGING(state){
    state.stopList = true;
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
      const list = await this.$axios.$get(`/photos?sortBy=created%20desc&pageSize=${contentInPage}&offset=0`);
      commit("SET_LIST",list)
    } catch (e) {
      throw e;
    }

  },
  async getNextToList({state,commit}){
    if(state.stopList) return;
    commit("SET_STATUS_WHITE",true);
    try {
      const list = await this.$axios.$get(`/photos?sortBy=created%20desc&pageSize=${contentInPage}&offset=${state.page}`);
      if(list.length < contentInPage)
        commit("STOP_PAGING");

      commit("SET_NEXT_PAGE_LIST",list);
      commit("SET_STATUS_WHITE",false);
    } catch (e) {
      commit("SET_STATUS_WHITE",false);
      commit("SET_ERROR_MSG","Нет соединения! повторите попытку позже.");
      await sleep(errTimeout);
      commit("SET_ERROR_MSG","")
    }
  },
  // Выбор активной фотографии при нажатии на миниатюрке
  setCurrentFromObject({commit},photo){
    commit("SET_CURRENT",photo)
  },


  // Выбор активной фотографии по objectId при переходе по ссылке
  async setCurrentFromServer({commit},objectId){
    try{
      const photo = await this.$axios.$get(`/photos/${objectId}`);
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
      photo = await this.$axios.$put(`/photos/${photo.objectId}`,{likes:likes});
      commit("SET_LIKE",photo.objectId)
    }catch(e){
      commit("SET_ERROR_MSG","Нет соединения! повторите попытку позже.");
      await sleep(errTimeout);
      commit("SET_ERROR_MSG","")

    }
    commit("SET_STATUS_WHITE",false);
  },

  //Удаление фотографии
  async deletePhoto({commit},data){
    commit("SET_STATUS_WHITE",true);
    try{
      await this.$axios.$delete(`/photos/${data.objectId}`);
      commit("DELETE_PHOTO",data.objectId)
    }catch (e) {
      commit("SET_ERROR_MSG","Нет соединения! повторите попытку позже.");
      await sleep(errTimeout);
      commit("SET_ERROR_MSG","")
    }
    commit("SET_STATUS_WHITE",false);
  },

  //
  async addPhoto({commit},photo){
    commit("SET_STATUS_WHITE",true);
    try{
      photo = await this.$axios.$post('/photos',photo);
      commit("ADD_NEW_PHOTO",photo)
    }catch (e) {
      commit("SET_STATUS_WHITE",false);
      const error = {...e};
      let msg = "";
      if(error.response && error.response.data.code === 1155)
        msg = "Фото с таким именем уже существует!";
      else msg = "Нет соединения! повторите попытку позже.";
      commit("SET_ERROR_MSG",msg);
      await sleep(errTimeout);
      commit("SET_ERROR_MSG","");
      throw e
    }
    commit("SET_STATUS_WHITE",false);
  }
};
