import React, { useState } from 'react'
import data from '../productsData'

function Filter({setBrand, setquery}) {
  
  let productBrands = [];
  data.map(elem => {
    if(elem.brand != undefined){
      if(!productBrands.includes(elem.brand)){
        productBrands.push(elem.brand)
      }
    }
  })
  
  return (
    <div>
        <select className='filter' id='filter' onChange={(e) => {
          setquery("")
          setBrand(e.target.value)
          if(e.target.value == "Filter by Brand"){setBrand("")}
        }}>
            <option hidden="" value={"Filter by Brand"}>Filter by Brand</option>
            {
              productBrands.map((brand, index) => {
                return <option value={brand} key={index}>{brand}</option>
              })
            }
        </select>
    </div>
  )
}

export default Filter