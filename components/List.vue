<template>
  <section>
    <Thumbnail v-for="image in photos"
           :data="image"
           :url="image.url"
           :name="image.name"
           :description="image.description"
           :key="image.name"
    />
  </section>
</template>

<script>
    import Thumbnail from "./Thumbnail";
    export default {
        name: "List",
        components: {Thumbnail},
        props:["photos","count"],
        computed:{
        }
    }
</script>

<style scoped>
section{
  margin: auto;
  display: flex;
  flex-direction: row;
  padding: 1.5em;
  flex-wrap: wrap;
}

/* Вывод изображений точно по центру при любом разрешении экрана */
@media (min-width:1280px){
  section{max-width: 1250px;}
}
@media (min-width:970px) and (max-width: 1279px){
  section{max-width: 948px;}
}
@media (min-width: 670px) and (max-width: 969px){
  section{max-width: 648px;}
}
@media (max-width: 669px) {
  section{max-width: 348px;}
}
</style>
