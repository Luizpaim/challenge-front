import Vue from 'vue'
import { Plugin } from '@nuxt/types'
import PrimeVue from 'primevue/config/PrimeVue'
import Button from 'primevue/button/Button'
import Card from 'primevue/card/Card'
import Dialog from 'primevue/dialog/Dialog'
import InputText from 'primevue/inputtext/InputText'
import ScrollPanel from 'primevue/scrollpanel/ScrollPanel'
import ProgressBar from 'primevue/progressbar/ProgressBar'
import ToastService from 'primevue/toastservice/ToastService'
import Toast from 'primevue/toast/Toast'
import Panel from 'primevue/panel/Panel'

Vue.component('PPanel', Panel)
Vue.component('PButton', Button)
Vue.component('PCard', Card)
Vue.component('PDialog', Dialog)
Vue.component('PInputText', InputText)
Vue.component('PScrollPanel', ScrollPanel)
Vue.component('PProgressBar', ProgressBar)
Vue.use(PrimeVue)
Vue.use(ToastService)

Vue.component('ToastService', Toast)

export const toastPlugin: Plugin = ({ app }, inject) => {
  inject('toast', app.prototype.$toast)
}
