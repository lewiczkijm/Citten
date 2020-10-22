<template>
  <div>
    <div :class="$style.card">
      <div>
        <img :src="current.url">
        <div :class="$style.pane">
          <span :class="$style.likes" @click="like(current)">
            <img src="@/assets/images/heart32.png">
            <span>{{current.likes}}</span>
          </span>
          <img src="@/assets/images/delete.png">
        </div>
      </div>
    </div>

    <div :class="$style.legend">
      <h2>{{current.name}}</h2>
      <p>{{current.description}}</p>
    </div>
  </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        name: "index.vue",
        layout:"singlePhoto",
        async asyncData({params,store,error}){
            // Загрузка изображений из сети только в случае надобности
            if(!!!store.state.current.name){
              try {
                  await store.dispatch("setCurrentFromServer",params.id)
              } catch (e) {
                  // console.log(e);
                  return error({
                      statusCode: 404,
                      message: 'Страница не найдена'
                  })
              }
            }
        },
        computed:{
            ...mapState(["current"])
        },
        methods:{
            like(data){
                this.$store.dispatch("addLike",data)
            }
        }
    }
</script>

<style module>
.card {
  margin: 4em auto;
  margin-bottom: 7em;
  width: fit-content;
}
.pane {
  display: flex;
  justify-content: space-between;
}
.pane img {
  width: 32px;
  height: 32px;
}
.likes{}
.likes span {
  font-size: 1.4em;
  vertical-align: top;
  padding-left: 0.6em;
}
.legend {
  margin: 0 auto;
  width: fit-content;
  padding: 1.5em;
  background: #eeeeee;
}
.legend h2 {
  margin: 0.6em 0;
  font-size: 120%;
  font-weight: bold;
}
.legend p {
  width: 600px;
}
</style>
