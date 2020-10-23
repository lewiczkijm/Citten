<template>
    <div>
      <h2>Приложение Котофото</h2>
      <p>Это изоморфное приложение на основе Nuxt. Его задача - отработка возможностей и изучение технологии Server Side Rendering.
        В приложении используется загрузка данных по http как с сервера, так и с клиента. Это позволяет ускорить загрузку а также
        обеспечить SEO оптимизацию.
        Но при этом мы сохраняем гибкость VUE и удобство одностранияника.
        В качестве back-endа я использую сервис <a href="https://backendless.com/">backendless.com</a>
        он обеспечивает REST API при работе с данными.
      </p>
      <p>Функции приложения - загрузка и просмотр фотографий с котиками. Фотографии догружаются на главную
        страницу при прокрутке страницы вниз. Есть функции добавления и удаления, а также возможность ставить лайки.
        Предусмотрена обработка сетевых ошибок.</p>
      <p>Исходные коды приложения доступны, конструктивная критика приветствуется!</p>
      <p>
        <ul>
          <li><a href="https://backendless.com/">backendless.com</a></li>
          <li><a href="https://nuxtjs.org/">https://nuxtjs.org/</a></li>
          <li><a href="https://bulma.io/">https://bulma.io/</a></li>
        </ul>
      </p>
    </div>
</template>

<script>
    export default {
        name: "about"
    }
</script>

<style scoped>
div {
  margin: 1em 10em;
}
h2 {
  margin: 1em 0;
  font-size: 1.5em;
  font-weight: bold;
}
p {
  margin: 1em 0;
}
li {
  list-style: inside;
}
</style>
