import { ref } from 'vue'

export const useValidation = () => {
    const errorMessage = ref('')
    const isValidated = ref(false)
    const guideMessage = ref('')

    const validate = (value, rules) => {
        for (let rule of rules) {
            const result = rule(value)
            if (!result.isValid) {
                isValidated.value = false
                errorMessage.value = result.errorMessage
                return
            } else {
                guideMessage.value = result.guideMessage
            }
        }

        isValidated.value = true
        errorMessage.value = ''
    }

    return {
        isValidated,
        errorMessage,
        guideMessage,
        validate,
    }
}
