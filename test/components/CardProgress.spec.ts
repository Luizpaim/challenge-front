/* eslint-disable @typescript-eslint/no-unused-vars */
import { mount } from '@vue/test-utils'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { ref } from 'vue'
import CompletionCourse from '@/components/CompletionCourse.vue'
import LevelProgress from '@/components/LevelProgress.vue'
import CardProgress from '@/components/CardProgress.vue'
import { useContentStore } from '@/store/content'
import contentsHardcode from '@/utils/contents-hardcode'

vi.mock('primevue/scrollpanel', () => ({
  default: {
    template: '<div><slot /></div>',
  },
}))

vi.mock('primevue/button', () => ({
  default: {
    template: '<button><slot /></button>',
  },
}))

vi.mock('@/store/content', () => {
  return {
    useContentStore: () => ({
      loadByIdContent: vi.fn(),
      contentById: ref(null),
    }),
  }
})

describe('CompletionCourse.vue', () => {
  let wrapper: any
  let mockStore: any

  beforeEach(() => {
    mockStore = useContentStore()
    wrapper = mount(CompletionCourse, {
      global: {
        components: { LevelProgress, CardProgress },
      },
    })
  })

  it('renderiza corretamente', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('exibe a lista de conteúdos', () => {
    const items = wrapper.findAllComponents(CardProgress)
    expect(items.length).toBe(contentsHardcode.length)
  })
})
