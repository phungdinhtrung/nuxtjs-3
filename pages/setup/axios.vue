<script lang="ts" setup>

    const { actGetResult } = useAxiosStore()

    const data = ref([])

    const getResult = async () => {
        data.value = await actGetResult()
    }


    

    
</script>

<template>

    <div>
        Test setup: Axios {{ data }}
        <button @click="getResult"> Click</button>
    </div>

</template>