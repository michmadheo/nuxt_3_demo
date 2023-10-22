<template>
    <div class="container p-2">
        <p>This is the home page</p>
    </div>
    <div class="main-container">
        <div class="container flex font-bold">
            This is the home page
        </div>
        <div class="flex w-400">
            This is the home page
        </div>
    </div>
    <div class="grid grid-cols-2 gap-5 mx-10 my-20">
        <div v-for="item in products" v-bind:key="item.id">
            <NuxtLink class="item-btn" :to="`/products/${item.id}`">{{ item.title }}</NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts">
    const { data: products } = await useFetch('https://fakestoreapi.com/products');
</script>

<style scoped>

</style>