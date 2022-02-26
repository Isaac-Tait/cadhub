import React from 'react'

import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'
import algoliasearch from 'algoliasearch/lite'
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom'

const searchClient = algoliasearch(
    'Projects',
    '6d62da295dcb97fc8c022ff317a7527f'
  )

export const search = ({id, title, description, code}) => {    
    return (
        <RedwoodApolloProvider>
        <InstantSearch indexName="Designs" searchClient={searchClient}>
          <SearchBox />
          <Hits />
        </InstantSearch>
      </RedwoodApolloProvider>
    );
}