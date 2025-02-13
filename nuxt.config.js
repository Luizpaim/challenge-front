import path from 'path'
export default {
  srcDir: 'src/', // Define a pasta src como diretório principal do projeto

  alias: {
    '@': path.resolve(__dirname, 'src'),
    '~': path.resolve(__dirname, 'src'),
  },
  ssr: false,
  server: {
    port: 4000,
  },
  head: {
    title: 'challenge-front',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: [
    'primevue/resources/themes/saga-blue/theme.css',
    'primevue/resources/primevue.min.css',
    'primeicons/primeicons.css',
  ],

  plugins: [
    '@/plugins/appolo-graphQL.ts',
    '@/plugins/primevue.ts',
    '@/plugins/pinia.ts',
  ],

  components: true,

  buildModules: ['@nuxt/typescript-build', '@nuxtjs/composition-api/module'],

  modules: ['primevue/nuxt', '@nuxtjs/apollo', 'nuxt-sweetalert2'],
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'http://localhost:3000/graphql',
      },
    },
  },

  build: {
    transpile: ['primevue'],
  },
}
