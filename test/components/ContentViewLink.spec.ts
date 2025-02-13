import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import ContentViewLink from '@/components/ContentViewLink.vue'

describe('ContentViewLink.vue', () => {
  it('should correctly render the description and link access button', async () => {
    const wrapper = mount(ContentViewLink)

    await wrapper.setProps({
      url: 'https://example.com/document.pdf',
      description: 'Este é um documento LINK',
      type: 'link',
    })

    await wrapper.vm.$nextTick()
    const contentLink = wrapper.find('.content-link')
    expect(contentLink.exists()).toBe(true)

    const description = wrapper.find('.description')
    expect(description.exists()).toBe(true)
    expect(description.text()).toBe('Este é um documento LINK')

    const button = wrapper.find('a')
    expect(button.exists()).toBe(true)
    expect(button.attributes('href')).toBe('https://example.com/document.pdf')
  })
})
