<style scoped></style>

<template>
    <BaseLayout>
        <div class="pt-3" v-for="menus in MY_PAGE_MENUS">
            <BaseTypography size="lg" weight="bold" color="primary" class="mx-3 py-3">
                {{ menus.title }}
            </BaseTypography>
            <div
                class="bg-white pt-3 pb-3"
                role="button"
                v-for="element in menus.elements"
                @click="goToAddPage"
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
const memberId = 1

const goToAddPage = () => {
    router.push(`/mypage/add/${memberId}`)
}
</script>
