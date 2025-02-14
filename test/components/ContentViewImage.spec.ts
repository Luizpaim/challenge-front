import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import ContentViewImage from '../../src/components/ContentViewImage.vue'

describe('ContentViewImage.vue', () => {
  it('should correctly render the image when the URL is set', async () => {
    const wrapper = mount(ContentViewImage)

    await wrapper.setProps({
      url: 'https://example.com/image.jpg',
    })
    await wrapper.vm.$nextTick()

    const image = wrapper.find('.image-preview')
    expect(image.exists()).toBe(true)
    expect(image.attributes('src')).toBe('https://example.com/image.jpg')
    expect(image.attributes('alt')).toBe('Image')
  })

  it('should not render image if URL is empty', async () => {
    const wrapper = mount(ContentViewImage)

    await wrapper.setProps({
      url: '',
    })
    await wrapper.vm.$nextTick()

    const image = wrapper.find('.image-preview')
    expect(image.exists()).toBe(false)
  })
})
