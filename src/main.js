import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import vue3lottie from 'vue3-lottie'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
// Pinia를 사용하기 위해 use
app.use(createPinia())
// vue3lottie를 사용하기 위해 use
app.use(vue3lottie, {
    name: 'vue3-lottie',
    defaultOptions: {
        loop: true,
        autoplay: true,
    },
})

app.mount('#app')
