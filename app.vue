<script lang="ts" setup>

  useHead({
		titleTemplate: (titleChunk: any): string => {
			return titleChunk ? `${titleChunk} - My movies site` : 'My movies site'
		}
  })

</script>

<template>
	<div>
		<NuxtLayout>
			<NuxtPage/>
		</NuxtLayout>	
	</div>
</template>
