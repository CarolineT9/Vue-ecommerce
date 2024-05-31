import { createApp } from 'vue'
import App from './App.vue'

//Vue Router
import router from './router'
//Pinia
import { createPinia } from 'pinia'
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'




const vuetify = createVuetify({
  components,
  directives,
  theme:{
    defaultTheme: 'dark'
  }
})

const app = createApp(App)
const pinia = createPinia()
app.use(vuetify)
app.use(pinia)
app.use(router)
app.mount('#app')
