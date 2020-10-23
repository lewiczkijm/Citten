<template>
    <div class="wrapper">
      <img src="@/assets/images/err.png">
      <span>{{error.message}}</span>
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
  margin: 2em 10em;
  font-size: 1.5em;
}
.wrapper a{
  display: block;
  margin-top: 2em;
  text-decoration: underline;
}
.wrapper span{
  padding: 32px 2em;
  display: inline-block;
  height: 96px;
  vertical-align: top;
}
</style>
