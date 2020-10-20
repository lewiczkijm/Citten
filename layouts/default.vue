<template>
  <div>
    <header :class="$style.header">
       <div :class="$style.htext"><a href=""><h1 >КотоФото</h1></a><div></div></div>

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
    font-size: 2.5em;
    max-width: 1280px;
    min-width: 900px;
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
  }
  .htext h1{
    font-weight: 900;
    color: black;
  }
</style>

