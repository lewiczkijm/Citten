<template>
<div>
  <img :src="data.url" :alt="data.name"/>
  <span>{{data.name}}</span>
</div>
</template>

<script>
    export default {
        name: "Photo",
        props:["data"]
    }
</script>

<style scoped>

</style>
