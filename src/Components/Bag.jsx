import React, { useEffect, useState } from 'react'
import { AddToBagCustomUseState } from '../hooks/AddToBagCustomUseState'
import BagProduct from './BagProduct';

function Bag() {
  const [productsOnBag, addProductToBag] = AddToBagCustomUseState([])
  const [getProductsFromBag, setProductsOnBag] = useState([]);

  useEffect(() => {setProductsOnBag(productsOnBag) }, [])
  useEffect(() => {
      (getProductsFromBag.length > 0) ? addProductToBag(getProductsFromBag) : addProductToBag("empty")
    }, [getProductsFromBag])

  function clickHandler(pId){
    setProductsOnBag(getProductsFromBag.filter(item => item.id !== pId))
  }

  return (
    <div className="bagWrapper">
      {
        (getProductsFromBag.length > 0) ? 
        getProductsFromBag.map(product => {
          return <div className='bagProductsWrapper' key={product.id}>
          <BagProduct
          brand={product.brand}
          title={product.title}
          stock={product.stock}
          price={product.price}
          discountPercentage={product.discountPercentage}
          returnPolicy={product.returnPolicy}
          image={product.thumbnail}
          />
          <button className='button removeButton' onClick={() => {clickHandler(product.id)}}>Remove</button>
          </div>
        }) : <h1>Add products to your Bag</h1>
      }
    </div>
  )
}

export default Bag