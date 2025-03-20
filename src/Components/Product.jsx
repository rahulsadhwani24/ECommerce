import React, { useState } from 'react'
import { Link } from 'react-router';

function Product({image, brand, name, price, ratings, stock, discount, wholeProduct, addToWishlist}) {
  let actualPrice;
  (price) && (actualPrice = (price + (price * discount/100)).toFixed(2))
  const [buttonClicked, setButton] = useState('🤍 Wishlist')
  return (
    <div className='product'>
    <Link key={name}
    to={`/productdetails?product=${name}`} >
      <div>
        <div className="productImage">
            <img src={image} alt="" />
            <div className="ratings"><p>{ratings.toString().substring(3, -1)} ⭐</p>|<p> {(stock < 10) && "only"} {stock} left</p></div>
        </div>
        <div className='productDetails'>
          <h3 className="brandName">{(brand == undefined) ? name : brand}</h3>
          <h5 className="productName">{name}</h5>
          <h3 className="price">${price} <span className='actualPrice'>${actualPrice}</span> <span className="discount">({discount}%)</span></h3>
        </div>
    </div>
    </Link>
    <div className="wishlist" onClick={ () => { addToWishlist(wholeProduct); setButton("❤ Wishlisted") }}>{buttonClicked}</div>
    </div>
  )
}

export default Product