import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import HeaderCourse from '../../src/components/HeaderCourse.vue'

vi.mock('../../src/components/TitlePage.vue', () => ({
  default: {
    template: '<div data-test="mock-header-course">Mock TitlePage</div>',
  },
}))

describe('HeaderCourse.vue', () => {
  it('should render correctly without dependencies', () => {
    const wrapper = mount(HeaderCourse)

    expect(wrapper.exists()).toBe(true)

    expect(wrapper.find('.breadcrumb-content').exists()).toBe(true)
  })
})
