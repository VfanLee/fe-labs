import 'vuetify/styles'
// import '@vuetify/styles/vuetify/index.scss'

import { createVuetify } from 'vuetify'

const vuetify = createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#42b883',
        },
      },
      dark: {
        colors: {
          primary: '#42b883',
        },
      },
    },
  },
})

export default vuetify
