import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import './mock/index.js'
import 'lib-flexible/flexible'

const app = createApp(App)
app
   .mount('#app')
