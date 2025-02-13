import { vi } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useContentStore } from '@/store/content'
import { findByIdContent } from '@/services/content.service'

vi.mock('@/services/content.service', () => ({
  findByIdContent: vi.fn(),
}))

describe('Content Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('must load the content correctly', async () => {
    ;(findByIdContent as any).mockResolvedValue({
      provision: { id: '1', title: 'Teste de conteúdo' },
    })

    const store = useContentStore()

    expect(store.contentById).toBeNull()

    const result = await store.loadByIdContent('1')

    expect(result).toBe(true)
    expect(store.contentById).toEqual({ id: '1', title: 'Teste de conteúdo' })
  })

  it('must deal with error when loading content', async () => {
    ;(findByIdContent as any).mockRejectedValue(
      new Error('Falha ao buscar conteúdo')
    )

    const { loadByIdContent, contentById } = useContentStore()

    const result = await loadByIdContent('1')

    expect(result).toBe(false)
    expect(contentById).toBeNull()
  })
})
