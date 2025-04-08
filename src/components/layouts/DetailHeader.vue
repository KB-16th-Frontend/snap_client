<style scoped>
.btn-back {
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

header {
    padding: 1.25rem 1rem;
}
</style>

<template>
    <div class="bg-light-blue">
        <header>
            <button class="btn btn-back text-black" @click="onBack">
                <i class="fa-solid fa-arrow-left-long"></i>
            </button>
        </header>
        <slot></slot>
    </div>
</template>

<script setup>
defineProps({
    onBack: {
        type: Function,
        default: () => {},
        validator: (value) => {
            return typeof value === 'function'
        },
    },
})
</script>
