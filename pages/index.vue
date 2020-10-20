<template>
  <div>
    <div :class="$style.btnpane">
      <button class="button is-primary is-rounded is-large">
        + add
      </button>
    </div>
    <List :photos="photos"/>
  </div>
</template>

<script>

import List from "../components/List";
export default {
  components: {
      List
  },
  asyncData: async ()=> {
      return {
          // Заглушка для списка фотографий
          photos:[
              {url:"https://artsland.ru/files/logos/9f0e36594297ac65582dfb001340ef90.jpg",name:"Серый кот",description:"gfhjyfj"},
              {url:"https://sun9-49.userapi.com/Sp6TwhKC0_msI7AHA7TRLiNy8EDzvRt31A7PHA/SwuArBYZi2Y.jpg",name:"Охотник",description:"gfhjyfj"},
              {url:"https://besthqwallpapers.com/Uploads/17-3-2018/44588/thumb-persian-cat-4k-ball-of-threads-kitten-pets.jpg",name:"С клуьком",description:"gfhjyfj"},
              {url:"https://besthqwallpapers.com/Uploads/10-5-2018/51915/thumb-russian-blue-cat-kitten-close-up-domestic-cats-cute-animals.jpg",name:"Корзина",description:"gfhjyfj"},
              {url:"https://vologda-oblast.ru/upload/iblock/0a8/koshki.jpg",name:"глазища",description:"gfhjyfj"},
          ]
      }
  }
}
</script>

<style module>
  .btnpane{
    padding: 0.6em 2.5em;
    text-align: right;
    background: #eeeeee;
  }
</style>

