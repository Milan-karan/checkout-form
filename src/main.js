import Vue from 'vue'
import App from './App.vue'
import VueFormWizard from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'

Vue.use(VueFormWizard)

new Vue({
    el: "#app"
}).$mount(App)


// const app = createApp(App)
// app.use(VueFormWizard)
// app.mount('#app')
