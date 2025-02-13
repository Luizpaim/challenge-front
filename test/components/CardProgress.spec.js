import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'

import CardProgress from '@/components/CardProgress.vue'

const PanelStub = {
  name: 'Panel',
  template: `
    <div>
      <div class="panel-header"><slot name="header"></slot></div>
      <div class="panel-content"><slot></slot></div>
    </div>
  `,
}

describe('CardProgress.vue', () => {
  it('força a atribuição e atualização do título', async () => {
    const wrapper = mount(CardProgress, {
      props: {
        title: 'Título de Teste',
        description: 'Descrição de teste',
        type: 'video',
      },
      global: {
        components: {
          Panel: PanelStub,
        },
      },
    })

    await nextTick()

    await wrapper.setProps({ title: 'Título de Teste' })

    expect(wrapper.text()).toContain('Título de Teste')

    await nextTick()

    expect(wrapper.text()).toContain('Título de Teste')
  })
})
