export default {
  // Global page headers: https://go.nuxtjs.dev/config-head

  ssr: true,

  head: {
    title: 'golf-nuxt',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  server: {
    host: '0',
  },   // other configs 


  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/scss/colors.scss',
    '~/assets/scss/type.scss',
    '~/assets/scss/main.scss'

  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vidle.js' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    'nuxt-gsap-module',
  ],

  gsap: {
    extraPlugins: {
      cssRule: true,
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules

  modules: [
    'nuxt-socket-io',
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',

  ],
  // ADD IN LOCAL VERSION
  io: {
    // module options  
    sockets: [{
      cors: '*',
      name: 'main',
      //url: 'http://localhost:3000/'

         url: 'ws://golf-totem.herokuapp.com/socket.io/?EIO=4&transport=websocket',
    }]
  },


  env: {
    version: 'local' // Also set this in server.js
    // online / pusher 
  },
  styleResources: {
    scss: ['./assets/scss/*.scss']
  },


  serverMiddleware: ["~/serverMiddleware/socket-io-server.js"],    // ADD IN ONLINE VERSION
  //serverMiddleware: ["~/serverMiddleware/server.js"],   // ADD IN LOCAL NETWORK VERSION

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
