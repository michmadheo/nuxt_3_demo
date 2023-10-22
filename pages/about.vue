<template>
    <div>
        <p>This is the about page</p>
        <a @click="updateName">{{ name }}</a>
    </div>
</template>

<script setup lang="ts">
import { useMyDemoStore } from "~/stores/demo";

const demoStore = useMyDemoStore();
const name = ref('Halo');

const updateName =()=>{
    name.value = 'wow'
};

definePageMeta({
    layout: 'default'
})
</script>

<style scoped>

</style>