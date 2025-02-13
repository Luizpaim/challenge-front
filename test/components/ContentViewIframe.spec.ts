import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import ContentViewIframe from '@/components/ContentViewIframe.vue'

describe('ContentViewIframe.vue', () => {
  it('deve renderizar corretamente o iframe quando não é PDF', async () => {
    const wrapper = mount(ContentViewIframe)

    await wrapper.setProps({
      url: 'https://example.com/video.mp4',
      type: 'video',
    })
    await wrapper.vm.$nextTick()

    const iframe = wrapper.find('iframe')
    expect(iframe.exists()).toBe(true)
    expect(iframe.attributes('src')).toBe('https://example.com/video.mp4')

    const contentLink = wrapper.find('.content-link')
    expect(contentLink.exists()).toBe(false)
  })

  it('deve renderizar corretamente a descrição e o botão de download quando é um PDF', async () => {
    const wrapper = mount(ContentViewIframe)

    await wrapper.setProps({
      url: 'https://example.com/document.pdf',
      description: 'Este é um documento PDF',
      type: 'pdf',
    })
    await wrapper.vm.$nextTick()

    const contentLink = wrapper.find('.content-link')
    expect(contentLink.exists()).toBe(true)

    const description = wrapper.find('.description')
    expect(description.exists()).toBe(true)
    expect(description.text()).toBe('Este é um documento PDF')

    const button = wrapper.find('a')
    expect(button.exists()).toBe(true)
    expect(button.attributes('href')).toBe('https://example.com/document.pdf')
  })
})
