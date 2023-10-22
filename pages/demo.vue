<template>
  <div>
    <a>{{ demoStore.demoName }}</a>
  </div>
  <div>
    <button @click="changeName" class="header-btn">Click here</button>
  </div>
</template>

<script lang="ts" setup>
const demoStore = useMyDemoStore();

const changeName =()=>{
  demoStore.changeDemoName('Hai');
};

definePageMeta({
  layout: 'default'
})

</script>

<style>

</style>

