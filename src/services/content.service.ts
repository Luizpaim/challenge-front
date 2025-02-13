import { parse } from 'graphql'
import { getApolloClient } from './apollo-instance.service'

export type Content = {
  id: string
  title: string
  type: string
  description: string
  cover: string
  url: string
  created_at: string
  allow_download: boolean
  is_embeddable: boolean
  format: string
  bytes: number
  total_likes: number
  metadata: Record<string, any>
}

type ServiceContentResponse = {
  provision: Content
}

export const findByIdContent = async (
  contentId: string
): Promise<ServiceContentResponse> => {
  const apolloClient = getApolloClient()
  const response = await apolloClient.query<ServiceContentResponse>({
    query: parse(`
        query {
          provision(content_id: "${contentId}") {
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

  return response.data
}
