//import { MetaTags } from '@redwoodjs/web'
import React from 'react'
import SearchCell from 'src/components/SearchCell/SearchCell'
const SearchPage = ({ input }) => {
  return (
    { searchText && <SearchCell input={searchText} /> }
  )
}

export default SearchPage