<template>
  <div>
    <header :class="$style.header">
       <div :class="$style.htext">
         <nuxt-link to="/"><h1 >КотоФото</h1></nuxt-link>
         <div>
           <nuxt-link to="/about">About</nuxt-link>
         </div>
       </div>

    </header>
    <nuxt/>
  </div>
</template>

<style module>
  .header{
    background: gold;
    height: 70px;
    display: flex;
  }
  .htext{
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
  }
  @media (min-width: 950px) {
    .htext{
      width: 900px;
    }
  }
  @media (max-width: 949px) and (min-width: 700px){
    .htext{
      width: 600px;
    }
  }
  @media (max-width: 699px){
    .htext{
      width: 270px;
    }
  }
  .htext h1{
    font-size: 2.5em;
    font-weight: 900;
    color: black;
  }
  .htext> div a{
    display: inline-block;
    margin-top: 1.4em;
    color: #47494E;
    font-size: 1.4em;
    font-family: none,serif;
    text-decoration: underline;
  }
</style>

