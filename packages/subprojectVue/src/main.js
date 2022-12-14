import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/src/dark/css-vars.scss'
import App from './App.vue'

// import vueMain from "subprojectVue2/src/main"
// import vueApp from "subprojectVue2/src/App.vue"

import vueMain from "subprojectVue3/src/main"
import vueApp from "subprojectVue3/src/App.vue"
import vueApp from "../node_modules/subprojectVue3/src/App.vue"

const app = createApp(App)

app.use(ElementPlus)
app.mount('#app')

// 调试
// const App = require("./App.vue")
