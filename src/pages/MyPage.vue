<style scoped></style>

<template>
    <BaseLayout>
        <div class="pt-3" v-for="(menus, index) in MY_PAGE_MENUS" :key="index">
            <BaseTypography size="lg" weight="bold" color="primary" class="mx-3 py-3">
                {{ menus.title }}
            </BaseTypography>
            <div
                class="bg-white pt-3 pb-3"
                role="button"
                v-for="(element, index) in menus.elements"
                @click="goToAddPage"
                :key="index"
            >
                <BaseTypography size="md" weight="medium" color="primary" class="mx-3">
                    {{ element.name }}</BaseTypography
                >
            </div>
        </div>
    </BaseLayout>
</template>

<script setup>
import { useRouter } from 'vue-router'
import BaseLayout from '@/components/layouts/BaseLayout.vue'
import BaseTypography from '@/components/common/Typography/BaseTypography.vue'
import { MY_PAGE_MENUS } from '@/common/constants'

const router = useRouter()

const goToAddPage = () => {
    router.push(`/mypage/edit/name`)
}
</script>
