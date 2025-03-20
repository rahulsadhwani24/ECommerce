import React, { useState } from 'react'
import Products from './Products'
import Filter from './Filter'
import SearchFunctionality from './SearchFunctionality'

function Home() {
    const [namequery, setNameQuery] = useState("")
    const [Brand, setBrand] = useState("")
    
  return (
    <div className='main'>
        <div className='Functionalities'>
            <SearchFunctionality setquery={setNameQuery} query={namequery}/>
            <Filter setBrand={setBrand} setquery={setNameQuery}/>
        </div>
        <Products query={namequery.toLowerCase()} Brand={Brand}/>
    </div>
  )
}

export default Home