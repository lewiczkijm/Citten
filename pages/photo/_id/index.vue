<template>
  <div>
    <div :class="$style.card">
      <div>
        <img :src="current.url">
        <div :class="$style.pane">
          <span :class="$style.likes"><img src="@/assets/images/heart32.png"><span>{{likes}}</span></span>
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
        asyncData({params,store}){
            // Загрузка изображений из сети только в случае надобности
            if(!!!store.state.current.name){

            }
            return {
                id:params.id,
                url:"https://vologda-oblast.ru/upload/iblock/0a8/koshki.jpg",
                name:"Lorem ipsum",
                likes:4,
                description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mattis diam sapien. Donec bibendum, diam a consequat ultrices, nunc velit lacinia orci, eu sollicitudin lacus nibh sit amet erat. Cras bibendum tincidunt dolor, vel egestas lorem venenatis non. Fusce ullamcorper feugiat bibendum. Duis nec arcu id leo mollis porttitor a volutpat ipsum. Vestibulum vel facilisis magna. Nunc at feugiat mi. Etiam id tortor feugiat turpis facilisis efficitur et ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi eleifend dapibus lacus et viverra. Donec facilisis dapibus dapibus. Ut rhoncus a sem vel posuere.`
            }
        },
        computed:{
            ...mapState(["current"])
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
