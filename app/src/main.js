import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import naive from 'naive-ui'
import i18n from './i18n' 
import AOS from 'aos'
import 'aos/dist/aos.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(naive)
app.use(createPinia())
app.use(i18n)
app.use(router)

app.mount('#app')


AOS.init({
    once: true,          // Faqat 1 marta animatsiya ishlaydi
    duration: 200,      // Animatsiya davomiyligi (ms)
    easing: 'ease-in-out', // Animatsiya o‘tishi silliqroq
    offset: 100,         // Scrolldan pastga 100px tushganda boshlansin
    mirror: false        // Scroll orqaga qaytganda qayta animatsiya bo‘lmasin
  })
AOS.init()