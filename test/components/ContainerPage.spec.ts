import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import ContainerPage from '@/components/ContainerPage.vue'

vi.mock('@/components/HeaderCourse.vue', () => ({
  default: {
    template: '<div data-test="mock-header-course">Mock Header</div>',
  },
}))

vi.mock('@/components/CompletionCourse.vue', () => ({
  default: {
    template: '<div data-test="mock-completion-course">Mock Completion</div>',
  },
}))

describe('ContainerPage.vue', () => {
  it('should render correctly without dependencies', () => {
    const wrapper = mount(ContainerPage)

    expect(wrapper.exists()).toBe(true)

    expect(wrapper.find('.container-page').exists()).toBe(true)
  })
})
