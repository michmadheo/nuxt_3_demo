<template>
    <div>
        <p>Product Details for {{ id  }}</p>
    </div>
</template>

<script setup lang="ts">
    const { id } = useRoute().params
</script>

<style scoped>

</style>