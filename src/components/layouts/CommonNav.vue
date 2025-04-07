<style scoped>
.nav-bar {
    padding: 0.75rem 2rem;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
}
</style>

<template>
    <nav class="d-flex justify-content-between nav-bar w-100 bg-white">
        <!-- TODO: nav button -->
        <!-- <<router-link ></router-link> -->
        <RouterLink>
            <button class="d-flex flex-column align-items-center gap-1 bg-white border-0">
                <i class="fa-solid fa-house-chimney"></i>
                <span class="fs-xs">홈</span>
            </button>
        </RouterLink>
        <li>네브바1</li>
        <li>네브바2</li>
        <li>네브바3</li>
        <li>네브바4</li>
    </nav>
</template>

<script setup></script>
