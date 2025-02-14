import { mount } from '@vue/test-utils'
import { vi } from 'vitest'
import LevelProgress from '../../src/components/LevelProgress.vue'

describe('LevelProgress.vue', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.clearAllTimers()
  })

  it('should correctly render the component', () => {
    const wrapper = mount(LevelProgress)
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.find('.title').text()).toBe('Seu progresso no estudo')
    expect(wrapper.find('.description').text()).toContain(
      'Ótimo trabalho! 🎉 Você está no caminho certo'
    )
    expect(wrapper.find('.progress-bar').exists()).toBe(true)
  })

  it('should start progress when assembling the component', async () => {
    const wrapper = mount(LevelProgress)

    const progressBar = wrapper.find('.progress-bar')
    await wrapper.vm.$nextTick()
    expect(progressBar.exists()).toBe(true)
    expect(wrapper.vm.progress.value).toBe(undefined)

    vi.advanceTimersByTime(2000)
    await wrapper.vm.$nextTick()

    expect(wrapper.vm.progress).toBeGreaterThan(0)
  })

  it('should stop progress when unmounting the component', async () => {
    const wrapper = mount(LevelProgress)

    vi.advanceTimersByTime(4000)
    await wrapper.vm.$nextTick()

    wrapper.destroy()
    vi.advanceTimersByTime(4000)
    await wrapper.vm.$nextTick()

    expect(wrapper.vm.progress.value).toBeUndefined()
  })
})
