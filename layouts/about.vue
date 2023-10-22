<template>
    <div>
        <p>Test</p>
    </div>
    <div>
        <slot />
    </div>
    <footer>
        <ul>
            <li><NuxtLink to="/">Go to Home</NuxtLink></li>
            <li><NuxtLink to="/about">Go to About</NuxtLink></li>
            <li><NuxtLink to="/products">Go to Products</NuxtLink></li>
        </ul>
    </footer>
</template>

<style scoped>
    .router-link-exact-active {
        color: #12b488;
    }
</style>