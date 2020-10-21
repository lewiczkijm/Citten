<template>
<div :class="$style.container">
  <div :class="$style.wrapper">
    <img :src="data.url" :alt="data.name"/>
  </div>
  <div :class="$style.downsaide">
    <span>{{data.name}}</span>
    <span><img src="@/assets/images/heart.png" :class="$style.like"> {{data.likes}}</span>
  </div>


</div>
</template>

<script>
    export default {
        name: "Photo",
        props:["data"]
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
</style>
