export default {
  // Global page headers: https://go.nuxtjs.dev/config-head



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
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules

  modules: [
    'nuxt-socket-io',
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    
  ],
  // ADD IN LOCAL VERSION
  // io: {
  //   // module options  
  //   sockets: [{
  //     name: 'main',
  //     url: 'http://192.168.1.233:3001'
  //   }]
  // },

  styleResources: {
    scss: ['./assets/scss/*.scss']
  },

  // ADD IN ONLINB VERSION
  serverMiddleware: ["~/serverMiddleware/socket-io-server.js"],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
