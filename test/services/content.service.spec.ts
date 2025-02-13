import { vi } from 'vitest'
import { parse } from 'graphql'
import { findByIdContent } from '@/services/content.service'
import { getApolloClient } from '@/services/apollo-instance.service'

vi.mock('@/services/apollo-instance.service', () => ({
  getApolloClient: vi.fn(),
}))

describe('findByIdContent Service', () => {
  it('you must fetch a content by the ID and return the data correctly', async () => {
    const mockResponse = {
      data: {
        provision: {
          id: '1',
          title: 'Teste de Conteúdo',
          type: 'video',
          description: 'Descrição do conteúdo de teste',
          cover: 'cover.jpg',
          url: 'https://example.com/video.mp4',
          created_at: '2024-02-12T10:00:00Z',
          allow_download: true,
          is_embeddable: false,
          format: 'mp4',
          bytes: 1024,
          total_likes: 50,
          metadata: {},
        },
      },
    }

    const mockApolloClient = {
      query: vi.fn().mockResolvedValue(mockResponse),
    }

    ;(getApolloClient as any).mockReturnValue(mockApolloClient)

    const result = await findByIdContent('1')

    expect(mockApolloClient.query).toHaveBeenCalledWith({
      query: parse(`
        query {
          provision(content_id: "1") {
            id
            title
            type
            description
            cover
            url
            created_at
            allow_download
            is_embeddable
            format
            bytes
            total_likes
            metadata
          }
        }
      `),
    })

    expect(result).toEqual(mockResponse.data)
  })

  it('should throw a mistake when the query fails', async () => {
    const mockApolloClient = {
      query: vi.fn().mockRejectedValue(new Error('Erro na consulta')),
    }

    ;(getApolloClient as any).mockReturnValue(mockApolloClient)

    await expect(findByIdContent('1')).rejects.toThrow('Erro na consulta')
  })
})
