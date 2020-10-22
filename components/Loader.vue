<template>
  <div v-show="load">
    <div :class="$style.field">
      <div :class="$style.container">
        <img src="@/assets/images/loader.png" alt="O">
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from "vuex";
    export default {
        name: "Loader",
        computed:{
            ...mapState({load:"statusWhite"})
        }
    }
</script>

<style module>
  .field{
    position: absolute;
    top:0;
    left: 0;
    z-index: 10;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.2);
  }
  .container {
    margin: 12em auto;
    width: 150px;
    height: 150px;
    border: solid 2px #000;
    background: #ffffff;
    padding: 43px;
  }
</style>
