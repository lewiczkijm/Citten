<template>
    <div class="wrapper">
      <div style="display: flex">
        <img src="@/assets/images/err.png">
        <span>{{error.message}}</span>
      </div>
        <nuxt-link to="/">Home</nuxt-link>
    </div>
</template>

<script>
    export default {
        name: "error",
        props:["error"]
    }
</script>

<style scoped>
.wrapper {
  margin: 2em auto;
  padding: 0 1em;
  width: fit-content;
  font-size: 1.5em;
}
.wrapper a{
  display: block;
  margin-top: 1em;
  text-decoration: underline;
}
.wrapper span{
  padding: 16px 1em;
  display: inline-block;
  height: 96px;
  vertical-align: top;
}
</style>
