import { createApp } from 'vue'
import App from './App.vue'
//import './scss/main.scss'
import '../node_modules/bootstrap/scss/bootstrap.scss'
import '../node_modules/bootstrap/dist/js/bootstrap'
import router from './router'

createApp(App).use(router).mount('#app')
