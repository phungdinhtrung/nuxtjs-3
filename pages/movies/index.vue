<script lang="ts" setup>

  	definePageMeta({
		middleware: ['auth']
	})

</script>

<template>
	<div>
		Page: movies
	</div>
	<div>
		<MovieSearch></MovieSearch>
	</div>
	<div>
		<NuxtLink to="/movies/children1">Children 1</NuxtLink>
		<NuxtLink to="/movies/children2">Children 2</NuxtLink>
	</div>
</template>

<style scoped>

</style>
