<template>
  <div>
    <div :class="$style.btnpane">
      <button class="button is-primary is-rounded is-large">
        + add
      </button>
    </div>
    <List :photos="photos"/>

  </div>
</template>

<script>
import {axiosServer} from "../axios"
import store from "../data/store"
import List from "../components/List";
export default {
  components: {
      List
  },
  asyncData: async function(){
      /*
      * Загрузка данных на стороне сервера будет работать через axios
      * Хардкод rest api здесь - не выход. Но пока так будет
      * */

      if(process.server){
          let query= await axiosServer.get("");
          store.pushList(query.data);
      }
      return {
          // Заглушка для списка фотографий
          photos:store.state.list
      }
  }
}
</script>

<style module>
  .btnpane{
    padding: 0.6em 2.5em;
    text-align: right;
    background: #eeeeee;
  }
</style>

