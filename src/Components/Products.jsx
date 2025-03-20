import React from 'react'
import data from '../productsData'
import Product from './Product'
import { CustomProductUseState } from '../hooks/CustomProductUseState';
import { AddToBagCustomUseState } from '../hooks/AddToBagCustomUseState';
import LoadingProduct from './LoadingProduct';

function Products({query, Brand}) {
  const [wishlist, addToWishlist] = CustomProductUseState([])
  const [productsOnBag, addProductToBag] = AddToBagCustomUseState([])
  let products = [];
  if(Brand != "" && query != ""){
    products = data.filter(product => product.title.toLowerCase().includes(query)).filter(product => (product.brand) && product.brand.includes(Brand))
  }
  else if(Brand != ""){
      products = data.filter(product => (product.brand) && (product.brand.includes(Brand)))
  }
  else if(Brand == ""){
    products = data.filter(product => product.title.toLowerCase().includes(query))
  }
  let LoadingEffect = [
    <LoadingProduct />,
    <LoadingProduct />,
    <LoadingProduct />,
    <LoadingProduct />,
    <LoadingProduct />,
    <LoadingProduct />,
    <LoadingProduct />,
    <LoadingProduct />,
    <LoadingProduct />,
    <LoadingProduct />
  ]
  return (
    <div className='productsWrapper'>
      {
        (!products)? LoadingEffect
        : products.map(product => {
          return <Product key={product.id}
          wholeProduct={product}
          id={product.id}
          image={product.thumbnail}
          brand={product.brand} 
          name={product.title} 
          price={product.price}
          ratings={product.rating}
          stock={product.stock}
          discount={product.discountPercentage}
          addToWishlist={addToWishlist}
          addProductToBag={addProductToBag}
          />
        })
      }
    </div>
  )
}

export default Products