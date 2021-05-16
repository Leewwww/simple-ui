import { createApp } from 'vue'
import App from './App.vue'

import 'normalize.css/normalize.css' // a modern alternative to CSS resets

import { createRouter, createWebHashHistory } from 'vue-router'
import { routes } from './router/router'

import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

const router  = createRouter({
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})

const app = createApp(App)

app.use(ElementPlus)

app.use(router)

app.mount('#app')
