<style scoped>
section {
    padding: 1.5rem;
}
</style>

<template>
    <section class="bg-white rounded-4 w-100 d-flex flex-column">
        <div class="d-flex align-items-center justify-content-between">
            <BaseTypography tag="h3" color="gray" weight="bold" size="md">
                {{ title }}</BaseTypography
            >
            <router-link
                v-if="toName"
                :to="{ name: toName, query: query }"
                class="text-decoration-none text-gray"
            >
                <i class="fa-solid fa-chevron-right"></i>
            </router-link>
        </div>

        <slot></slot>
    </section>
</template>

<script setup>
import { defineProps } from 'vue'
import BaseTypography from '../Typography/BaseTypography.vue'

defineProps({
    /**
     * @type {string}
     * @description 카드 제목
     */
    title: {
        type: String,
        default: null,
    },
    /**
     * @type {string}
     * @description 이동할 페이지의 name 항목.
     */
    toName: {
        type: String,
        default: null,
    },
    query: {
        type: Object,
        default: null,
    },
})
</script>
