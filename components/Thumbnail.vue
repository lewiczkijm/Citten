<template>
<div :class="$style.container">
  <div :class="$style.wrapper">
    <img :class="$style.delete" src="@/assets/images/delete.png" v-on:click="del(data)"/>
    <nuxt-link :to="`photo/${data.objectId}`"><img @click="select(data)" :src="data.url" :alt="data.name"/></nuxt-link>
  </div>
  <div :class="$style.downsaide">
    <span>{{data.name}}</span>
    <span v-on:click="like(data)" :class="$style.likesite">
      <img src="@/assets/images/heart.png" :class="$style.like">
      {{data.likes}}
    </span>
  </div>


</div>
</template>

<script>
export default {
    name: "Thumbnail",
    props:["data"],
    methods:{
        like(data){
            this.$store.dispatch("addLike",data)
        },
        del(data){
            this.$store.dispatch("deletePhoto",data)
        },
        select(data){
            this.$store.dispatch("setCurrentFromObject",data)
        }
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
  .likesite{
    display: flex;
  }
  .likesite img{
    width: 16px;
    height: 16px;
    margin-right: 0.2em;
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
