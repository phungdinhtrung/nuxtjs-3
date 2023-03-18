<template>
    <div>
        <nav style="display: flex; gap: 10px;">
            <NuxtLink to="/">Home</NuxtLink>
            <NuxtLink to="/movies">Movies</NuxtLink>
            <NuxtLink to="/admin">Admin</NuxtLink>
        </nav>
        <slot></slot>
    </div>
</template>