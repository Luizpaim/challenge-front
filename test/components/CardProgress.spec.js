import { mount } from '@vue/test-utils'
import Panel from 'primevue/panel/Panel'
import CardProgress from '@/components/CardProgress.vue'
import TypeContentPlayerIcon from '@/utils/content-player-icon'

describe('CardProgress.vue', () => {
  const defaultProps = {
    id: '123',
    title: 'Test Title',
    url: 'https://example.com',
    totalLikes: 100,
    type: 'video',
    cover: 'https://example.com/cover.jpg',
    companyId: '456',
    createdAt: '2024-02-12',
    description: 'This is a test description.',
  }

  const factory = (props = {}) => {
    return mount(CardProgress, {
      props: { ...defaultProps, ...props },
      global: {
        components: { Panel },
      },
    })
  }

  it('renders the component correctly', () => {
    const wrapper = factory()
    expect(wrapper.exists()).toBe(true)
  })

  it('displays the title and description correctly', async () => {
    const wrapper = factory()
    await wrapper.setProps({
      title: 'Test Title',
      description: 'This is a test description.',
    })
    await wrapper.vm.$forceUpdate()
    await wrapper.vm.$nextTick()

    const titleElement = wrapper.find('.card-progress span')
    const descriptionElement = wrapper.find('.panel-content p')

    expect(titleElement.text()).toBe(defaultProps.title)
    expect(descriptionElement.text()).toBe(defaultProps.description)
  })

  it('computes the correct icon class', async () => {
    const wrapper = factory()
    await wrapper.setProps({ type: 'video' }) // Garante que a prop seja passada
    await wrapper.vm.$forceUpdate() // Força atualização do Vue
    await wrapper.vm.$nextTick() // Aguarda o DOM atualizar

    const expectedIcon = TypeContentPlayerIcon[defaultProps.type]
    expect(wrapper.vm.icon).toBe(expectedIcon)
  })

  it('renders the correct icon class in the DOM', async () => {
    const wrapper = factory()

    // Garante que a prop `type` está definida antes da verificação
    await wrapper.setProps({ type: 'video' })
    await wrapper.vm.$forceUpdate()
    await wrapper.vm.$nextTick()

    const iconElement = wrapper.find('.icon i')

    expect(iconElement.exists()).toBe(true)
    expect(iconElement.classes()[1]).toContain(
      TypeContentPlayerIcon.video.split(' ')[1]
    )
  })

  it('handles an unknown type gracefully', async () => {
    const wrapper = factory()

    // Garante que a prop `type` está definida antes da verificação
    await wrapper.setProps({ type: 'unknown' })
    await wrapper.vm.$forceUpdate()
    await wrapper.vm.$nextTick()

    const iconElement = wrapper.find('.icon i')

    expect(wrapper.vm.icon).toBeUndefined()
    expect(iconElement.exists()).toBe(true)
  })
})
