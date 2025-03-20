import React from 'react'
import data from '../productsData'
import DetailsCard from './DetailsCard';

function ProductDetails() {
  const product = data.filter(item => item.title.toString() === new URLSearchParams(location.search).get('product'));
  return (
    <div>
      <DetailsCard product={product}/>
    </div>
  )
}

export default ProductDetails