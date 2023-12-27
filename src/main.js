// import './styles/main.css'
import { createApp } from 'vue'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { createAuth0 } from "@auth0/auth0-vue";
import App from './App.vue'
import router from './router/router'

/* add icons to the library */
library.add(fas, fab, far)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.use(router)
.use(
    await createAuth0({
    domain: import.meta.env.VITE_AUTH0_DOMAIN,
    clientId: import.meta.env.VITE_AUTH0_CLIENT_ID,
    useRefreshTokens: true,
    cacheLocation: 'localstorage',
    authorizationParams: {
        redirect_uri: import.meta.env.VITE_AUTH0_CALLBACK_URL,
    },
    })
)
.mount('#app')
