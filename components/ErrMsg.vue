<template>
  <div v-show="msg">
    <div :class="$style.field">
      <div :class="$style.container">
        <img src="@/assets/images/err.png" alt="!">
        <div :class="$style.textContent">{{msg}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from "vuex"
    export default {
        name: "ErrMsg",
        computed:{...mapState({msg:"errorMsg"})}
    }
</script>

<style module>
  .field{
    position: fixed;
    top:0;
    left: 0;
    z-index: 200;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.2);
  }
  .container {
    margin: 12em auto;
    width: 400px;
    height: 150px;
    border: solid 2px #000;
    background: #ffffff;
    padding: 27px;
    display:flex;
  }
  .textContent{
    padding: 0.5em 1em;
  }
</style>
