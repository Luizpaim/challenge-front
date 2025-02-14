/* eslint-disable @typescript-eslint/no-unused-vars */
import { mount } from '@vue/test-utils'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { ref } from 'vue'
import CompletionCourse from '../../src/components/CompletionCourse.vue'
import LevelProgress from '../../src/components/LevelProgress.vue'
import CardProgress from '../../src/components/CardProgress.vue'
import { useContentStore } from '../../src/store/content'
import contentsHardcode from '../../src/utils/contents-hardcode'

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

vi.mock('../../src/store/content', () => {
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
    wrapper = mount(CompletionCourse as any, {
      global: {
        components: { LevelProgress, CardProgress },
      },
    })
  })

  it('renders correctly', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('displays the list of contents', () => {
    const items = wrapper.findAllComponents(CardProgress)
    expect(items.length).toBe(contentsHardcode.length)
  })
})
