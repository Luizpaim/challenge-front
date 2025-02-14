import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import ContainerPage from '../../src/components/ContainerPage.vue'

vi.mock('../../src/components/HeaderCourse.vue', () => ({
  default: {
    template: '<div data-test="mock-header-course">Mock Header</div>',
  },
}))

vi.mock('../../src/components/CompletionCourse.vue', () => ({
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
