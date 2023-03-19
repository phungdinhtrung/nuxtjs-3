<script lang="ts" setup>

    const config = useRuntimeConfig()
    
    if (process.server) {
        console.log('API secret:', config.apiSecret)
    }

    console.log('Read env from nuxt.config.js: ', config.public.hostName);
    
</script>

<template>

    <div>
        Page: Admin
    </div>

</template>