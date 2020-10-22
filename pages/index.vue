<template>
  <div>
    <Loader/>
    <ErrMsg/>
    <div :class="$style.btnpane">
      <button class="button is-primary is-rounded is-large">
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
export default {
  components: {
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

