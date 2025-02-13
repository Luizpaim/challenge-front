import Vue from 'vue'
import { Plugin } from '@nuxt/types'
import PrimeVue from 'primevue/config/PrimeVue'
import ToastService from 'primevue/toastservice/ToastService'
import Toast from 'primevue/toast/Toast'

Vue.use(PrimeVue)
Vue.use(ToastService)

Vue.component('ToastService', Toast)

export const toastPlugin: Plugin = ({ app }, inject) => {
  inject('toast', app.prototype.$toast)
}
