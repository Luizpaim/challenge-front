import { ApolloClient } from 'apollo-client'

let apolloClient: ApolloClient<any> | null = null

export const setApolloClient = (client: ApolloClient<any>) => {
  apolloClient = client
}

export const getApolloClient = (): ApolloClient<any> => {
  if (!apolloClient) {
    throw new Error('Apollo Client não foi inicializado corretamente.')
  }

  return apolloClient
}
