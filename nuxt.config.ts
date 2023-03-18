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
    }
    
})
