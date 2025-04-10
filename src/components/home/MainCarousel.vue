<style scoped>
.page-container {
    position: absolute;
    background-color: rgba(1, 1, 1, 0.5);
    padding: 0.25rem 0.5rem;
    border-radius: 50px;
    width: fit-content;
    color: white;
    font-size: 0.5rem;
    bottom: 1rem;
    right: 1rem;
    z-index: 99;
}
</style>

<template>
    <div class="position-relative w-100">
        <Carousel ref="carouselRef" v-model="currentSlide" v-bind="config" class="w-100">
            <Slide>
                <div
                    class="w-100 bg-primary d-flex text-white px-3 justify-content-between align-items-center"
                    style="height: 5rem"
                >
                    <div>
                        <BaseTypography size="md" weight="bold" color="white">
                            나의 오늘을 어제보다 더 가치있게!
                        </BaseTypography>
                        <BaseTypography size="sm" weight="medium" color="white">
                            나만의 소비 습관 설정하기
                        </BaseTypography>
                    </div>
                    <BaseTypography size="2xl"> 😎 </BaseTypography>
                </div>
            </Slide>
            <Slide>
                <div
                    class="w-100 bg-light-blue d-flex text-white px-3 justify-content-between align-items-center"
                    style="height: 5rem"
                >
                    <div>
                        <BaseTypography size="md" weight="bold">
                            돈 버는 방법이 궁금해?
                        </BaseTypography>
                        <BaseTypography size="sm" weight="medium">
                            스냅과 함께 돈 버는 방법을 알아보세요!
                        </BaseTypography>
                    </div>
                    <BaseTypography size="2xl"> 💸 </BaseTypography>
                </div>
            </Slide>
            <Slide>
                <div
                    class="w-100 bg-black d-flex text-white px-3 justify-content-between align-items-center"
                    style="height: 5rem"
                >
                    <div>
                        <BaseTypography size="md" weight="bold" color="white">
                            만드느라 너무 힘들었어요ㅠ
                        </BaseTypography>
                        <BaseTypography size="sm" weight="medium" color="white">
                            스냅으로 돈 벌고 싶어요!
                        </BaseTypography>
                    </div>
                    <BaseTypography size="2xl"> 😭 </BaseTypography>
                </div>
            </Slide>
        </Carousel>
        <div class="page-container">
            <p class="text-center text-white">{{ currentSlide + 1 }} / {{ total + 1 }}</p>
        </div>
    </div>
</template>

<script setup>
import 'vue3-carousel/carousel.css'
import { ref, onUnmounted } from 'vue'
import { Carousel, Slide } from 'vue3-carousel'
import BaseTypography from '../common/Typography/BaseTypography.vue'

const carouselRef = ref()
const currentSlide = ref(0)
const total = 2

const onNext = () => {
    if (currentSlide.value === total) {
        currentSlide.value = 0
    } else {
        carouselRef.value.next()
    }
}

// 인터벌 시작
const intervalId = setInterval(() => onNext(), 3000)

// 컴포넌트가 제거될 때 인터벌 정리
onUnmounted(() => {
    clearInterval(intervalId)
})

const config = {
    height: 80,
    itemsToShow: 1,
    pauseAutoplayOnHover: true,
}
</script>
