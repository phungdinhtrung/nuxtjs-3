<script setup lang="ts">

const { 
    actLogin, 
    actLogout
} = useLoginStore()

const { isLoggedIn } = storeToRefs(useLoginStore())
    
</script>

<template>
    <div>
        <nav style="display: flex; gap: 10px;">
            <NuxtLink to="/">Home</NuxtLink>
            <NuxtLink to="/movies">Movies</NuxtLink>
            <NuxtLink to="/admin">Admin</NuxtLink>
            <NuxtLink to="/login" v-if="!isLoggedIn" @click="actLogin()">Login</NuxtLink>
            <a v-else href="#" @click="actLogout()"> Logout </a>
        </nav>
        <slot></slot>
    </div>
</template>