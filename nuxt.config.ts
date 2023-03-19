import { fileURLToPath } from 'node:url' 

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

    // RUNTIME CONFIG
    // ================================================
    runtimeConfig: {
        // Private keys are only available on the server
        apiSecret: '123',

        // Public keys that are exposed to the client
        public: {
            hostName: process.env.NUXT_HOSTNAME,
            apiBase: process.env.NUXT_HOSTNAME + '/api' || '/api'
        }
    },

    // COMPONENT CONFIG
    // ================================================
    components: [ // Auto import component by path: components/movie/search.vue --> MovieSearch
        {
          path: '~/components',
          pathPrefix: false,            // default: true; by file name, pathPrefix: false; components/movie/search.vue --> <Search></Search>
        },
    ],

    
    // AUTO IMPORT CONFIG
    // ================================================
    imports: { // Auto import js, ts, vue
        dirs: [
            'composables/**',
            'stores/**'
        ]
    },

    // MODULE CONFIG
    // ================================================
    modules: [ 
        '@pinia/nuxt'
    ],
    pinia: {
        autoImports: [ 
            'defineStore', 
            'storeToRefs'
        ],
    },

    // ALIAS
    // ================================================
    alias: {
        "~~": "./",
        "@@": "./",
        "~": "./",
        "@": "./",
        "assets": "@/assets",
        "public": "@/public",
        'images': fileURLToPath(new URL('@/assets/images', import.meta.url)),
        'style': fileURLToPath(new URL('@/assets/style', import.meta.url)),
        'data': fileURLToPath(new URL('@/assets/other/data', import.meta.url))
    },


    // UI CONFIG
    // ================================================
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
