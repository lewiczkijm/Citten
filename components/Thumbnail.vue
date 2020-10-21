<template>
<div :class="$style.container">
  <div :class="$style.wrapper">
    <img :class="$style.delete" src="@/assets/images/delete.png" v-on:click="del"/>
    <nuxt-link :to="`photo/${data.objectId}`"><img :src="data.url" :alt="data.name"/></nuxt-link>
  </div>
  <div :class="$style.downsaide">
    <span>{{data.name}}</span>
    <span v-on:click="like"><img src="@/assets/images/heart.png" :class="$style.like"> {{data.likes}}</span>
  </div>


</div>
</template>

<script>
    export default {
        name: "Thumbnail",
        props:["data"],
        methods:{
            like(ev){alert(1)},
            del(ev){alert(2)}
        }
    }
</script>

<style module>
  .container{
    padding: 0.6em;
    width: 300px;
  }
  .wrapper{
    height: 170px;
    overflow:hidden;
    background: #47494E;
  }
  .downsaide{
    padding: 0 0.2em;
    display: flex;
    justify-content: space-between;
  }
  .downsaide span{
    font-weight: bold;
  }
  .like{
    position: relative;
    top: 3px;
  }
  .delete{
    position: absolute;
    margin-top: 5px;
    margin-left: 247px;
  }
</style>
