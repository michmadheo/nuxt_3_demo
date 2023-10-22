<template>
    <div>
        <header class="shadow-sm bg-white">
            <nav class="container mx-auto p-4 flex justify-between">
                <NuxtLink to="/">Hello</NuxtLink>
                <ul class="flex gap-4">
                    <li><NuxtLink class="header-btn" to="/">Home</NuxtLink></li>
                    <li><NuxtLink class="header-btn" to="/about">About</NuxtLink></li>
                    <li><NuxtLink to="/products">Products</NuxtLink></li>
                </ul>
            </nav>
        </header>
    </div>
    <div>
        <slot />
    </div>
</template>

<style scoped>
    .router-link-exact-active {
        color: #ffffff;
    }
</style>