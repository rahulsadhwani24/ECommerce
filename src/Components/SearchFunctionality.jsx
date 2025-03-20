import React, { useState } from 'react'


function SearchFunctionality({query, setquery}) {
  return (
    <div>
        <input type="text" name="search" 
        id="search" className='search' 
        placeholder='Search for products' value={query}
        onChange={(e) => {
          setquery(e.target.value)
        }}
        />
    </div>
  )
}

export default SearchFunctionality