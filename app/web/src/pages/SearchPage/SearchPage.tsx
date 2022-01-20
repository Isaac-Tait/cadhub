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
  'Designs',
  'f9163c551d5426a8e5c12b6c2daede42'
)

const SearchPage = () => {
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
