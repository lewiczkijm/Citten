<template>
  <div :class="$style.field">
    <div :class="$style.container"></div>
  </div>
</template>

<script>
    export default {
        name: "ErrMsg"
    }
</script>

<style module>
  .field{
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0);
  }
  .container {

  }
</style>
