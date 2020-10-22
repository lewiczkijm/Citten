<template>
  <div>
    <Loader/>
    <ErrMsg/>
    <AddPhoto
      v-show="showAddWin"
      v-on:exit="showAddWin=false"
    />
    <div :class="$style.btnpane">
      <button @click="showAddWin=true" class="button is-primary is-rounded is-large">
        + add
      </button>
    </div>
    <List :photos="list"/>

  </div>
</template>

<script>
import { mapState } from 'vuex'
import List from "../components/List";
import Loader from "../components/Loader";
import ErrMsg from "../components/ErrMsg";
import AddPhoto from "../components/AddPhoto";
export default {
  components: {
      AddPhoto,
      ErrMsg,
      Loader,
      List
  },
  asyncData: async function({store,error}){
    try{
        await store.dispatch("getListFromNet")
    } catch (err) {
        console.log(err);
        return error({
            statusCode: 404,
            message: 'Сервер не доступен'
        })

    }
    return {showAddWin:false}
  },
  computed:{
      ...mapState(["list"])
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

