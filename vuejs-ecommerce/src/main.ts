import { createApp } from 'vue'
import Contador from './exemples/ProductList.vue'

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

const app = createApp(Contador)
app.use(vuetify)
app.mount('#app')
