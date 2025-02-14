/* eslint-disable @typescript-eslint/no-unused-vars */
import { mount } from '@vue/test-utils'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { ref } from 'vue'
import CompletionCourse from '../../src/components/CompletionCourse.vue'
import LevelProgress from '../../src/components/LevelProgress.vue'
import CardProgress from '../../src/components/CardProgress.vue'

import { useContentStore } from '../../src/store/content'

vi.mock('../../src/store/content', () => {
  return {
    useContentStore: () => ({
      loadByIdContent: vi.fn(),
      contentById: ref(null),
    }),
  }
})

vi.mock('../../src/utils/contents-hardcode', () => ({
  default: [
    {
      id: '1',
      title: 'Título de Teste',
      description: 'Descrição de teste',
      company_id: '123',
      url: 'https://example.com',
      total_likes: 10,
      type: 'video',
      cover: 'https://example.com/image.jpg',
      created_at: '2023-01-01',
    },
  ],
}))

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

  it('renders correctly', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('displays the list of contents', () => {
    const items = wrapper.findAllComponents(CardProgress)
    expect(items.length).toBe(1)
  })
})
