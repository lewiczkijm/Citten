/**
 * Обшее состояние приложения
 * @type {{debug: boolean, state: {}}}
 */
export const store = {
  debug:true,
  timeout:3000,
  state:{
    list:[],
    current:{},
    errorMsg:""
  },

  /**
   * Добавление списка фотографий, или чего то к имеющемуся списку, в случае получения с сервера дополнительных сведений
   * @param listData {array}
   */
  pushList(listData){
    if (this.debug) console.log("pushList called with ", listData);
    this.state.list.push(...listData)
  },

  /**
   * Добавление нового фото
   * @param photo {Photo}
   * @param callback {function}
   */
  addToList(photo,callback){
    if (this.debug) console.log("addToList called with ", photo);
    callback(photo).then(res=>
      this.state.list.unshift(photo)
    ).catch(addErrorMsg)
  },

  /**
   * Удаление выбранного элемента
   * @param photo {Photo}
   * @param callback {function}
   */
  deleteFromList(photo,callback){
    if (this.debug) console.log("deleteFromList called with ", photo);
    callback(photo).then(res=>
      this.state.list = this.state.list.filter(el=> el !== photo)
    ).catch(addErrorMsg)
  },

  /**
   * Обновление элемента. Для обновления нужно выполнить копирование объекта и передать
   * измененную копию в photo
   * @param photo {photo}
   * @param callback {function}
   */
  updateInList(photo,callback){
    if (this.debug) console.log("updateInList called with ", photo);
    callback(photo).then(res=>
      this.state.list = this.state.list.map(el=>{
        if(el.name === photo.name) return photo;
        else return el
      })
    ).catch(addErrorMsg)
  },

  /**
   * Выбор вкимвного фото для показа на отдельной странице
   * @param photo
   */
  selectCurrentPhoto(photo){
    if (this.debug) console.log("selectCurrentPhoto called with ", photo);
    this.state.current = photo
  },

  /**
   * Добавление сообщения об ошибке. Сообшение предназначено для вывода сетевых ошибок.
   * через заданный промежуток времени оно исчезает
   * @param msg
   * @returns {Promise<void>}
   */
  async addErrorMsg(msg){
    if(!msg) return;
    if (this.debug) console.log("addErrorMsg called with ", msg);
    this.state.errorMsg = msg;
    await new Promise(resolve => setTimeout(resolve,this.timeout));
    this.state.errorMsg = "";
  }
};
