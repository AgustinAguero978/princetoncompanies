import { createApp } from 'vue'
import { MotionPlugin } from '@vueuse/motion'
import App from '@/App.vue'
import router from '@/plugins/router'
import '@/index.css'

const app = createApp(App)

app.use(router)
app.mount('#app')
app.use(MotionPlugin)
