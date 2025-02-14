import { mount } from '@vue/test-utils'
import { vi } from 'vitest'
import { ref } from 'vue'
import { useContentStore } from '../../src/store/content'
import ContentPlayer from '../../src/components/ContentPlayer.vue'
import ContentViewImage from '../../src/components/ContentViewImage.vue'
import ContentViewIframe from '../../src/components/ContentViewIframe.vue'
import ContentViewLink from '../../src/components/ContentViewLink.vue'

vi.mock('../../src/store/content', () => {
  const contentById = ref({ title: '', type: '' })

  return {
    useContentStore: vi.fn(() => ({
      contentById,
    })),
  }
})

describe('ContentPlayer.vue', () => {
  it('should correctly render an image', async () => {
    const wrapper = mount(ContentPlayer)
    const store = useContentStore()
    store.contentById.value = { title: 'Curso de Vue.js', type: 'image' }
    wrapper.vm.contentById.value = { title: 'Curso de Vue.js', type: 'image' }

    await wrapper.vm.$nextTick()

    expect(wrapper.findComponent(ContentViewImage).exists()).toBe(true)
    expect(wrapper.findComponent(ContentViewIframe).exists()).toBe(false)
    expect(wrapper.findComponent(ContentViewLink).exists()).toBe(false)
  })

  it('should correctly render a PDF', async () => {
    const wrapper = mount(ContentPlayer)
    const store = useContentStore()
    store.contentById.value = { title: 'Curso de Vue.js', type: 'pdf' }
    wrapper.vm.contentById.value = { title: 'Curso de Vue.js', type: 'pdf' }

    await wrapper.vm.$nextTick()

    expect(wrapper.findComponent(ContentViewImage).exists()).toBe(false)
    expect(wrapper.findComponent(ContentViewIframe).exists()).toBe(true)
    expect(wrapper.findComponent(ContentViewLink).exists()).toBe(false)
  })

  it('should correctly render a video', async () => {
    const wrapper = mount(ContentPlayer)
    const store = useContentStore()
    store.contentById.value = { title: 'Curso de Vue.js', type: 'video' }
    wrapper.vm.contentById.value = { title: 'Curso de Vue.js', type: 'video' }

    await wrapper.vm.$nextTick()

    expect(wrapper.findComponent(ContentViewImage).exists()).toBe(false)
    expect(wrapper.findComponent(ContentViewIframe).exists()).toBe(true)
    expect(wrapper.findComponent(ContentViewLink).exists()).toBe(false)
  })

  it('should correctly render a link', async () => {
    const wrapper = mount(ContentPlayer)
    const store = useContentStore()
    store.contentById.value = { title: 'Curso de Vue.js', type: 'link' }
    wrapper.vm.contentById.value = { title: 'Curso de Vue.js', type: 'link' }

    await wrapper.vm.$nextTick()

    expect(wrapper.findComponent(ContentViewImage).exists()).toBe(false)
    expect(wrapper.findComponent(ContentViewIframe).exists()).toBe(false)
    expect(wrapper.findComponent(ContentViewLink).exists()).toBe(true)
  })

  it('should correctly render a txt', async () => {
    const wrapper = mount(ContentPlayer)
    const store = useContentStore()
    store.contentById.value = { title: 'Curso de Vue.js', type: 'txt' }
    wrapper.vm.contentById.value = { title: 'Curso de Vue.js', type: 'txt' }

    await wrapper.vm.$nextTick()

    expect(wrapper.findComponent(ContentViewImage).exists()).toBe(false)
    expect(wrapper.findComponent(ContentViewIframe).exists()).toBe(true)
    expect(wrapper.findComponent(ContentViewLink).exists()).toBe(false)
  })
})
