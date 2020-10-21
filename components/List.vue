<template>
  <section>
    <Photo v-for="image in photos"
           :data="image"
           :url="image.url"
           :name="image.name"
           :description="image.description"
           :key="image.name"
    />
  </section>
</template>

<script>
    import Photo from "./Photo";
    export default {
        name: "List",
        components: {Photo},
        props:["photos","count"],
        computed:{
        }
    }
</script>

<style scoped>

</style>
