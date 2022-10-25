
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/src/dark/css-vars.scss'
import App from './App.vue'

const app = createApp(App)

app.use(ElementPlus)
app.mount('#app')

// 调试
// const App = require("./App.vue")
