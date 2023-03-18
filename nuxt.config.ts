// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

    runtimeConfig: {
        // Private keys are only available on the server
        apiSecret: '123',

        // Public keys that are exposed to the client
        public: {
            hostName: process.env.NUXT_HOSTNAME,
            apiBase: process.env.NUXT_HOSTNAME + '/api' || '/api'
        }
    },

    components: [ // Auto import component by path: components/movie/search.vue --> MovieSearch
        {
          path: '~/components',
          pathPrefix: false,            // default: true; by file name, pathPrefix: false; components/movie/search.vue --> <Search></Search>
        },
    ],

    // Auto import js, ts, vue
    imports: {
        dirs: [
            'composables/**',
            'stores/**'
        ]
    },

    // Pinia
    modules: [ '@pinia/nuxt' ],
    pinia: {
        autoImports: [ 
            'defineStore', 
            'storeToRefs'
        ],
    },

    // Primevue
    css: [
        "primevue/resources/themes/lara-light-blue/theme.css",
        "primevue/resources/primevue.css",
        "primeicons/primeicons.css"
    ],

	build: {
		transpile: ["primevue"]
	}
})
