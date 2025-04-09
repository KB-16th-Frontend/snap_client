<template>
    <div>
        <BaseTypography
            tag="h2"
            size="lg"
            color="primary"
            weight="bold"
            class="text-start w-100 pb-3 mb-3"
            >이름을 변경했어요!
            <span class="text-black d-block mt-3">
                앞으로 {{ props.name }} 님이라고 <br />
                불러드릴게요!
            </span>
        </BaseTypography>
    </div>
</template>

<script setup>
import BaseTypography from '../common/Typography/BaseTypography.vue'

const props = defineProps({
    name: {
        type: String,
        default: '김스냅',
    },
})
</script>
