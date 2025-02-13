import { mount } from '@vue/test-utils'
import { vi } from 'vitest'
import { ref } from 'vue'
import { useContentStore } from '@/store/content'
import PageWithPlayer from '@/pages/index.vue'
import ContentPlayer from '@/components/ContentPlayer.vue'
import ContainerPage from '@/components/ContainerPage.vue'

vi.mock('@/store/content', () => {
  const contentById = ref({ title: '', type: 'image' })

  return {
    useContentStore: vi.fn(() => ({
      contentById,
    })),
  }
})

describe('PageWithPlayer.vue', () => {
  it('must correctly render the components', async () => {
    const wrapper = mount(PageWithPlayer, {
      global: {
        stubs: {
          ContainerPage: true,
          ContentPlayer: true,
        },
      },
    })

    const store = useContentStore()
    store.contentById.value = { title: 'Curso de Vue.js', type: 'image' }
    wrapper.vm.contentById = { title: 'Curso de Vue.js', type: 'image' }

    await wrapper.vm.$nextTick()

    expect(wrapper.findComponent(ContainerPage).exists()).toBe(true)
    expect(wrapper.findComponent(ContentPlayer).exists()).toBe(true)
  })
})
