import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    ssr: true,
    theme: {
      defaultTheme: 'light',
      themes: {
        light: {
          colors: {
            primary: '#1976D2',
            secondary: '#424242',
            accent: '#82B1FF',
            error: '#FF5252',
            info: '#2196F3',
            success: '#4CAF50',
            warning: '#FFC107'
          }
        }
      }
    },
    defaults: {
      VContainer: {
        fluid: true,
        class: 'pa-4'
      },
      VCard: {
        class: 'ma-2'
      },
      VBtn: {
        variant: 'elevated'
      }
    }
  })

  nuxtApp.vueApp.use(vuetify)
}) 