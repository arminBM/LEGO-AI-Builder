import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './assets/main.css'

import App from './App.vue'
import router from './router'

// import directive
import reveal from './directives/reveal.js'

// create app FIRST
const app = createApp(App)

// register plugins
app.use(createPinia())
app.use(router)

// register directive AFTER app is created
app.directive('reveal', reveal)

// mount app LAST
app.mount('#app')
