import { createApp } from 'vue'
import App from './App.vue'
import './scss/main.scss'
//import '../node_modules/bootstrap/scss/bootstrap.scss'
import '../node_modules/bootstrap/dist/js/bootstrap'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faDiscord, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPaperPlane, faShareNodes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faDiscord, faTwitter, faEnvelope, faPaperPlane, faShareNodes)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.use(router)
.mount('#app')
