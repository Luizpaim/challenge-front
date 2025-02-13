import { Plugin } from '@nuxt/types'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import { setApolloClient } from '@/services/apollo-instance.service'

const apolloPlugin: Plugin = ({ app }, inject) => {
  if (!app.apolloProvider) {
    return
  }

  const httpLink = new HttpLink({
    uri: 'http://localhost:3000/graphql',
    credentials: 'include',
  })

  const authLink = setContext((_, { headers }) => {
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMThjMzdjZTItY2QzNC00MzA1LTljYTQtYzE1ZmM3MzZiZWFjIn0.pqWRiyQuvWRVQgIzKvQ85RrBwSF5KxeGZrkFvKt2CG8'
    return {
      headers: {
        ...headers,
        Authorization: token ? `Bearer ${token}` : '',
      },
    }
  })

  const apolloClient: ApolloClient<any> = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  })

  setApolloClient(apolloClient)

  inject('apollo', apolloClient)
}

export default apolloPlugin
