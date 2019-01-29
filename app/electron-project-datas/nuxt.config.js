const pkg = require('./package')


module.exports = {
  /**
   * spa | universal
  */
  mode: 'spa',

  /**
   * ソースの存在しているディレクトリ
   */
  // srcDir: 'app',

  /**
   * Vue Routerの設定を上書きできる
   */
  router: {
    /**
     * https://ja.nuxtjs.org/api/configuration-router
     * mode : ルーティングのモードを設定します。サーバーサイドレンダリングのため、この設定を変更することは非推奨です。
    */
    mode: 'hash'
  },

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
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
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [ '~/plugins/VeeValidate' ],

  /*
  ** Nuxt.js modules
  */
  modules: [
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      babel: {
        plugins: ['transform-decorators-legacy', 'transform-class-properties']
      }
      /**
       * webpackの出力先
       */
      config.output.publicPath = './_nuxt/',
      config.target = 'electron-renderer'
    }
  },
  /**
   * https://ja.nuxtjs.org/api/configuration-dev
   * nuxt build、nuxt start、nuxt generate 以外の場合はTrueになる
   */
  dev: process.env.NODE_ENV === 'development',

}
