<template>
    <div>
        <header>
            <nav>
                <ul>
                    <li><NuxtLink to="/">Go to Home</NuxtLink></li>
                    <li><NuxtLink to="/about">Go to About</NuxtLink></li>
                    <li><NuxtLink to="/products">Go to Products</NuxtLink></li>
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
        color: #12b488;
    }
</style>