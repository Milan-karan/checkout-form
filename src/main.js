import { createApp } from 'vue'
import App from './App.vue'
import VueFormWizard from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'

const app = createApp(App)
app.use(VueFormWizard)
app.mount('#app')
