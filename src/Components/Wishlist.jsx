import React, { useEffect, useState } from 'react'
import { CustomProductUseState } from '../hooks/CustomProductUseState';
import { AddToBagCustomUseState } from '../hooks/AddToBagCustomUseState';

function Wishlist() {
  const [wishlist, addToWishlist] = CustomProductUseState([])
  const [WishListedProducts, setWishListedProducts] = useState([])
  const [productsOnBag, addProductToBag] = AddToBagCustomUseState([])
  
  useEffect(() => {setWishListedProducts(wishlist)}, [])
  useEffect(() => {
    (WishListedProducts.length > 0) ? addToWishlist(WishListedProducts) : addToWishlist("empty")
  }, [WishListedProducts])
  
  function clickHandler(getId){
    setWishListedProducts(WishListedProducts.filter(item => item.id !== getId))
  }
  
  function addToBag(getProduct, getId){
    addProductToBag(getProduct)
    setWishListedProducts(WishListedProducts.filter(item => item.id !== getId))
  }

  return (
    <div className='wishlistedProduct'>
      {
        (WishListedProducts.length > 0) ? WishListedProducts.map((product, index) => {
          let actualPrice = String(product.price + (product.price * product.discountPercentage/100)).substring(6, -1);
          return <div key={index} className='product'>
            <div className="productImage">
                <img src={product.thumbnail} alt="" />
            </div>
            <h5 className="productName">{product.title}</h5>
            <h3 className="price">${product.price} <span className='actualPrice'>${actualPrice}</span> <span className="discount">({product.discountPercentage}%)</span></h3>
            <button className='button addToCart' onClick={() => {addToBag(product, product.id)}}>Add to Bag</button>
            <button className='button remove' onClick={() => {clickHandler(product.id)}}>X</button>
        </div>
        }) : <div className='emptyWishlist'>
        <h1>YOUR WISHLIST IS EMPTY</h1>
        <p>Add items that you like to your wishlist. Review them anytime and easily move them to the bag.</p>
        </div>
      }
    </div>
  )
}

export default Wishlist