<script lang="ts" setup>
    const isLoggedIn = useIsLoggedIn()
    

</script>

<template>

    <div>
        Page: composables {{ isLoggedIn }}
       
    </div>

</template>