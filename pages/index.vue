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
    <List v-endpage="loadNext" :photos="list"/>

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
  methods:{
      loadNext(){
          this.$store.dispatch("getNextToList")
      }
  },
  computed:{
      ...mapState(["list"])
  },
    directives:{
      endpage:{
          inserted:function (el, binding) {
              let trigger = true;
              function act(){
                  if(window.pageYOffset + window.innerHeight >= document.body.scrollHeight - 50 && trigger) {

                      binding.value();
                      trigger = false;
                      setTimeout(()=>trigger=true,1500)
                  }

              }
              window.addEventListener("touchmove",act);
              window.addEventListener("scroll",act);
          }
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

