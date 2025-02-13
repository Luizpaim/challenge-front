import { nextTick } from 'vue'
import CompletionCourse from '@/components/CompletionCourse.vue' // ajuste o caminho conforme necessário

// Stub de dados fake para substituir o contentsHardcode
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

// Cria um mock para o store

jest.mock('@/store/content', () => {
  return () => ({
    loadByIdContent: jest.fn().mockResolvedValue(),
    contentById: { value: null }, // não precisa ser reativo para o teste
  })
})

// Stubs para os componentes externos
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

    // Aguarda a resolução de promessas pendentes e a execução do onMounted

    // O primeiro item possui id '1'
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

    // Verifica se os stubs de CardProgress renderizam os textos esperados
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

    // Como o template renderiza:
    // <div v-for="item in contents" :key="item.id" @click="loadByIdContent(item.id)">
    //   <CardProgress ... />
    // </div>
    // Procuramos o <div> que contenha o texto referente ao segundo conteúdo
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

    // Verifica os conteúdos iniciais
    expect(wrapper.html()).toContain('Conteúdo 1 - Descrição 1')
    expect(wrapper.html()).toContain('Conteúdo 2 - Descrição 2')

    // Força a atualização: adiciona um novo conteúdo
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

    // Como "contents" é um ref interno (acessível via wrapper.vm.contents),
    // adicionamos um novo item e forçamos a atualização com nextTick.
    wrapper.vm.contents.push(novoConteudo)
    await nextTick()

    expect(wrapper.html()).toContain('Conteúdo 3 - Descrição 3')
  })
})
