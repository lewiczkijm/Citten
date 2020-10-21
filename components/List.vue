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
section{
  margin: auto;
  max-width: 1250px;
  display: flex;
  flex-direction: row;
  padding: 1.5em;
  flex-wrap: wrap;
}
</style>
