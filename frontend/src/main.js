import { createApp, ref, watch, onMounted } from 'vue'
import App from './App.vue'
import router from './router'

// import './assets/main.css'
// import './index.css'
// import './style.css'
// import './tailwind.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

const app = createApp(App)
app.use(router)
app.mount('#app')

export function useTheme() {
    const theme = ref('auto')

    onMounted(() => {
        const saved = localStorage.getItem('theme') || 'auto'
        theme.value = saved
        applyTheme(saved)
    })

    const applyTheme = (newTheme) => {
        const html = document.documentElement
        html.setAttribute('data-theme', newTheme)
        
        if (newTheme === 'dark') {
            html.classList.add('dark')
            html.classList.remove('light')
        } else if (newTheme === 'light') {
            html.classList.add('light')
            html.classList.remove('dark')
        } else {
            html.classList.remove('dark', 'light')
        }
        
        localStorage.setItem('theme', newTheme)
    }

    const setTheme = (newTheme) => {
        theme.value = newTheme
        applyTheme(newTheme)
    }

    return { theme, setTheme }
}