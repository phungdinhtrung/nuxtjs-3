<script setup lang="ts">
    const isLoggedIn = useIsLoggedIn()
    const login = () => {
        isLoggedIn.value = true
    }

    const logout = () => {
        isLoggedIn.value = false
    }
</script>

<template>
    <div>
        <nav style="display: flex; gap: 10px;">
            <NuxtLink to="/">Home</NuxtLink>
            <NuxtLink to="/movies">Movies</NuxtLink>
            <NuxtLink to="/admin">Admin</NuxtLink>
            <NuxtLink to="/login" v-if="!isLoggedIn" @click="login">Login</NuxtLink>
            <a v-else href="#" @click="logout"> Logout </a>
        </nav>
        <slot></slot>
    </div>
</template>