import Vue from 'vue'
import { createPinia, PiniaVuePlugin } from 'pinia'
import { Context } from '@nuxt/types'

Vue.use(PiniaVuePlugin)
const pinia = createPinia()

export default ({ app }: Context) => {
  app.pinia = pinia
}
