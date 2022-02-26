import { createApp } from 'vue'

import {router} from '@/router/index.js';

import App from './App.vue'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'

const app = createApp(App).use(Quasar, quasarUserOptions);

app.use(router);

app.mount('#app')
