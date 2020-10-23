<template>
  <div :class="$style.field">
    <div :class="$style.container">
      <h2>Добавить новое фото</h2>
      <label for="name">Имя или название</label><br/>
      <input size="100" type="text" id="name" v-model="name"/><br/>

      <label for="url">Адрес в интернете</label><br/>
      <input size="100" type="text" id="url" v-model="url"/><br/>

      <label for="description">Описание</label><br/>
      <textarea cols="100" rows="8" id="description" v-model="description"></textarea>

      <button class="button is-primary" @click="add">Добавить</button>
      <button class="button is-danger" @click="$emit('exit')">Закрыть</button>
    </div>
</div>
</template>

<script>
    export default {
        name: "AddPhoto",
        data:()=>({
            name:"",
            url:"",
            description:""
        }),
        methods:{
            async add(){
                const photo = {
                    name:this.name,
                    url:this.url,
                    description:this.description
                };
                try{
                    await this.$store.dispatch("addPhoto",photo);
                    setTimeout(this.$emit('exit'),1000);
                    this.name = "";
                    this.url = "";
                    this.description = "";
                } catch (e) {
                    //
                }


            }
        }
    }
</script>

<style module>
  .field{
    position: absolute;
    top:0;
    left: 0;
    z-index: 5;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.2);
  }
  .container {
    margin: 10em auto;
    width: 655px;
    border: solid 2px #000;
    background: #ffffff;
    padding: 25px;
  }
  .container h2{
    margin: 0 0 0.6em;
    font-weight: bold;
    font-size: 1.2em;
  }
  .container input, .container textarea {
    width: 600px;
    margin-bottom: 1em;
  }
</style>
