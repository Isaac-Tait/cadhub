//import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import React from 'react'
//import ReactDOM from 'react-dom'

{
  /* <-- added for client-side search functionality. --> */
}
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'
import algoliasearch from 'algoliasearch/lite'
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom'

const searchClient = algoliasearch(
  'Projects',
  '6d62da295dcb97fc8c022ff317a7527f'
)

const SearchPage = ({ input }) => {
  return (
    <div>
      <MetaTags title="Search" description="Search page" />
      <h1>SearchPage</h1>
      <RedwoodApolloProvider>
        <InstantSearch indexName="Designs" searchClient={searchClient}>
          <SearchBox />
          <Hits />
        </InstantSearch>
      </RedwoodApolloProvider>
    </div>
  )
}

export default SearchPage