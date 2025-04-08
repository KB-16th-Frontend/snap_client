<style scoped></style>

<template>
    <BaseLayout>
        <div class="pt-3" v-for="menus in MY_PAGE_MENUS">
            <BaseTypography size="lg" weight="bold" color="primary" class="mx-3 py-3">
                {{ menus.title }}
            </BaseTypography>
            <div class="bg-white pt-3 pb-3" role="button" v-for="element in menus.elements">
                <BaseTypography size="md" weight="medium" color="primary" class="mx-3">
                    {{ element.name }}</BaseTypography
                >
            </div>
        </div>
    </BaseLayout>
</template>

<script setup>
import BaseLayout from '@/components/layouts/BaseLayout.vue'
import BaseTypography from '@/components/common/Typography/BaseTypography.vue'
import { MY_PAGE_MENUS } from '@/common/constants'
</script>
