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
    max-width: 1280px;
    min-width: 900px;
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
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

