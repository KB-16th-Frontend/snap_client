<template>
    <button @click="openModal">Modal</button>
    <Teleport to="#modal">
        <div class="overlay" v-if="isOpen" @click="onBackdropClick">
            <transition name="slide-up" appear>
                <div class="modal-container" @click.stop>

                    <BaseTypography
                        size="md"
                        color="gray"
                        weight="medium"
                        class="text-start w-100 my-3"
                        >지출 기록 상세</BaseTypography
                    >
                    <!-- 이모지 + 타이틀 -->
                    <PaymentItem title="스타벅스" emoji="☕️" :description="description" />
                    <!-- 지출 얼마  -->
                    <BaseTypography
                        size="xl"
                        color="primary"
                        weight="black"
                        class="text-start w-100 my-3"
                        >{{ amount.toLocaleString() }}원
                    </BaseTypography>
                    <!-- 날짜 2000-01-01  -->
                    <BaseTypography size="md" class="text-start w-100 my-3">
                        <b>날짜:</b> {{ date }}
                    </BaseTypography>
                    <!-- 카테고리 : #태그  -->
                    <BaseTypography
                        size="md"
                        class="text-start w-100 my-3 d-flex align-items-center gap-1"
                    >
                        <!-- TODO: getCategoryAPI -->
                        <b>카테고리:</b>
                        <div class="badge rounded-pill bg-primary">#카페</div>
                    </BaseTypography>
                    <!-- 수입 or 지출 -->
                    <BaseTypography size="md" class="text-start w-100 my-3">
                        <b>수입/지출 분류:</b> {{ transactionType === 'income' ? '수입' : '지출' }}
                    </BaseTypography>
                    <!-- 상세 설명 -->
                    <BaseTypography size="md" class="text-start w-100 my-3">
                        <b>상세 설명:</b> {{ description.length > 0 ? description : '없음' }}

                    </BaseTypography>
                    <div class="d-flex justify-content-between gap-2 mt-3">
                        <!-- 수정하기 버튼 -->
                        <button
                            class="btn btn-success btn-lg w-100 mt-1 mx-1 bg-green"
                            @click="goEdit"
                        >
                            수정하기
                        </button>
                        <!-- 닫기 버튼 -->
                        <button
                            class="btn btn-danger btn-lg w-100 mt-1 mx-1 bg-cancel"
                            @click="closeModal"
                        >
                            닫기
                        </button>
                    </div>
                </div>
            </transition>
        </div>
    </Teleport>
</template>
<script setup>
import { ref } from 'vue'
import BaseTypography from '../Typography/BaseTypography.vue'
import PaymentItem from '../PaymentItem/PaymentItem.vue'
import { useRouter } from 'vue-router'

defineProps({
    transactionType: {
        type: String,
        required: true,
        validator: (value) => {
            return ['income', 'spending'].includes(value)
        },
    },
    title: {
        type: String,
        default: '',
    },
    amount: {
        type: Number,
        default: 0,
    },
    date: {
        type: String,
        default: '',
    },
    categoryId: {
        type: String,
        default: '',
    },
    emoji: {
        type: String,
        default: '',
    },
    description: {
        type: String,
        default: '',
    },
})

const isOpen = ref(false)
const router = useRouter()

const openModal = () => {
    isOpen.value = true
}

const closeModal = () => {
    isOpen.value = false
}
const goEdit = () => router.push('/payments/edit')

const onBackdropClick = (e) => {
    // 배경 자체 클릭했을 때만 닫기
    if (e.target === e.currentTarget) {
        closeModal()
    }
}
</script>

<style>
.overlay {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
}
.modal-container {
   
    /* max-width: 768px; */
    width: 90%;
    max-width: 46rem;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    /* width: 600px; */
    /* width: 31.25px; */
    background: white;
    border-radius: 10px;
    padding: 20px;
    box-sizing: border-box;
}
</style>
