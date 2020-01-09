import React from 'react'
import App, {Container} from 'next/app'
import withApolloClient from '../lib/with-apollo-client'
import {ApolloProvider} from '@apollo/react-components'
import {ApolloClient} from 'apollo-boost'
import {MyApolloClientCache} from '../lib/init-apollo'

interface Props {
  apolloClient: ApolloClient<MyApolloClientCache>
}

class MyApp extends App<Props> {
  render() {
    const {Component, pageProps, apolloClient} = this.props
    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />
        </ApolloProvider>
      </Container>
    )

  }
}

export default withApolloClient(MyApp)

