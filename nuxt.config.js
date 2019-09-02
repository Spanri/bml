
export default {
  mode: 'universal',
  router: { base: '/bml/' },
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/vue-sticky', ssr: false }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [],
  /*
  ** Nuxt.js modules
  */
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/style-resources',
  ],
  /*
  ** Global SCSS
  */
  styleResources: {
    scss: [
      '~assets/scss/index.scss',
    ]
  },
  /*
  ** Build configuration
  */
  build: {
    publicPath: '/assets/',
    postcss: {
      plugins: {

      },
      preset: {
        autoprefixer: {
          grid: true
        }
      }
    },
    extend(config, ctx) {
      // if (!ctx.isDev) {
      //   config.output.publicPath = "/assets/";
      // }
    }
  }
}
