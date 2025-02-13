import { mount } from '@vue/test-utils'
import { nextTick, ref } from 'vue'
import { vi } from 'vitest'
import TitlePage from '@/components/TitlePage.vue'
import { useContentStore } from '@/store/content'
vi.mock('@/store/content', () => {
  const contentById = ref({ title: '', type: '' })

  return {
    useContentStore: vi.fn(() => ({
      contentById,
    })),
  }
})

describe('TitlePage.vue', () => {
  it('should correctly render the title from the mocked store', async () => {
    const wrapper = mount(TitlePage)
    const store = useContentStore()
    store.contentById.value = { title: 'Curso de Vue.js', type: 'video' }
    wrapper.vm.contentById.value = { title: 'Curso de Vue.js', type: 'video' }

    await nextTick()

    expect(wrapper.find('h1').text()).toBe('Curso de Vue.js')
  })
})
