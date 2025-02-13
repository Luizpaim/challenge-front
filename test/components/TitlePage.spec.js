import { shallowMount } from '@vue/test-utils'

import TitlePage from '@/components/TitlePage.vue'

import useContentStore from '@/store/content.store'
import TypeContentPlayerIcon from '@/utils/content-player-icon'

// Mock para `useContentStore`
jest.mock('@/store/content.store', () => ({
  useContentStore: jest.fn(() => ({
    contentById: { value: { title: 'Título Mockado', type: 'video' } },
  })),
}))

// Mock para `TypeContentPlayerIcon`
jest.mock('@/utils/content-player-icon', () => ({
  TypeContentPlayerIcon: {
    video: 'mocked-icon-class',
  },
}))

describe('TitlePage.vue', () => {
  let contentStoreMock

  beforeEach(() => {
    contentStoreMock = {
      contentById: {
        value: {
          title: 'Título de Teste',
          type: 'video', // Simulando um tipo válido do TypeContentPlayerIcon
        },
      },
    }
    useContentStore.mockReturnValue(contentStoreMock)
  })

  it('renderiza o componente corretamente', () => {
    const wrapper = shallowMount(TitlePage, {
      propsData: { title: 'Título de Teste' },
    })

    expect(wrapper.exists()).toBe(true) // Verifica se o componente foi montado
    expect(wrapper.classes()).toContain('title') // Verifica se a classe principal está presente
  })

  it('renderiza o título corretamente', () => {
    const wrapper = shallowMount(TitlePage, {
      propsData: { title: 'Título de Teste' },
    })

    const titleElement = wrapper.find('h1')
    expect(titleElement.exists()).toBe(true)
    expect(titleElement.text()).toBe('Título de Teste')
  })

  it('renderiza o ícone correto baseado no tipo de conteúdo', () => {
    const expectedIconClass = TypeContentPlayerIcon.video // Ajuste conforme necessário

    const wrapper = shallowMount(TitlePage, {
      propsData: { title: 'Título de Teste' },
    })

    const iconElement = wrapper.find('i')
    expect(iconElement.exists()).toBe(true)
    expect(iconElement.classes()).toContain(expectedIconClass)
  })
})
