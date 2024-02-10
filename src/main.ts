import './assets/main.css'
import settings from './settings'

import { createApp } from 'vue'
import App from './App.vue'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    settings: Record<string, unknown>;
    something: String
  }
}

const app = createApp(App)
app.config.globalProperties.settings = settings

app.config.globalProperties.something = 'ARGH!'

app.mount('#app')
