<template>
  <div :class="$style.pageView">
    <div :class="$style.btnBack">
      <nuxt-link  to="/">
        <img src="@/assets/images/back.png">
      </nuxt-link>
    </div>
    <nuxt :class="$style.content"/>
  </div>
</template>

<script>
    export default {
        name: "singlePhoto"
    }
</script>

<style module>
  .pageView{
    background: #47494E;
    width: 100%;
    min-height: 100vh;
    position: absolute;
    color: #000000;
  }
  .btnBack{
    margin:10px;
  }
  .content {}
</style>
11
