<template>
    <div class="container mt-5">
        <div class="row d-flex justify-content-center">
            <div class="col-md-6">
                <div class="card px-5 py-5" id="form1">
                    <form class="form-data" @submit="onSubmit">
                        <div class="forms-inputs mb-4">
                            <label class="w-100 mt-3">
                                <BaseTypography
                                    size="md"
                                    color="gray"
                                    weight="medium"
                                    class="text-start w-100"
                                    >유저 아이디</BaseTypography
                                >
                                <input
                                    type="text"
                                    class="form-control w-100"
                                    placeholder="1234"
                                    v-model="userId"
                                />
                            </label>
                        </div>
                        <div class="forms-inputs mb-4">
                            <label class="w-100 mt-3">
                                <BaseTypography
                                    size="md"
                                    color="gray"
                                    weight="medium"
                                    class="text-start w-100"
                                    >비밀번호</BaseTypography
                                >
                                <input
                                    type="password"
                                    class="form-control w-100"
                                    placeholder="********"
                                    v-model="password"
                                />
                            </label>
                        </div>
                        <div class="mb-3">
                            <button
                                @click.prevent="onSubmit"
                                class="btn btn-primary w-100"
                                type="submit"
                            >
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import BaseTypography from '@/components/common/Typography/BaseTypography.vue'
import { getUserInfo } from '@/api/auth'
import { getUserLocalStorage } from '@/utils/token'

const userId = ref('')
const password = ref('')
const router = useRouter()

const onSubmit = async () => {
    // API 호출을 통해 로그인 가능 여부 확인
    const data = await getUserInfo(userId.value, password.value)
    if (data !== null) {
        router.push({
            name: 'home',
        })
    }
    console.log('User ID:', userId.value)
    console.log(data)
}

onMounted(() => {
    if (getUserLocalStorage !== null)
        router.push({
            name: 'home',
        })
})
</script>
