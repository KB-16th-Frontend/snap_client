<style scoped></style>

<template>
    <DetailLayout :onBack="onBack">
        <div class="d-flex flex-column gap-block w-100">
            <NotFound></NotFound>
        </div>
    </DetailLayout>
</template>

<script setup>
import NotFound from '@/components/common/NotFound/NotFound.vue'
import DetailLayout from '@/components/layouts/DetailLayout.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const onBack = () => {
    router.go(-1)
}
</script>
