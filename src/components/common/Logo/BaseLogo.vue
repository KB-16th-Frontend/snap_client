<style scoped>
.logo-container {
    display: block;
    width: 85px;
}

.logo {
    display: block;
    width: 100%;
    height: auto;
}
.logo-image {
    width: 100%;
    height: auto;
    object-fit: contain;
}
</style>

<template>
    <router-link to="home" class="logo-container navbar-brand">
        <figure class="logo">
            <img src="@/assets/images/logo.png" alt="Snap Logo Image" class="logo-image" />
        </figure>
    </router-link>
</template>
