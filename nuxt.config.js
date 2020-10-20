module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'citten',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.2/css/bulma.min.css'
      }
    ]
  },
  rootDir: __dirname,
  serverMiddleware: [],
  router: {
    prefetchLinks: false
  },

  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  css: [
  ],
  plugins:[],
  modules:[
    "@nuxtjs/axios"
  ],
  styleResources: {
    scss: ['./assets/scss/global-variables.scss'], // alternative: scss
    less: [],
    stylus: []
  },
  axios:{},
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
};

