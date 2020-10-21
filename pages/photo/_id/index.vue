<template>
  <div>
    <div>
      <img :src="url">
      <img src="@/assets/images/heart.png">
      <img src="@/assets/images/delete.png">
    </div>

    <div>
      <h2>{{name}}</h2>
      <p>{{description}}</p>
    </div>
  </div>
</template>

<script>
    import store from "@/data/store"
    export default {
        name: "index.vue",
        layout:"singlePhoto",
        asyncData({params}){
            return {
                id:params.id,
                url:"https://vologda-oblast.ru/upload/iblock/0a8/koshki.jpg",
                name:"Lorem ipsum",
                likes:4,
                description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mattis diam sapien. Donec bibendum, diam a consequat ultrices, nunc velit lacinia orci, eu sollicitudin lacus nibh sit amet erat. Cras bibendum tincidunt dolor, vel egestas lorem venenatis non. Fusce ullamcorper feugiat bibendum. Duis nec arcu id leo mollis porttitor a volutpat ipsum. Vestibulum vel facilisis magna. Nunc at feugiat mi. Etiam id tortor feugiat turpis facilisis efficitur et ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi eleifend dapibus lacus et viverra. Donec facilisis dapibus dapibus. Ut rhoncus a sem vel posuere.

Integer sit amet rhoncus libero, id pretium nisi. Ut odio nisi, pretium ut ullamcorper ullamcorper, consequat id dui. Quisque tempor euismod diam quis lobortis. Fusce convallis risus volutpat elit mollis, eget finibus mauris iaculis. Nam a hendrerit turpis. Ut non tellus vestibulum, accumsan dui sit amet, placerat odio. Suspendisse eleifend dolor vel maximus fringilla. Nam condimentum malesuada magna vitae tincidunt. Ut condimentum, felis sed tincidunt pulvinar, ante risus aliquet magna, sed congue purus nisl quis orci. Fusce mattis, lectus vel sodales varius, turpis lectus vulputate sapien, nec auctor sapien ligula quis elit. Cras varius vitae mi id suscipit. Morbi fringilla eros eleifend nulla vestibulum, non dictum enim accumsan. Nullam vulputate velit turpis, in condimentum ligula mattis nec. Integer tristique odio eu odio lobortis elementum. Nulla ornare ante sed diam malesuada feugiat.

`
            }
        },
    }
</script>

<style scoped>

</style>
