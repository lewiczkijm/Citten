<template>
<div>
  <img :src="url"/>
  <span>{{name}}</span>
</div>
</template>

<script>
    export default {
        name: "Photo",
        props:["url","name","description"]
    }
</script>

<style scoped>

</style>
