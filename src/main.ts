import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'

// The start of every view application is from this CreateApp layout
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
