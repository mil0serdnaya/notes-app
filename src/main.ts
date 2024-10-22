import './assets/scss/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
// import store from './store/user'

const app = createApp(App)
app.use(router)
// app.use(store)
app.mount('#app')