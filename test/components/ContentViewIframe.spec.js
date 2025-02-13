import { shallowMount } from '@vue/test-utils'

import ContentViewIframe from '@/components/ContentViewIframe.vue'

describe('ContentViewIframe.vue', () => {
  it('renderiza o componente corretamente', () => {
    const wrapper = shallowMount(ContentViewIframe, {
      propsData: {
        url: 'https://example.com',
      },
    })

    expect(wrapper.exists()).toBe(true) // Verifica se o componente foi montado
    expect(wrapper.classes()).toContain('content-iframe') // Verifica a classe principal
  })

  it('renderiza o iframe com a URL correta', () => {
    const testUrl = 'https://example.com'
    const wrapper = shallowMount(ContentViewIframe, {
      propsData: { url: testUrl },
    })

    const iframe = wrapper.find('iframe')
    expect(iframe.exists()).toBe(true)
    expect(iframe.attributes('src')).toBe(testUrl)
    expect(iframe.classes()).toContain('iframe-preview')
  })
})
