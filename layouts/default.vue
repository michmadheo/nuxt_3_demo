<template>
    <div>
        <header class="shadow-sm bg-white">
            <nav class="container mx-auto p-4 flex justify-between">
                <a class='text-[#12b488] font-bold'>DemoNuxt</a>
                <ul class="flex gap-4">
                    <li><NuxtLink to="/">Home</NuxtLink></li>
                    <li><NuxtLink to="/about">About</NuxtLink></li>
                    <li><NuxtLink to="/demo">Demo Pinia</NuxtLink></li>
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
        @apply header-btn
    }
</style>