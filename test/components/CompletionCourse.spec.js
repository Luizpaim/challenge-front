import { nextTick } from 'vue'
import CompletionCourse from '@/components/CompletionCourse.vue'

jest.mock('@/utils/contents-hardcode', () => [
  {
    id: '1',
    title: 'Conteúdo 1',
    description: 'Descrição 1',
    company_id: 'comp1',
    url: 'url1',
    total_likes: 10,
    type: 'video',
    cover: 'cover1',
    created_at: '2025-02-13',
  },
  {
    id: '2',
    title: 'Conteúdo 2',
    description: 'Descrição 2',
    company_id: 'comp2',
    url: 'url2',
    total_likes: 20,
    type: 'audio',
    cover: 'cover2',
    created_at: '2025-02-14',
  },
])

jest.mock('@/store/content', () => {
  return () => ({
    loadByIdContent: jest.fn().mockResolvedValue(),
    contentById: { value: null },
  })
})

const LevelProgressStub = {
  name: 'LevelProgress',
  template: '<div class="level-progress-stub"></div>',
}

const CardProgressStub = {
  name: 'CardProgress',
  props: ['title', 'description'],
  template:
    '<div class="card-progress-stub">{{ title }} - {{ description }}</div>',
}

const ScrollPanelStub = {
  name: 'ScrollPanel',
  template: '<div class="scroll-panel-stub"><slot></slot></div>',
}

describe('CompletionCourse.vue', () => {
  beforeEach(() => {
    loadByIdContentMock.mockClear()
  })

  it('chama loadByIdContent com o primeiro conteúdo no mounted', async () => {
    const wrapper = mount(CompletionCourse, {
      global: {
        components: {
          LevelProgress: LevelProgressStub,
          CardProgress: CardProgressStub,
          ScrollPanel: ScrollPanelStub,
        },
      },
    })

    expect(loadByIdContentMock).toHaveBeenCalledWith('1')
  })

  it('renderiza os CardProgress com os títulos e descrições', async () => {
    const wrapper = mount(CompletionCourse, {
      global: {
        components: {
          LevelProgress: LevelProgressStub,
          CardProgress: CardProgressStub,
          ScrollPanel: ScrollPanelStub,
        },
      },
    })

    const html = wrapper.html()
    expect(html).toContain('Conteúdo 1 - Descrição 1')
    expect(html).toContain('Conteúdo 2 - Descrição 2')
  })

  it('chama loadByIdContent ao clicar em um item', async () => {
    const wrapper = mount(CompletionCourse, {
      global: {
        components: {
          LevelProgress: LevelProgressStub,
          CardProgress: CardProgressStub,
          ScrollPanel: ScrollPanelStub,
        },
      },
    })

    const itemDiv = wrapper
      .findAll('div')
      .find((div) => div.text().includes('Conteúdo 2 - Descrição 2'))
    expect(itemDiv).toBeTruthy()

    await itemDiv.trigger('click')
    expect(loadByIdContentMock).toHaveBeenCalledWith('2')
  })

  it('força a atualização do DOM ao alterar a lista de conteúdos', async () => {
    const wrapper = mount(CompletionCourse, {
      global: {
        components: {
          LevelProgress: LevelProgressStub,
          CardProgress: CardProgressStub,
          ScrollPanel: ScrollPanelStub,
        },
      },
    })

    expect(wrapper.html()).toContain('Conteúdo 1 - Descrição 1')
    expect(wrapper.html()).toContain('Conteúdo 2 - Descrição 2')

    const novoConteudo = {
      id: '3',
      title: 'Conteúdo 3',
      description: 'Descrição 3',
      company_id: 'comp3',
      url: 'url3',
      total_likes: 30,
      type: 'video',
      cover: 'cover3',
      created_at: '2025-02-15',
    }

    wrapper.vm.contents.push(novoConteudo)
    await nextTick()

    expect(wrapper.html()).toContain('Conteúdo 3 - Descrição 3')
  })
})
